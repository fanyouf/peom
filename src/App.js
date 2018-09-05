import React, { Component } from 'react';
import './App.less';
import 'antd-mobile/dist/antd-mobile.css';
import { TabBar } from 'antd-mobile';
import {Route, Link} from 'react-router-dom';
import Home from "./pages/Home/Home.js"
import Exam from "./pages/ShowExam/ShowExam";
import Setting from "./pages/Settings/Setting";
import BottomMenuLink from "./components/BottomMenuLink";
import { runInThisContext } from 'vm';
class App extends Component {
  constructor(props) {
    super(props);
  
  }
  
  render() {
    return (
      <div className="App">
      <Route path="/setting" component={Setting}></Route>
      <Route path="/exam" component={Exam}></Route>

      
      <BottomMenuLink
      links={[{txt:"主页",href:'/home'},{txt:"测验",href:'/exam'},,{txt:"设置",href:'/setting'}]}></BottomMenuLink>
        
      </div>
    );
  }
}

export default App;
