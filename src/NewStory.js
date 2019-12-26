import React, {Component} from 'react';
import NSHeader from './NSHeader';
import {Container, Grid, Icon, Item, Input, Button, Form, Divider, TextArea} from "semantic-ui-react";

export default class NewStory extends Component {
    render(){
        return(
            <div>
                <NSHeader/>
                <Container>
                    <Divider hidden/>
                    <Grid centered>
                            <Grid.Column width="9">
                            <Grid.Row>
                                <Item.Group>
                                    <Item>
                                        <div style={{ verticalAlign: "middle" }}>
                                            <Button basic size="mini" circular style={{ verticalAlign: "middle", paddingRight: "0px" }}><Icon name="plus circle" size="big" /></Button>
                                        </div>
                                    <Item.Content verticalAlign="middle">
                                    <Input fluid placeholder="Title" size="massive"/>
                                </Item.Content>
                                </Item>
                                </Item.Group>
                            </Grid.Row>
                            <Divider hidden/>
                            <Grid.Row>
                                <Item.Group>
                                    <Item>
                                        <div style={{ verticalAlign: "middle" }}>
                                            <Button basic size="mini" circular style={{ verticalAlign: "middle", paddingRight:"0px" }}><Icon name="plus circle" size="big" /></Button>
                                        </div>
                                        <Item.Content verticalAlign="middle">
                                            <Form><TextArea fluid placeholder="Title" /></Form>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            </Grid.Row>
                            </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}