import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import 'antd-mobile/dist/antd-mobile.css';
import { Button } from 'antd-mobile';
import { getPeom } from "./api/api"
import ShowExam from "./components/ShowExam/ShowExam"
import { runInThisContext } from 'vm';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList:[],
      currentIndex:0,
      subject:{title:'no'}
    }
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

  getNext(){
    let currentIndex = this.state.currentIndex
    if(currentIndex < this.state.subjectList.length){
      currentIndex++;
      let subject = this.state.subjectList[currentIndex]
      console.info(subject)
      this.setState({
        subject,
        currentIndex
      })
      return true;
    }
    
      
  }
  updateScore(){

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
          
        })
      }
    })
  }
  click(){
    this.setState({
      subjectList:[1,2,3]
    })
  }
  render() {
   
    return (
      <div className="App">
        <Button onClick={this.click.bind(this)} >change</Button>
        <ShowExam
          subjectList={this.state.subjectList} 
        />
        <Button>ok</Button>
      </div>
    );
  }
}

export default App;
