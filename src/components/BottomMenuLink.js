import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { browserHistory } from 'react-router-dom';
import {Popover} from 'antd-mobile'
import "./BottomMenuLink.less";
const Item = Popover.Item
class BottomMenuLink extends Component {
    constructor(props){
        super();
        this.state={
            currentLink:"/home"
        }
    }
    changeLink(href){
        this.setState({
            currentLink:href
        })
    }
    render() {
        console.info(this.state.currentLink)
        return (
            <div>
            <nav className='nav'>
             {this.props.links.map((item,index)=>{
                    return <Link
                    className={this.state.currentLink===item.href ? 'current' : ''} 
                    onClick={this.changeLink.bind(this,item.href)} key={index} to={item.href}>{item.txt}</Link>
                })}
            </nav>
            </div>
        );
    }
}

export default BottomMenuLink;