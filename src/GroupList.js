import React, { Component } from "react";
import './Fluffs/assets/css/demos/group.css';
import GroupListRequest from "./GroupListRequest";
import GroupListJoin from "./GroupListJoin";


class GroupList extends Component {
    render() {
        return(   
            <div className="react-transition fade-in" style={{animationDuration:'0.3s'}}>
            <GroupListRequest
                myreqlist={this.props.myreqlist}
                callback={this.props.callback}/>
            <hr/>
            <GroupListJoin
                grouplist={this.props.grouplist}
                groupNum={this.props.groupNum}/>
        </div>
       );
    }
}

export default GroupList;