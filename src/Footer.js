import _ from 'lodash';
import faker from 'faker';
import React, {Component, createRef} from 'react';
import {FaBell, FaSearch, FaUserCircle} from 'react-icons/fa';
import {Segment, Rail, Ref, Sticky, Item, Divider, Dropdown, Trigger, Container, Menu, Form, Input, Grid, Image, Button, Header, Icon, Modal, SegmentInline} from 'semantic-ui-react';

export default class Footer extends Component {
    render(){
        return(
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
            ); 
    }
}
