import React, {Component} from 'react';
import HomeHeader from "./HomeHeader";
import {Container, Divider, Menu, Item, Header, Grid, Button} from "semantic-ui-react";


export default class Stories extends Component {
    state = { activeItem: 'home'}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const {activeItem} = this.state
        return(
            <div>
                <div style={{ boxShadow: '0px 5px 5px rgba(0, 0, 0, .1)' }}>
                    <HomeHeader />
                </div>
            <Container>
                <Divider hidden/>
                <Grid centered>
                    <Grid.Row columns="equal">
                        <Grid.Column floated="left">
                            <Header as="h1" style={{fontSize:"45px"}}>Your stories</Header>
                        </Grid.Column>
                        <Grid.Column textAlign="right">
                            <Button basic color="black">Import a story</Button>
                            <Button basic color="green">Write a story</Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Menu pointing secondary floated fluid>
                            <Menu.Item name="Draft 1" active={activeItem === 'Draft 1'} onClick={this.handleItemClick}>
                            </Menu.Item>
                            <Menu.Item name="Published" active={activeItem === 'Published'} onClick={this.handleItemClick}>
                            </Menu.Item>
                        </Menu>
                    </Grid.Row>
                    <Grid.Row>
                        <p>You have no drafts.</p>
                    </Grid.Row>
                    <Grid.Row>
                        <p>Write on the go with our iOS and Android apps!</p>
                    </Grid.Row>
                </Grid>
            </Container>
            </div>
        );
    }
}