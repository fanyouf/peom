import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { browserHistory } from 'react-router-dom';


import "./BottomMenuLink.less";
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
            <nav className='nav'>
             {this.props.links.map((item,index)=>{
                    return <Link
                    className={this.state.currentLink===item.href ? 'current' : ''} 
                    onClick={this.changeLink.bind(this,item.href)} key={index} to={item.href}>{item.txt}</Link>
                })}
            </nav>
 
            
        );
    }
}

export default BottomMenuLink;