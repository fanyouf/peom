import React, { Component } from 'react';
import { Button, Toast } from 'antd-mobile';
import './ShowExam.less';
class SubjectArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable:false
        }
    }
    hClick(str){
        // this.setState({
        //     editable:true
        // })
        if(this.refs.empty){
            console.info(this.refs.empty)
            this.refs.empty.innerHTML = str
        }
            
        if(str === this.props.subject.anser){
            Toast.success('回答正确', 2,()=>{
                this.refs.empty.innerHTML = ""
                this.props.getNext();
                
            });
        }
        else{
            Toast.fail('回答失败', 2,()=>{
                this.refs.empty.innerHTML = ""
                this.props.getNext();
            });
        }
    }
    render() {
        let {title,author,subjectArr}  = this.props.subject
        console.info(this.props.subject)
        return (
            <div>
                <h2>{title}</h2>  
                <p>{author}</p>
                <section className="itemWrap">
                    {subjectArr && subjectArr.map((item,index)=>{
                        console.info(item)
                        if(item.toString().trim() === "")
                            return <div key={index} ref="empty" className="item"></div>
                        else
                            return <div key={index} className="item">{item}</div>
                    })}
                </section>
            </div>
        );
    }
}

export default SubjectArea;