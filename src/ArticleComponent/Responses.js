import React, { Component } from "react";
import HomeHeader from "../HomeHeader";
import { Container, Grid, Item, Segment, Header, Divider, Icon, Button, Input } from "semantic-ui-react";
import Avatar from 'react-avatar';
import axios from 'axios';
import moment from 'moment';



export default class Responses extends Component {

   constructor(props){
        super(props)
        this.state = {
          comments: [],
        };
    }
    
    componentDidMount(){
      const {id} = this.props.match.params;
        axios.get(`http://localhost:4000/api/v1/article/${id}/comments`)
        .then(res => {
            const arrCmt = res.data;
            console.log(arrCmt);
            this.setState({comments: arrCmt});
        });

        // axios.get("http://localhost:4000/api/v1/latestarticles")
        // .then(res => {
        //   const arrArtl = res.data;
        //   console.log(arrArtl);
        //   this.setState({ articles: arrArtl });
        // });

        // axios.get("http://localhost:4000/api/v1/articles")
        // .then(res => {
        //   const arrArt = res.data;
        //   console.log(arrArt);
        //   this.setState({ articlesR: arrArt });
        // });
      // this.props.dispatch(getArticles());
      // this.props.dispatch(getLatestArticles());



    }


  render() {
    const clapButton = (
      <path d="M28.86 17.34l-3.64-6.4c-.3-.43-.71-.73-1.16-.8a1.12 1.12 0 0 0-.9.21c-.62.5-.73 1.18-.32 2.06l1.22 2.6 1.4 2.45c2.23 4.09 1.51 8-2.15 11.66a9.6 9.6 0 0 1-.8.71 6.53 6.53 0 0 0 4.3-2.1c3.82-3.82 3.57-7.87 2.05-10.39zm-6.25 11.08c3.35-3.35 4-6.78 1.98-10.47L21.2 12c-.3-.43-.71-.72-1.16-.8a1.12 1.12 0 0 0-.9.22c-.62.49-.74 1.18-.32 2.06l1.72 3.63a.5.5 0 0 1-.81.57l-8.91-8.9a1.33 1.33 0 0 0-1.89 1.88l5.3 5.3a.5.5 0 0 1-.71.7l-5.3-5.3-1.49-1.49c-.5-.5-1.38-.5-1.88 0a1.34 1.34 0 0 0 0 1.89l1.49 1.5 5.3 5.28a.5.5 0 0 1-.36.86.5.5 0 0 1-.36-.15l-5.29-5.29a1.34 1.34 0 0 0-1.88 0 1.34 1.34 0 0 0 0 1.89l2.23 2.23L9.3 21.4a.5.5 0 0 1-.36.85.5.5 0 0 1-.35-.14l-3.32-3.33a1.33 1.33 0 0 0-1.89 0 1.32 1.32 0 0 0-.39.95c0 .35.14.69.4.94l6.39 6.4c3.53 3.53 8.86 5.3 12.82 1.35zM12.73 9.26l5.68 5.68-.49-1.04c-.52-1.1-.43-2.13.22-2.89l-3.3-3.3a1.34 1.34 0 0 0-1.88 0 1.33 1.33 0 0 0-.4.94c0 .22.07.42.17.61zm14.79 19.18a7.46 7.46 0 0 1-6.41 2.31 7.92 7.92 0 0 1-3.67.9c-3.05 0-6.12-1.63-8.36-3.88l-6.4-6.4A2.31 2.31 0 0 1 2 19.72a2.33 2.33 0 0 1 1.92-2.3l-.87-.87a2.34 2.34 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.64l-.14-.14a2.34 2.34 0 0 1 0-3.3 2.39 2.39 0 0 1 3.3 0l.14.14a2.33 2.33 0 0 1 3.95-1.24l.09.09c.09-.42.29-.83.62-1.16a2.34 2.34 0 0 1 3.3 0l3.38 3.39a2.17 2.17 0 0 1 1.27-.17c.54.08 1.03.35 1.45.76.1-.55.41-1.03.9-1.42a2.12 2.12 0 0 1 1.67-.4 2.8 2.8 0 0 1 1.85 1.25l3.65 6.43c1.7 2.83 2.03 7.37-2.2 11.6zM13.22.48l-1.92.89 2.37 2.83-.45-3.72zm8.48.88L19.78.5l-.44 3.7 2.36-2.84zM16.5 3.3L15.48 0h2.04L16.5 3.3z" fill-rule="evenodd"></path>
    )


    const { comments } = this.state;


    return (
      <div>
        <div style={{ boxShadow: "0px 5px 5px rgba(0, 0, 0, .1)" }}>
          <HomeHeader />
        </div>
        <Container name="title" style={{ paddingBottom: "50px" }}>
          <Grid centered>
            <Grid.Column width="10">
              <Divider hidden />
              <Header as="h4">Showing responses for:</Header>
              <Grid.Row>
                <Segment>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        If You Only Read A Few Books In 2018, Read These
                        <br />
                        <span>Ryan Holiday</span>
                      </Item.Content>
                      <Item.Content style={{ textAlign: "right" }}>
                        <svg width="20" height="20" viewBox="-5 -5 38 38">
                          {clapButton}
                        </svg>{" "}
                        54K |
                        <Icon name="chat" style={{ padding: "0" }} /> 5
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Container>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          <Container name="responses" style={{ paddingTop: "0px" }}>
            <Grid centered>
              <Grid.Column width="10">
                <Header as="h4">Responses</Header>
                <Grid.Row>
                  <Segment>
                    <Item.Group>
                      <Item>
                        <Avatar
                          name="Marcell Joe"
                          size={40}
                          round="20px"
                          align="left"
                          style={{ marginRight: "10px" }}
                        />
                        <Item.Content>
                          <Input fluid placeholder="Write a response..." />
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Segment>
                  <div style={{ paddingBottom: "5px" }}></div>
                </Grid.Row>

                {comments.map((dataC, i) => {
                  const checkDate = new Date(dataC.createdAt)
                  const date = moment(checkDate).format("DD MMMM YYYY")
                  return (
                  <Grid.Row>
                    <Segment>
                      <Item.Group>
                        <Item>
                          <Avatar
                            name={dataC.user.fullname}
                            size={40}
                            round="20px"
                            align="left"
                            style={{ marginRight: "10px" }}
                          />
                          <Item.Content>
                            <p> {dataC.user.fullname}</p>
                            <span>{date}</span>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                      <p>
                        {dataC.comment}
                      </p>
                      <Grid.Column>
                        <svg width="20" height="20" viewBox="-5 -5 38 38">
                          {clapButton}
                        </svg>
                        54K
                        <br />
                        20 responses
                        <Icon name="bookmark outline" />
                        <Icon name="angle down" />
                      </Grid.Column>
                    </Segment>
                    <div style={{ paddingBottom: "5px" }}></div>
                  </Grid.Row>
                )})}
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}
