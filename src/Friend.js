import React, {Component} from 'react';

import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import FriendList from './FriendList';
import GroupInfo from './GroupInfo';
import GroupRegist from './GroupRegist';

{/*My Navigation 사용하는 그룹 관련 페이지 - 그룹 요청 페이지, 그룹 정보 페이지*/}
class Group extends Component {
  render() {
    
    return (
      <div className="App" >
       <Header></Header>
       <Header2 name="Friend"></Header2>
       <section className="profile-two">
       <div className="container-fluid">
        <div className="row">
              <Navigation></Navigation>  {/** 네비게이션 */}

              {/** 두번째 섹션 */}
              <div className="col-lg-6" style={{background: "#f4f4f4",marginTop:"1px"}}>
              {/* <GroupInfo></GroupInfo>
              <GroupRegist></GroupRegist> */}
              <FriendList></FriendList>


              </div>
              {/** 두번째 섹션 */}
              {/** 세번째 섹션 */}
              <Navigation2></Navigation2>
              {/** 세번째 섹션 */}

        </div>{/** row 종료 */}
       </div>{/** container-fluid 종료 */}
       </section>{/** profile-twd 종료 */}
      </div>
    );
  }

}

export default Group;
