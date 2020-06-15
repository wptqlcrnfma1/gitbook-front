import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Fluffs/assets/css/demos/button.css';


class FriendSearchItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      status: this.props.status
    }
  }

  reqFollow() {
    console.log("friend request 확인" + this.props.no + ":" + sessionStorage.getItem("authUserNo")); //this.props.no = friendNo
    fetch(`${global.API_URL}/gitbook/friend/request`, {
      method: 'post',
      headers: global.API_HEADERS,
      body:JSON.stringify({
        userno: sessionStorage.getItem("authUserNo"),
        friendno: this.props.no,
        userNickName: sessionStorage.getItem("authUserNickName"),
        friendId : this.props.id,
      })
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          status: "요청중"
        });
      })
      .catch(err => console.error(err))
  }


  render() {
    return (
      <div className="FriendSearchItem">
        <div className="followers-body" style={{ margin: "10px 0px" }}>
          <img
            className="img-responsive img-circle"
            alt=""
            src={this.props.img}
            style={{
              width: "70px",
              height: "70px",
              margin: " -20px 10px 0 20px",
            }}
          />
          <div className="name-box">
            <h4 style={{ fontSize: "1.2em" }}>
              <Link to={`/gitbook/my/${this.props.id}`} style={{ color: "#88898A" }}>
                {this.props.nickname}
              </Link>
            </h4>
            <span>{this.props.name}</span>
            <span>({this.props.id})</span>
            <div className="followers-base"></div>
          </div>
          {this.props.status === '친구' ? 
            <span style={{ marginTop: "10px" }}>
            <a className="friend-btn friend-btn-mint-small">
              {this.props.status}
            </a>
          </span> : this.props.status === '요청중' ? 
          <span style={{ marginTop: "10px" }}>
            <a className="friend-btn req-btn-mint-small">
              {this.props.status}
            </a>
          </span> : this.state.status === '요청중'?  
          <span style={{ marginTop: "10px" }}>
            <a className="friend-btn req-btn-mint-small">
              {this.state.status}
            </a>
          </span> :
          <span style={{ marginTop: "10px" }}>
            <a className="friend-btn follow-btn-mint-small" onClick={this.reqFollow.bind(this)}>
              {this.props.status}
            </a>
          </span> }

        </div>
        <hr></hr>
        <br></br>
      </div>
    );
  }
}

export default FriendSearchItem;
