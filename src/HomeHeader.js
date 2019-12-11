import React, {Component, createRef} from 'react';
import {FaBell, FaSearch, FaUserCircle} from 'react-icons/fa';
import {Segment, Rail, Ref, Sticky, Item, Divider, Dropdown, Trigger, Container, Menu, Form, Input, Grid, Image, Button, Header, Icon, Modal, SegmentInline} from 'semantic-ui-react';

export default class HomeHeader extends Component {
    state = {activateItem: 'none'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render(){
        const options = [
            {
            key: 'user',
            text: (
            
        <span >
            <FaUserCircle /> <strong>Jon Snow</strong>
        </span>
        ),
        disabled: true,
        },
        { key: 'newstory', text: 'New story' },
        { key: 'stories', text: 'Stories' },
        { key: 'stats', text: 'Stats' }, 
        { key: 'bookmarks', text: 'Bookmarks' },
        { key: 'profile', text: 'Profile' },
        { key: 'settings', text: 'Settings' },
        { key: 'help', text: 'Help' },
        { key: 'signout', text: 'Sign Out' },
        ]

        const DropdownTriggerExample = () => (
            <Dropdown trigger={trigger} options={options} />
        )

        const trigger = (
            <FaUserCircle name="user"  />
        )

        

        return(
            <Container>
            <Menu secondary>
                <Menu.Item>
                <Header as='h1'>Medium</Header>
                {/* <Image src="https://medium.com/icons/monogram-mask.svg" style={{width: "35px", height: "35px"}} /> */}
                </Menu.Item>    
                <Menu.Menu position='right'>
                <Menu.Item>
                <FaSearch name="search" onClick={this.handleItemClick} />
                </Menu.Item>
                <Menu.Item>
                <FaBell name="bell" onClick={this.handleItemClick} />
                </Menu.Item>
                <Menu.Item>
                    <Dropdown trigger={trigger} options={options}/>
                </Menu.Item>
                </Menu.Menu>  
            </Menu>
            </Container>
            ); 
    }
}
