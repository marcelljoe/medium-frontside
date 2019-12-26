import React, {Component} from 'react';
import {Container, Grid, Item, Header, Button, Divider} from 'semantic-ui-react';
import Avatar from 'react-avatar';
import HomeHeader from './HomeHeader';


export default class Profile extends Component {
    render(){
        return(
            <div>
                <div style={{ boxShadow: '0px 5px 5px rgba(0, 0, 0, .1)' }}>
                    <HomeHeader />
                </div>
                <Container>
                    <Grid>
                        <Divider hidden/>
                        <Grid.Row centered>
                        <Grid.Column width={9}>
                            <Item.Group>
                                <Item>
                                <Item.Content>
                                    <Header as="h2">Marcell Jonathan<Button basic color="black" size="large" style={{padding:'2px', marginLeft:'10px'}}>Edit profile</Button></Header>
                                    <p>1 Following</p>
                                    </Item.Content>
                                    <Avatar round name="Marcell Jonathan"/>
                                    </Item>
                                </Item.Group>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={9}>
                                <Item.Group>
                                    <Item>
                                        <Item.Content>
                                        <p>Marcel Jonathan hasn't been active on Medium yet. Check back later to see their stories, claps, and highlights.</p>    
                                        </Item.Content>
                                        </Item>
                                </Item.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>

                </div>
        );
    }
}