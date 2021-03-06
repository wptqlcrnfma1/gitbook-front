import React, { Component } from "react";
import {Link} from "react-router-dom";
//import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/group.css';
import './Fluffs/assets/css/demos/groupTab.css';


class GroupHeaderImg extends Component {

    render() {
        return(
         <div className="imges">
                <img src={this.props.groupinfo.image} className="imges"/>
                <div className="content">
                    <h3 style={{fontFamily:"'Nanum Gothic', sans-serif"}}>{this.props.groupinfo.groupTitle}</h3>
                </div> 
                <div className="img-cover"></div>
                {this.props.groupinfo.grant !== 'user_req' ? <Link to={`/gitbook/upload/${this.props.groupinfo.no}`} className='btn-floating'><div><i className="fa fa-pencil fa-1x"></i></div></Link> : ''}
                
        </div>
        );
    }
}


export default GroupHeaderImg;