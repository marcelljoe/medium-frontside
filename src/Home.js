import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Menu, Form, Input, Grid, Image, Button, Header, Icon, Modal} from 'semantic-ui-react';
import {FaBell, FaSearch, FaUserCircle} from 'react-icons/fa';
import './App.css';
import Items from './CategoryHome';

export default class Home extends Component {
    state = {activateItem: 'none'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render(){
        const {activeItem} = this.state
        return (
            <div>
            <Container>
            <Menu secondary>
                <Menu.Item>
                <Header as='h1'>Medium</Header>
                </Menu.Item>    
                <Menu.Menu position='right'>
                <Menu.Item>
                <FaSearch />
                </Menu.Item>
                <Menu.Item>
                <FaBell />
                </Menu.Item>
                <Menu.Item>
                <FaUserCircle />
                </Menu.Item>
                </Menu.Menu>  
            </Menu>
                <nav>
                    <Menu secondary style={{overflowX: "scroll"}}>
                        {Items.map((MenuItem =>(
                            <Menu.Item name={MenuItem.name} active={activeItem===(MenuItem.name)} onClick={this.handleItemClick}/>
                        )))}
                    </Menu>
                </nav>
            </Container>
            {/* <Grid divided>
                <Grid.Row centered>
                    <Grid.Column>
                        <p>TestGrid</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p>TestAnotherGrid</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p>TestAnotherGrid</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column>
                        <p>TestSecondGrid</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p>TestAnotherSecondGrid</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid> */}
            </div>
        );
    }
}