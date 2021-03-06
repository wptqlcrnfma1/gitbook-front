import React, { Component, Fragment } from "react";

import AccountSettingBeforeAuth from "./AccountSettingBeforeAuth";
import AccountSettingAfterAuth from "./AccountSettingAfterAuth";



export default class AccountSettingSection extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			editable: false,
			userData: null,
		};
	}

	onAuth = (loginInfo) => {
		fetch(`${global.API_URL}/gitbook/user/account/checkUser`, {
			method: 'post',
			headers: global.API_HEADERS,
			body: JSON.stringify(loginInfo)
		})
		.then(response => response.json())
		.then(json => {
			if(json.result === 'success'){
				this.setState({
					userData: json.data,
					editable: true,
				})
			} else{
			
				alert("사용자 인증에 실패했습니다.");
			}
		})
		.catch(err => console.error(err));

	}

	onChangeData = (name, value) => {
		let newUserData = this.state.userData;
		newUserData[name] = value;

		this.setState({
			userData: newUserData
		});
	}

	onModifyUserInfo = (event) => {
		// 비밀번호를 제외한 나머지 정보들의 누락 여부를 확인하기
		if(this.state.userData.name == null || this.state.userData.name.trim().length < 2 || this.state.userData.name.length > 10){
			alert("이름을 2자 ~ 10자 입력해주세요.");
			return;
		}
		if(this.state.userData.phone == null || this.state.userData.phone.trim().length < 10 || this.state.userData.phone.trim().length > 11 || /[0-9]/.test(this.state.userData.phone) === false){
			alert("폰 번호를 10자 ~ 11자 입력해주세요. ('-' 빼고 입력)");
			return;
		}
		if(this.state.userData.changePassword){
			if(this.state.userData.password.length < 8){
				alert("비밀번호는 8자 이상 입력해주세요.");
				return;
			}
			if(this.state.userData.password_confirm !== this.state.userData.password){
				alert("비밀번호 확인을 잘못 입력했습니다.");
				return;
			}
		}

		// POST 통신 실행
		fetch(`${global.API_URL}/gitbook/user/account/updateUser`, {
			method: 'post',
			headers: global.API_HEADERS,
			body: JSON.stringify(this.state.userData)
		})
		.then(response => response.json())
		.then(json => {
			if(json.result === 'success'){				
				sessionStorage.setItem("authUserName", this.state.userData.name);
				sessionStorage.setItem("authUserPhone", this.state.userData.phone);
				sessionStorage.setItem("authUserBirthDay", this.state.userData.birthday);

				alert("사용자 정보 변경하였습니다.");
				window.location.reload(true);
			} else{
			
				alert("사용자 정보 변경에 실패했습니다.");
			}
		})
		.catch(err => console.error(err));

	}

	render() {
		return (
			<Fragment>
				{this.state.editable ? (
					<AccountSettingAfterAuth userData={this.state.userData} onChangeDataHandler={this.onChangeData.bind(this)} onModifyHandler={this.onModifyUserInfo.bind(this)} />
				) : (
					<AccountSettingBeforeAuth onAuthHandler={this.onAuth.bind(this)} />
				)}
			</Fragment>
		);
	}
}
