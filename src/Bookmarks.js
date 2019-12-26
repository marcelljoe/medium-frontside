import React, {Component} from 'react';
import HomeHeader from './HomeHeader';

export default class Bookmarks extends Component {
    render(){
        return(
            <div style={{ boxShadow: '0px 5px 5px rgba(0, 0, 0, .1)' }}>
                <HomeHeader />
            </div>
        );
    }
}