import React, { Component } from 'react';
import {Checkbox, List} from "antd-mobile";
import { getAuthor } from "../../api/api"
import "./Setting.less";
import Item from 'antd-mobile/lib/popover/Item';

const CheckboxItem = Checkbox.CheckboxItem;

class Setting extends Component {
    constructor(){
        super();
        this.state = {
            authors:[],  // 作者列表
            selected:[], // 选中的作者
            indexList:[],
        }
    }
    componentDidMount(){
        
        getAuthor().then(d=>{
            console.info(d)
            let firstName = d.map(item=>item.author.substr(0,1));
            let rs = firstName.reduce((p,k)=>(p[k]++||(p[k]=1),p),{})
            let _t = [...new Set(firstName)]
            
            let arr = _t.map(item=>{return {nameIndex:item,num:rs[item]}})
            console.info(arr)

            d.forEach((item,index) => {
                item.checked = false;
            });
            this.setState({
                authors:d,
                indexList:arr
            })
        })

        // this.$refs.sideBar.addEvent
    }
    onChange(id,e){
        let selected = this.state.selected;
        if(e.target.checked){
            selected.push(id)
        }
        else{
            let index  = selected.findIndex(item=>item===id);
            selected.splice(index,1)

        }
        this.setState({
            selected
        })
    }
    handleClick(e){
        console.info(e)
    }
    render() {
        return (
        <div>
            <div className="fixedSideBar">
                <div ref="sideBar" className="sideBar" > 
                    {
                        this.state.indexList.map((item,idx)=>{
                            return (<span key={idx} onClick={this.handleClick.bind(this,item.nameIndex)}>{item.nameIndex}</span>)
                        })
                    }
                </div>
            </div>
            <div>
                我喜欢的作者：
            </div>
            <List renderHeader='select :'>
              {this.state.authors.map(i => {
                  return <CheckboxItem checked={this.state.selected.includes(i.id)} key={i.id} onChange={(e) => this.onChange(i.id,e)}>
                  {i.author}
                </CheckboxItem>
              })
              }
            </List>
        </div>
        )}
}

export default Setting;