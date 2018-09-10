import React, { Component } from 'react';
import Storage from '../../utils/LocalStorage'


class Home extends Component {
    render() {
        console.info("asfsadf")
        var s = new Storage()

        s.set("abc",1)
        return (
            <div>
                HOME
            </div>
        );
    }
}
export default Home;
