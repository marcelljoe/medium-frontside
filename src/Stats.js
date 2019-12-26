import React, {Component} from 'react';
import HomeHeader from './HomeHeader';
import {Segment, Container, Divider, Header, Button, Item, Icon} from 'semantic-ui-react';


export default class Stats extends Component {
    render(){
        return(
            <div>
                <div style={{ boxShadow: '0px 5px 5px rgba(0, 0, 0, .1)' }}>
                    <HomeHeader />
                </div>
                <Divider hidden/>
                <Container>
                    <Header as="h1">Bookmarks</Header>
                    <Segment floated>
                        <Item.Group>
                            <Item>
                                <div><Icon name="bookmark" size="large" style={{paddingTop:"7px", veticalAlign: "center" }}/></div><p style={{fontSize:'25px', margin:'0'}}>  |  Offline reading is here</p> 
                                <Item.Content> 
                                <Button floated="right" color="black" content="Upgrade"/>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                </Container>
            </div>
        );
    }
}