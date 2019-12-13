import _ from 'lodash';
import faker from 'faker';
import React, {Component, createRef} from 'react';
import {FaBell, FaSearch, FaUserCircle} from 'react-icons/fa';
import {Container, Menu} from 'semantic-ui-react';

export default class Footer extends Component {
    render(){
        return(
            <div style={{boxShadow: '0px -1px 0px rgba(0, 0, 0, .1)'}}>
            <Container>
            <Menu secondary>
                <Menu.Menu position='right'>
                <Menu.Item>
                <p>About OneZero</p>
                </Menu.Item>
                <Menu.Item>
                <p>About Medium</p>
                </Menu.Item>
                <Menu.Item> 
                <p>Terms</p>
                </Menu.Item>
                <Menu.Item> 
                <p>Privacy</p>
                </Menu.Item>
                </Menu.Menu>  
            </Menu>
            </Container>
            </div>
            ); 
    }
}
