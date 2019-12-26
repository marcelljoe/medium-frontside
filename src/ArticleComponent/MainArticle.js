import React, { Component } from "react";
import { Grid, Item, Image, Divider, Icon, Button } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import Avatar from 'react-avatar';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";



export default class MainArticle extends Component {
  render() {


      const clapButton = (
        <path
          d="M28.86 17.34l-3.64-6.4c-.3-.43-.71-.73-1.16-.8a1.12 1.12 0 0 0-.9.21c-.62.5-.73 1.18-.32 2.06l1.22 2.6 1.4 2.45c2.23 4.09 1.51 8-2.15 11.66a9.6 9.6 0 0 1-.8.71 6.53 6.53 0 0 0 4.3-2.1c3.82-3.82 3.57-7.87 2.05-10.39zm-6.25 11.08c3.35-3.35 4-6.78 1.98-10.47L21.2 12c-.3-.43-.71-.72-1.16-.8a1.12 1.12 0 0 0-.9.22c-.62.49-.74 1.18-.32 2.06l1.72 3.63a.5.5 0 0 1-.81.57l-8.91-8.9a1.33 1.33 0 0 0-1.89 1.88l5.3 5.3a.5.5 0 0 1-.71.7l-5.3-5.3-1.49-1.49c-.5-.5-1.38-.5-1.88 0a1.34 1.34 0 0 0 0 1.89l1.49 1.5 5.3 5.28a.5.5 0 0 1-.36.86.5.5 0 0 1-.36-.15l-5.29-5.29a1.34 1.34 0 0 0-1.88 0 1.34 1.34 0 0 0 0 1.89l2.23 2.23L9.3 21.4a.5.5 0 0 1-.36.85.5.5 0 0 1-.35-.14l-3.32-3.33a1.33 1.33 0 0 0-1.89 0 1.32 1.32 0 0 0-.39.95c0 .35.14.69.4.94l6.39 6.4c3.53 3.53 8.86 5.3 12.82 1.35zM12.73 9.26l5.68 5.68-.49-1.04c-.52-1.1-.43-2.13.22-2.89l-3.3-3.3a1.34 1.34 0 0 0-1.88 0 1.33 1.33 0 0 0-.4.94c0 .22.07.42.17.61zm14.79 19.18a7.46 7.46 0 0 1-6.41 2.31 7.92 7.92 0 0 1-3.67.9c-3.05 0-6.12-1.63-8.36-3.88l-6.4-6.4A2.31 2.31 0 0 1 2 19.72a2.33 2.33 0 0 1 1.92-2.3l-.87-.87a2.34 2.34 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.64l-.14-.14a2.34 2.34 0 0 1 0-3.3 2.39 2.39 0 0 1 3.3 0l.14.14a2.33 2.33 0 0 1 3.95-1.24l.09.09c.09-.42.29-.83.62-1.16a2.34 2.34 0 0 1 3.3 0l3.38 3.39a2.17 2.17 0 0 1 1.27-.17c.54.08 1.03.35 1.45.76.1-.55.41-1.03.9-1.42a2.12 2.12 0 0 1 1.67-.4 2.8 2.8 0 0 1 1.85 1.25l3.65 6.43c1.7 2.83 2.03 7.37-2.2 11.6zM13.22.48l-1.92.89 2.37 2.83-.45-3.72zm8.48.88L19.78.5l-.44 3.7 2.36-2.84zM16.5 3.3L15.48 0h2.04L16.5 3.3z"
          fill-rule="evenodd"
        ></path>
      );


    return (
      <div>
        <Grid>
                <Grid.Row centered>
                <Divider/>
                    <Item.Group>
                    <Item>
                    <Item.Image src={this.props.img} style={{width:"1200px", height:"820px"}} />
                    </Item>
                    </Item.Group>
                    <Divider/>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row centered>
                    <Grid.Column centered width={8}>
                    <Item.Group>
                    <Item>
                        <Item.Content>
                        <Item.Header as="h2" style={{fontSize:'38px', fontFamily:'Georgia', textAlign:'justify'}}>
                        {this.props.title} 
                        </Item.Header>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Image avatar src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png" style={{height:'48px', width:'48px'}}/>
                        <Divider hidden/>
                        <Item.Content>
                        <p style={{fontSize:"18px"}}>{this.props.author}  <Button basic color="green" size="mini">Follow</Button></p>
                        <p style={{fontSize:'14px'}}>{this.props.date} &middot; 10 min read</p>
                        </Item.Content>
                        <Item.Content align="right" verticalAlign="top" style={{margin:"auto"}}>
                                    <Icon size="large" name="twitter"/>
                                    <Icon size="large" name="facebook"/>
                                    <Icon size="large" name="bookmark"/>
                                    </Item.Content>
                    </Item>
                    <Item>
                        <Item.Content>
                        <p style={{fontSize:'21px', fontFamily:'Georgia', textAlign:'justify'}}>If you’d liked to be jerked around less, provoked less, and more productive and inwardly focused, where should you start?
To me, the answer is obvious: by turning to wisdom. Below is a list of 21 books that will help lead you to a better, stronger 2018.</p>
                        </Item.Content>
                    </Item>
                    <Item>
                    <Item.Content>
                        <p style={{fontSize:'21px', fontFamily:'Georgia', textAlign:'center'}}>&middot;         &middot;         &middot;</p>
                        </Item.Content>
                    </Item>
                    <Item>
                    <Item.Content>
                        <p style={{fontSize:'21px', fontFamily:'Georgia', textAlign:'justify'}}>{ReactHtmlParser(this.props.content)}</p></Item.Content>
                    </Item>
                    <Item>
                    <Item.Content>
                        <Item.Header as="h2" style={{fontSize:'34px', textAlign:'justify'}}>
                        Like to Read?
                        </Item.Header>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Content>
                        <p style={{fontSize:'21px', fontFamily:'Georgia', textAlign:'justify'}}>I’ve created a list of 15 books you’ve never heard of that will alter your worldview and help you excel at your career.
Get the secret book list here!
This originally appeared on Thought Catalog.</p>
                        </Item.Content>         
                    </Item>
                    <Item>
                        <Item.Content>
                        <p style={{fontSize:'21px', fontFamily:'Georgia', textAlign:'justify'}}>I’ve created a list of 15 books <span>you’ve never heard of</span> that will alter your worldview and help you excel at your career.</p>
                        <br/><br/>
                        <u style={{fontSize:'21px', fontFamily:'Georgia', textAlign:'justify'}}>Get the secret book list here!</u>
                        </Item.Content>
                    </Item>
                    <Item>
                    <Item.Content>
                        <p style={{fontSize:'21px', fontFamily:'Georgia', textAlign:'center'}}>&middot;         &middot;         &middot;</p>
                        </Item.Content>
                    </Item>
                    <Item>
                    <Item.Content>
                        <p style={{fontSize:'21px', fontFamily:'Georgia', textAlign:'justify'}}><i>This originally appeared on <a><u>Thought Catalog.</u></a></i></p>
                        </Item.Content>
                    </Item>      
                    <Item>
                        <Item.Content>
                            <Button.Group size="small" >
                            <Button content="Books"/><Button content="Self Improvement"/><Button content="Producivity"/><Button content="Life"/><Button content="Life Lessons"/>
                            </Button.Group>
                        </Item.Content>
                        </Item>
                        <Item>
                            <Item.Group>
                                <Item>
                                <Item.Content>
                                <Button basic style={{borderRadius:"50%", textAlign:'center'}}><svg width="33" height="33" viewBox="0 0 33 33">{clapButton}</svg></Button>
                                </Item.Content>
                                <Item.Content>
                                    <p style={{fontSize:'16px', padding:'18px'}}>54K claps</p>  
                                </Item.Content>
                                </Item>
                                </Item.Group>
                                <Item.Content align="right" verticalAlign="top" style={{margin:'20px'}}>
                                    <Icon size="large" name="twitter"/>
                                    <Icon size="large" name="facebook"/>
                                    <Icon size="large" name="bookmark"/>
                                    <Icon size="large" name="ellipsis horizontal"/>
                                </Item.Content>
                        </Item>
                        <Divider/>
                        <Item style={{marginBottom:'30px'}}>
                            <Item.Content>
                            <Item.Image size="tiny"><Avatar size="70" round name="Ryan Holiday"/></Item.Image>
                            </Item.Content>
                            <Item.Content>
                                <p>WRITTEN BY</p>
                                <Item.Header p style={{fontSize: '28px', marginBottom:'15px', marginTop:'5px'}} content="Ryan Holiday"/><Button basic floated="right" size="tiny" color="black" style={{marginLeft: '20px'}}>Follow</Button>
                                <p style={{fontSize: '16px'}}>Bestselling author of 'Conspiracy', 'Ego is the Enemy' & 'The Obstacle Is The Way' http://amzn.to/24qKRWR</p>
                            </Item.Content>
                        </Item>
                        <Item style={{marginBottom:'30px'}}>
                            <Item.Content>
                            <Item.Image size="tiny"><Avatar size="70" round src="https://miro.medium.com/fit/c/160/160/1*kFWwYehzjJIhgw8hTygfHw.png"/></Item.Image>
                            </Item.Content>
                            <Item.Content>
                                <Item.Header p style={{fontSize: '28px', marginBottom:'15px', marginTop:'5px'}} content="Mission.org"/><Button basic floated="right" size="tiny" color="black" style={{marginLeft: '20px'}}>Follow</Button>
                                <p style={{fontSize: '16px'}}>A network of business & tech podcasts designed to accelerate learning. Selected as "Best of 2018" by Apple. Mission.org</p>
                            </Item.Content>
                        </Item>
                        <Divider/>
                        <Item >
                            <Button basic fluid color="green"><Link to="/responses">See responses (216)</Link></Button>
                            </Item>     
                </Item.Group> 
                    </Grid.Column>
                    </Grid.Row>
                    </Grid>
      </div>
    );
  }
}
