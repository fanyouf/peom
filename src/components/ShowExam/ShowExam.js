import React, { Component } from 'react';
import { Button, Toast } from 'antd-mobile';
import AnsList from './AnsList';
import SubjectArea from './SubjectArea'
import './ShowExam.less';
class ShowExam extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            currentIndex : 0,
            subject:null,
            totalIndex:0,
        }
        console.info(this.props.subjectList)
    }
    componentWillReceiveProps(nextProps){
        console.info("componentWillReceiveProps",nextProps.subjectList)
        this.setState({
            currentIndex:0,
            totalIndex: nextProps.subjectList.length,
            subject:nextProps.subjectList[0]
        })
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
        
           
                
            });
        }
        else{
            Toast.fail('回答失败', 2,()=>{
               
            });
        } 
    }
    getAns(item){
        alert(item)
        if(item !== this.state.subject.anser){
            Toast.fail('回答失败', 2,()=>{
               
            });

        }
        else{
            Toast.success('回答正确', 2,()=>{
        
           
                
            });
        }
    }
    render() {
        console.info(this.props.subjectList)

        console.info(this.state.subjectList)
        
        if (this.state.subject)

        return (
            <div>
                <SubjectArea subject={this.state.subject}></SubjectArea>
                
                <AnsList subject={this.state.subject} setAns={this.getAns.bind(this)}></AnsList>
                
            </div>
        )
        else{
            return <div>no data!</div>
        }
    }
}

export default ShowExam;