import React, { Component } from 'react';
import {Grid, Container} from 'semantic-ui-react';
import HomeHeader from './HomeHeader';

export default class OZCategory extends Component {
    render(){
        return(
            <div>
                <div style={{boxShadow: '0px 5px 5px rgba(0, 0, 0, .1)'}}>
                    <HomeHeader/>
                </div>
            </div>



        );
    }
}