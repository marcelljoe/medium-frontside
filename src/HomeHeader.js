import _ from 'lodash';
import React, {Component, createRef} from 'react';
import {Segment, Rail, Ref, Sticky, Item, Divider, Dropdown, Trigger, Container, Menu, Form, Input, Grid, Image, Button, Header, Icon, Modal, SegmentInline} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Avatar from 'react-avatar';
import Registration from './Registration';
import Login from './Login';


export default class HomeHeader extends Component {
    state = {activateItem: 'none'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})



    onClickLogout = (e) => {
      localStorage.clear();
      window.location.reload();
    }


    render(){
  

        const trigger = (
            <Avatar name={localStorage.fullname} size="40px" round="20px"  />
        )


        

        return (
          <Container>
            <Menu secondary>
              <Menu.Item>
                <Link to="/">
                  <Header as="h1" style={{ marginLeft: "0px" }}>
                    Medium
                  </Header>
                </Link>
                {/* <Image src="https://medium.com/icons/monogram-mask.svg" style={{width: "35px", height: "35px"}} /> */}
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item>
                  <Icon name="search" />
                </Menu.Item>

                {localStorage.isLoggedIn == 1 ? (
                  <Menu.Menu position="right">
                    <Menu.Item>
                      <Icon name="bell" />
                    </Menu.Item>

                    <Menu.Item>
                      <Dropdown trigger={trigger}>
                        <Dropdown.Menu>
                          <Item>
                            <Avatar
                              name={localStorage.fullname}
                              size={40}
                              round="20px"
                              align="left"
                              style={{ marginRight: "10px" }}
                            />
                            <Item.Content>
                              <strong>{localStorage.fullname}</strong>
                              <p>{localStorage.email}</p>
                            </Item.Content>
                          </Item>
                          <Dropdown.Item
                            text="Become a member"
                            style={{ color: "#4CAF50" }}
                          />
                          <Dropdown.Divider />
                          <Dropdown.Item text="New Story" />
                          <Dropdown.Item text="Stories" />
                          <Dropdown.Item text="Stats" />
                          <Dropdown.Divider />
                          <Dropdown.Item text="Bookmarks" />
                          <Dropdown.Item text="Profile" />
                          <Dropdown.Item text="Settings" />
                          <Dropdown.Item text="Help" />
                          <Dropdown.Item
                            text="Sign Out"
                            onClick={this.onClickLogout}
                          />
                        </Dropdown.Menu>
                      </Dropdown>
                    </Menu.Item>
                  </Menu.Menu>
                ) : (
                  <Menu.Item>
                    <Registration />

                    <Login />
                  </Menu.Item>
                )}
              </Menu.Menu>
            </Menu>
          </Container>
        ); 
    }
}
