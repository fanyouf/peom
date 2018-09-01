import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './ShowExam.less';
class AnsList extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let ansArr = this.props.subject.ansArr;
        return (
            <div>
                <section>
                    {ansArr && ansArr.map((item,index)=>{
                        return <Button key={index} onClick={this.props.setAns.bind(this,item)} >{item}</Button>
                    })}
                </section>
            </div>
        );
    }
}
export default AnsList;