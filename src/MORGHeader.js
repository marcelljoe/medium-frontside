import _ from 'lodash';
import faker from 'faker';
import React, {Component, createRef} from 'react';
import {FaBell, FaSearch, FaUserCircle} from 'react-icons/fa';
import {Segment, Rail, Ref, Sticky, Item, Divider, Dropdown, Trigger, Container, Menu, Form, Input, Grid, Image, Button, Header, Icon, Modal, SegmentInline} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Avatar from 'react-avatar';


export default class MORGHeader extends Component {
    state = {activateItem: 'none'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render(){
        const options = [
            {
            key: 'user',
            text: (
        <Item>    
            <Avatar name="Marcell Joe" size={40} round="20px" />
            <Item.Content>
            <strong>Marcell Jonathan</strong>
            <p>@arcljnthn</p>
            </Item.Content>
        </Item> 
        ),
        disabled: false,
        },
        <Dropdown.Divider/>,
        { key: 'newstory', text: 'New story' },
        { key: 'stories', text: 'Stories' },
        { key: 'stats', text: 'Stats' },
        <Dropdown.Divider/>,
        { key: 'bookmarks', text: 'Bookmarks' },
        { key: 'profile', text: 'Profile' },
        { key: 'settings', text: 'Settings' },
        { key: 'help', text: 'Help' },
        { key: 'signout', text: 'Sign Out' },
        ]

        const DropdownTriggerExample = () => (
            <Dropdown fluid trigger={trigger} options={options} />
        )

        const trigger = (
            <Avatar name="Marcell Joe" size="40px" round="20px"  />
        )

        

        return(
            <div style={{boxShadow: '0px 5px 5px rgba(0, 0, 0, .1)'}}>
            <Container>
            <Menu secondary>
                <Menu.Item>
                <Image src="https://miro.medium.com/max/432/1*IPEsgX_bZKP_7OubdnI7-Q.png" width="216px" height="36px" />
                {/* <Image src="https://medium.com/icons/monogram-mask.svg" style={{width: "35px", height: "35px"}} /> */}
                </Menu.Item>
                <Menu.Item>
                    MISSION ORIGINALS
                </Menu.Item> 
                <Menu.Item fitted>
                    |
                </Menu.Item>
                <Menu.Item>
                    SUBSCRIBE
                </Menu.Item>
                <Menu.Menu position='right'>
                </Menu.Menu>  
            </Menu>
            </Container>
            </div>
            ); 
    }
}
