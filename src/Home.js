import _ from 'lodash';
import React,{Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import {Segment, Rail, Ref, Sticky, Item, Divider, Dropdown, Trigger, Container, Menu, Form, Input, Grid, Image, Button, Header, Icon, Modal, SegmentInline} from 'semantic-ui-react';
import {FaBell, FaSearch, FaUserCircle} from 'react-icons/fa';
import './App.css';
import HomeHeader from './HomeHeader';
import Items from './CategoryHome';
import Populars from './CategoryPopular';
import {Link} from 'react-router-dom';
import HomePopular from './HomeComponent/HomePopular';
import HomeRecents from './HomeComponent/HomeRecents';
import axios from 'axios';
import moment from 'moment';
import { getArticles, getLatestArticles} from './Redux/_actions/HomeActions';
import { connect } from 'react-redux';


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
          categories: [],
        };
    }
    
    componentDidMount(){
        axios.get('http://localhost:4000/api/v1/categories')
        .then(res => {
            const arrCtg = res.data;
            console.log(arrCtg);
            this.setState({categories: arrCtg});
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
      this.props.dispatch(getArticles());
      this.props.dispatch(getLatestArticles());



    }
    
    state = {activeItem: 'none'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    contextRef = createRef()
    render(){
        const link='';
        const { activeItem, articles, articlesR } = this.state;
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
        
        const imgHeader = (
            <Image src="https://medium.com/icons/monogram-mask.svg" style={{width: "35px", height: "35px"}} />
        )

        const trigger = (
            <FaUserCircle name="user"  />
        )

              


        return (
          <div>
            <HomeHeader />
            <Container>
              <div
                style={{
                  position: "sticky",
                  top: "0",
                  backgroundColor: "white",
                  zIndex: "1"
                }}
              >
                <Menu secondary floated style={{ overflowX: "hidden", backgroundColor: "white" }}>
                  <Link to={`/`}>
                    <Menu.Item
                      stretched
                      name="HOME"
                      onClick={this.handleItemClick}
                    ></Menu.Item>
                  </Link>
                  {this.state.categories.map((MenuItem, i) => (
                    <Link to={`/category/${MenuItem.id}/articles`}>
                      <Menu.Item
                        stretched
                        key={i}
                        name={MenuItem.name}
                        active={activeItem === MenuItem.name}
                        onClick={this.handleItemClick}
                      />
                    </Link>
                  ))}
                </Menu>
              </div>
              <Grid padded="vertically" divided="vertically">
                <Grid.Row columns={3}>
                  <Grid.Column>
                    {this.props.articlesR.slice(0, 1).map((rdItem, i) => {
                      const checkDate = new Date(rdItem.createdAt);
                      const date = moment(checkDate).format("DD MMMM YYYY");
                      return (
                        <div>
                          <Image
                            src={rdItem.img}
                            height="150px"
                            width="340px"
                          />
                          <Divider hidden />
                          <Link
                            to={`/article/${rdItem.id}`}
                          >
                            <Header as="h2">{rdItem.title}</Header>
                          </Link>
                          <p>
                            To me, the answer is obvious: by turning to wisdom.
                          </p>
                          <br />
                          {rdItem.user.fullname} in {rdItem.category.name}
                          <p>{date} &middot; 7 min read ⋆</p>
                        </div>
                      );
                    })}
                  </Grid.Column>
                  <Grid.Column>
                    <Item.Group>
                      <Item stretched="vertically">
                        <Item.Image
                          src="https://cdn-images-1.medium.com/focal/100/100/49/23/1*AGk6h5cP38POcq5tRHSvsA.jpeg"
                          style={{ height: "100px", width: "100px" }}
                        />
                        <Item.Content>
                          <Header as="h4">
                            Addiction Isn't a Sin, It's an Adaptation
                          </Header>
                          <Item.Content verticalAlign="bottom">
                            <p>
                              Anna Austin Ronan in Human Parts
                              <br />
                              Nov 14, 5 min read ⋆
                            </p>
                          </Item.Content>
                        </Item.Content>
                      </Item>
                      <Item stretched="vertically">
                        <Item.Image
                          src="https://cdn-images-1.medium.com/focal/100/100/55/56/1*3E0ohnwHzQtIdub4ZKriwQ.png"
                          style={{ height: "100px", width: "100px" }}
                        />
                        <Item.Content>
                          <Header as="h4">
                            I'm Dead Broke but Also Dead Set on Buying a Pair of
                            Safety Yellow...
                          </Header>
                          <Item.Content verticalAlign="bottom">
                            <p>
                              Maylin Tu in Human Parts
                              <br />
                              Nov 22, 4 min read ⋆
                            </p>
                          </Item.Content>
                        </Item.Content>
                      </Item>
                      <Item stretched="vertically">
                        <Item.Image
                          src="https://cdn-images-1.medium.com/focal/100/100/52/54/1*yYP8rlvTuCML1_N9AlQOTg.jpeg"
                          style={{ height: "100px", width: "100px" }}
                        />
                        <Item.Content>
                          <Header as="h4">
                            How to Totally Escape Ad Tracking at Home
                          </Header>
                          <Item.Content verticalAlign="bottom">
                            <p>
                              Owen Williams in OneZero
                              <br />
                              Dec 10, 5 min read ⋆
                            </p>
                          </Item.Content>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Grid.Column>
                  <Grid.Column>
                    <Image
                      src="https://cdn-images-1.medium.com/focal/504/222/49/52/1*PWGpuXNpkASi6_Sbio7WaQ.jpeg"
                      height="150px"
                    />
                    <Header as="h2">
                      How the PlayStation Took Over the World
                    </Header>
                    <p>Will the strategies that have powered S...</p>
                    <br />
                    Eric Ravenscraft in OneZero
                    <p>Dec 10, 7 min read ⋆</p>
                    <div style={{ display: "inlineBlock", textAlign: "right" }}>
                      <a href="###">SEE ALL FEATURED ></a>
                    </div>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                  <Grid.Column width={6}>
                    <Ref innerRef={this.contextRef}>
                      <Rail>
                        <Sticky context={this.contextRef}>
                          <br />
                          <Header as="h3">Latest Articles on Medium</Header>
                          {this.props.articlesL.map((item, index) => (
                            <Link
                              to={`category/${item.category.id}/article/${item.id}`}
                            >
                              <HomePopular
                                index={index}
                                title={item.title}
                                subTitle={item.content}
                                fullname={item.user.fullname}
                                createdAt={item.createdAt}
                                categoryName={item.category.name}
                              />
                            </Link>
                          ))}
                        </Sticky>
                      </Rail>
                    </Ref>
                  </Grid.Column>

                  <Grid.Column width={10}>
                    {this.props.articlesR.map((item, index) => (
                      <HomeRecents
                        index={index}
                        title={item.title}
                        subTitle={item.content}
                        fullname={item.user.fullname}
                        createdAt={item.createdAt}
                        categoryName={item.category.name}
                        img={item.img}
                      />
                    ))}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
        );
    }
}

const mapStatetoProps = state => ({
  articlesL: state.HomeReducers.articlesL,
  articlesR: state.HomeReducers.articlesR
})

export default connect(mapStatetoProps)(Home);