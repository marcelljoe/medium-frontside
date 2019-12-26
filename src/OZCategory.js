import React, { Component } from "react";
import {
  Header,
  Divider,
  Image,
  Button,
  Grid,
  Container,
  Item
} from "semantic-ui-react";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";
import axios from "axios";
import FootContent from "./CategoryComponent/FootContent";
import { getArticlesByCategory } from './Redux/_actions/ArticleActions';
import { connect } from 'react-redux';


class OZCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artByCat: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // axios.get(`http://localhost:4000/api/v1/category/${id}/articles`).then(res => {
    //   const arrArts = res.data;
    //   this.setState({ artByCat: arrArts });
    //   console.log(arrArts);
    // });
    this.props.dispatch(getArticlesByCategory(id));

  }

  render() {
    const { artByCat } = this.state;
    return (
      <div>
        <div style={{ boxShadow: "0px 5px 5px rgba(0, 0, 0, .1)" }}>
          <HomeHeader />
        </div>
        <Container>
          <Grid padded="vertically">
            <Grid.Row
              columns={2}
              style={{ paddingTop: "85px", paddingBottom: "70px" }}
            >
              <Grid.Column width={11} floated="left">
                <Item.Group>
                  {this.props.articlesbc.slice(0, 1).map((Data, i) => (
                    <Item>
                      <Header as="h1" content={Data.category.name} />
                      <Item.Content verticalAlign="bottom">
                        <h3>
                          The front lines of the future. A Medium publication
                          about tech and science.
                        </h3>
                      </Item.Content>
                    </Item>
                  ))}
                </Item.Group>
              </Grid.Column>
              <Grid.Column width={5} floated="right" verticalAlign="bottom">
                <Button basic color="purple" content="Follow" floated="right" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} style={{ width: "300px" }}>
              <Grid.Column width={10} style={{ padding: 0 }}>
                <div style={{ height: "350px" }}>
                  <Image
                    style={{ height: "350px" }}
                    src="https://miro.medium.com/max/1512/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg"
                    fluid
                    floated
                  />
                </div>
              </Grid.Column>
              <Grid.Column
                align="center"
                width={6}
                style={{
                  backgroundColor: "#6A0BFF",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <div
                  style={{
                    color: "white",
                    align: "center",
                    display: "inlineBlock"
                  }}
                >
                  <h2>
                    Uber Delivery Workers Track Thieves Through a Secret Network
                  </h2>
                  <h3>
                    A 1,000-person WhatsApp community keeps delivery workers
                    safe
                  </h3>
                  <h3>
                    Martha Pskowski
                    <br />
                    Dec 11 . 9 min read
                  </h3>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row
              columns={2}
              veticalAlign="middle"
              style={{ width: "300px" }}
            >
              <Grid.Column
                align="center"
                width={6}
                style={{
                  backgroundColor: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <div
                  style={{
                    color: "black",
                    align: "center",
                    display: "inlineBlock"
                  }}
                >
                  <h2>The Influencer and the Hit Man</h2>
                  <h3>
                    How a years-long domain name feud ended in a bloody shootout
                  </h3>
                  <h3>
                    Ian Frisch
                    <br />
                    Dec 10 . 24 min read
                  </h3>
                </div>
              </Grid.Column>
              <Grid.Column width={10} style={{ padding: 0 }}>
                <div style={{ height: "350px" }}>
                  <Image
                    style={{ height: "350px" }}
                    src="https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"
                    fluid
                    floated
                  />
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row
              columns={1}
              veticalAlign="middle"
              style={{ width: "300px" }}
            >
              <Grid.Column
                textAlign="left"
                width={16}
                style={{
                  backgroundColor: "#daf832",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "45px",
                  paddingLeft: "155px"
                }}
              >
                <div
                  style={{
                    color: "black",
                    align: "center",
                    display: "inlineBlock"
                  }}
                >
                  <h2>
                    "There's no need for Twitter to serve as a tool of political
                    omnipresence."
                  </h2>
                  <h3>--Robert Howell</h3>
                  <h3>
                    The Case for Removing All Politicians From Twitter
                    <br />
                    Dec 11 . 5 min read
                  </h3>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} style={{ width: "300px" }}>
              <Grid.Column width={10} style={{ padding: 0 }}>
                <div style={{ height: "350px" }}>
                  <Image
                    style={{ height: "350px" }}
                    src="https://miro.medium.com/max/4000/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg"
                    fluid
                    floated
                  />
                </div>
              </Grid.Column>
              <Grid.Column
                align="center"
                width={6}
                style={{
                  backgroundColor: "#6A0BFF",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <div
                  style={{
                    color: "white",
                    align: "center",
                    display: "inlineBlock"
                  }}
                >
                  <h2>
                    A New Smart Contact Lens Charges Without Burning Your Eyes
                  </h2>
                  <h3>
                    The technology uses supercapacitors and will help speed the
                    creation of contact lenses that monitor the body
                  </h3>
                  <h3>
                    Yasmin Tayag
                    <br />
                    Dec 11 . 3 min read
                  </h3>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column align="center" style={{ width: "680px" }}>
                <Divider backgroundColor="black" />
                <div align="center">
                  <Image
                    src="https://miro.medium.com/max/1512/1*udff9dYRAu0vc2yL7-AuQg.jpeg"
                    style={{
                      width: "680px",
                      overflow: "hidden",
                      height: "453px"
                    }}
                  />
                </div>
                <Header as="h1">Keep Your Home Screen Organized</Header>
                <p style={{ fontFamily: "Times new Roman", fontSize: "21px" }}>
                  Designer Hideaki Nakatani makes a variety of unconventional
                  wallpapers that expand the capabilities of iOS. (Sorry,
                  Android users.) The “Expand Bezel” options give you appealing
                  app shelves to organize your home screen with; the “Hide Dock”
                  wallpapers, well, hide the default shading behind your app
                  dock, allowing colors and gradients to spill all the way to
                  the bottom of your screen. Visit Nakatani’s{" "}
                  <u>“Mysterious iPhone Wallpaper” website</u> to explore the
                  options for yourself. And come back to OneZero for more tips
                  like this every day.
                </p>
              </Grid.Column>
              <Grid.Column align="center" style={{ width: "680px" }}>
                <div>
                  <Divider />
                  {this.props.articlesbc.map((data, index) => (
                    <FootContent
                      index={index}
                      title={data.title}
                      content={data.content}
                      fullname={data.user.fullname}
                      createdAt={data.createdAt}
                      img={data.img}
                    />
                  ))}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  articlesbc: state.ArticleReducers.articlesByCat
})

export default connect(mapStatetoProps)(OZCategory);
