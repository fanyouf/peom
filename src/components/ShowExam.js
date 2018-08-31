import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './ShowExam.less';
class ShowExam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable:false
        }
    }
    click(str){
        this.setState({
            editable:true
        })
        if(this.refs.empty){
            console.info(this.refs.empty)
            this.refs.empty.innerHTML = str
        }
            
        if(str === this.props.subject.anser){
            alert("ok")
        }
        else{
            alert("wrong")
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
                    {subjectArr && subjectArr.map(item=>{
                        console.info(item)
                        if(item.toString().trim() === "")
                            return <div ref="empty" className="item">{item}</div>
                        else
                            return <div className="item">{item}</div>
                    })}
                </section>
                
                    {ansArr && ansArr.map(item=>{
                        return <Button inline disabled={this.state.editable} onClick={this.click.bind(this,item)} >{item}</Button>
                    })}
                
            </div>
        );
    }
}

export default ShowExam;