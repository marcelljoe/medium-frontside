import React, {Component} from 'react';
import Avatar from 'react-avatar';
import {Icon, Item, Grid, Header, Segment, Container} from'semantic-ui-react';
import HomeHeader from './HomeHeader';

export default class CMTCategory extends Component {
    render() {
        return(
        <div>
            <div style={{boxShadow: '0px 5px 5px rgba(0, 0, 0, .1)'}}>
                    <HomeHeader/>
                </div>
            <Container>
            <Grid>
                <div style={{padding: '20px'}}></div>
                <Grid.Row centered>
                    <Grid.Column width={9}>
                    <Container fluid>
                <Header as="h4">
                Showing responses for:
                </Header>
                <Segment padded>
                    <Grid.Row columns={2}>
                    <Grid.Column>
                        Progressive Web Apps with PokeAPI and Deploy using Firebase
                        <br/><span>Amendo</span>
                        </Grid.Column>
                        <Grid.Column>
                        <Icon name="thumbs up" />
                        </Grid.Column>   
                        </Grid.Row>
                </Segment>
                </Container>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
            </Grid>
            </Container>
        </div>
        );
    }
}