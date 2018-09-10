import React, { Component } from 'react';
import {Checkbox, List, Button} from 'antd-mobile';
import './Transfer.less';
const CheckboxItem = Checkbox.CheckboxItem;
class Transfer extends Component {
    constructor(props){
        super()
        this.state = {
            sourceList:[],
            targetList:[]
        }
    }

    componentWillReceiveProps(newProps){
        console.info(newProps)
    }
    hSourceChange(){

    }
    hSourceChange(){

    }

    render() {
        return (
            <div>


            <div class="wrapper">
                <section class="sourceWrapper">
                    <h3>选择区：</h3>
                    <input type="text"/>
                    <List>
                        {
                            this.sourceList.map((item,index)=>{
                                return <CheckboxItem key={index}
                                onChange={this.hSourceChange.bind(this,item.val)}>{item.text}</CheckboxItem>
                            })
                        }
                    </List>
                </section>
                <div>
                    <button> > </button>
                    <button> < </button>
                </div>
                <section class="targetWrapper">
                    <h3>选择区：</h3>
                    <input type="text"/>
                    <List>
                        {
                            this.targetList.map((item,index)=>{
                                return <CheckboxItem key={index}
                                onChange={this.hTargetChange.bind(this,item.val)}>{item.text}</CheckboxItem>
                            })
                        }
                    </List>
                </section>
            </div>
            <div>
                <Button>保存</Button>
            </div>
            </div>
        );
    }
}

export default Transfer;