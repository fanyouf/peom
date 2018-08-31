import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import 'antd-mobile/dist/antd-mobile.css';
import { Button } from 'antd-mobile';
import { getPeom } from "./api/api"
import ShowExam from "./components/ShowExam"
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
    for(var i = 0;i<totalSubjectNum;i+=5){
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
          
        })
      }
    })
  }
  render() {
    return (
      <div className="App">
        
        <ShowExam subject={this.state.subject}></ShowExam>
        <Button>ok</Button>
      </div>
    );
  }
}

export default App;
