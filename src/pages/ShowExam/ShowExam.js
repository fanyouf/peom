import React, { Component } from 'react';
import {Toast } from 'antd-mobile';
import AnsList from './AnsList';
import { getPeom } from "../../api/api"

import SubjectArea from './SubjectArea'
import './ShowExam.less';
class ShowExam extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            subjectList:[],
            currentIndex : 0,
            subject:null,
            totalIndex:0,
        }
        console.info(this.props.subjectList)
    }
    format(rs){
        rs.forEach(obj => {
          var arr = obj.content.split(/，|。|,/)
          if(arr.length  === 5){
            arr.splice(-1,1)
          }
          if(arr.length === 4){
            obj.contentArr = arr;
            return true
          }
          else{
            throw new Error(obj);
          }
        });
      }
    
      splicePeom(obj,index = 3){
        if(undefined === index){
          index = Math.ceil( (Math.random() * 10000 )) % 4
        }
    
        let content = obj.contentArr[index];
        obj.contentArr[index] = ''
        return content;
      }
    
      getRandomSlice(obj){
        return obj.contentArr[Math.ceil((Math.random() * 10000 )) % 4]
      }
    
      createSubject(rs){
        let totalSubjectNum = Math.floor(rs.length / 4);
        let subjects = []
        for(var i = 0;i<totalSubjectNum;i++){
          let obj = {}
          obj.title = rs[i].title;
          obj.author = rs[i].author;
          obj.anser = this.splicePeom(rs[i])
          obj.subjectArr = [...rs[i].contentArr];
          obj.ansArr = [this.getRandomSlice(rs[i+1]),obj.anser,this.getRandomSlice(rs[i+2]),this.getRandomSlice(rs[i+3])]
          subjects.push(obj)
        }
        return subjects;
      }

    componentDidMount(){
        getPeom().then(rs => {
          
          this.format(rs)
          console.info(rs)
          let subjectList = this.createSubject(rs)
          console.info(subjectList)
          if(subjectList.length > 0){
            this.setState({
              subjectList,
              currentIndex:0,
              subject:subjectList[0]
            })
          }
          else{
            this.setState({
              subjectList:[],
              currentIndex:0,
              totalIndex: subjectList.length,
              subject:subjectList[0]
              
            })
          }
        })
      }

    // componentWillReceiveProps(nextProps){
    //     console.info("componentWillReceiveProps",nextProps.subjectList)
    //     this.setState({
    //         currentIndex:0,
    //         totalIndex: nextProps.subjectList.length,
    //         subject:nextProps.subjectList[0]
    //     })
    // }
    hClick(str){
        // this.setState({
        //     editable:true
        // })
        if(this.refs.empty){
            console.info(this.refs.empty)
            this.refs.empty.innerHTML = str
        }
            
        if(str === this.state.subject.anser){
            Toast.success('回答正确', 2,()=>{
        
           
                
            });
        }
        else{
            Toast.fail('回答失败', 2,()=>{
               
            });
        } 
    }
    hasMore(){
        return this.state.currentIndex < this.state.subjectList.length;
    }
    setNext(){
        if(this.hasMore()){
            let currentIndex = this.state.currentIndex + 1;
            this.setState({
                currentIndex,
                subject: this.state.subjectList[currentIndex]
            })
        }
    }
    getAns(item){
        if(item !== this.state.subject.anser){
            Toast.fail('回答失败', 2,()=>{
               this.setNext()
            });
        }
        else{
            Toast.success('回答正确', 2,()=>{ 
                this.setNext()
            });
        }
        
    }
    render() {
        
        if (this.state.subject)

        return (
            <div>
                <SubjectArea subject={this.state.subject}></SubjectArea>
                
                <AnsList subject={this.state.subject} setAns={this.getAns.bind(this)}></AnsList>
                <p>{this.state.currentIndex}/{this.state.subjectList.length}</p>
            </div>
        )
        else{
            return <div>no data!</div>
        }
    }
}

export default ShowExam;