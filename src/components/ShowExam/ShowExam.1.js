import React, { Component } from 'react';
import { Button, Toast } from 'antd-mobile';
import './ShowExam.less';
class ShowExam extends Component {
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
        let {title,author,ansArr,subjectArr}  = this.props.subject
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
                
                    {ansArr && ansArr.map((item,index)=>{
                        return <Button key={index} inline disabled={this.state.editable} onClick={this.hClick.bind(this,item)} >{item}</Button>
                    })}
                
            </div>
        );
    }
}

export default ShowExam;