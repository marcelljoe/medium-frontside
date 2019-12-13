import React, {Component} from 'react';
import MORGHeader from './MORGHeader';
import HomeHeader from './HomeHeader';
import {Icon, Divider, Grid, Item, Image, Button, Container, Header, Menu} from 'semantic-ui-react';
import Avatar from 'react-avatar';
import { FaRegIdBadge } from 'react-icons/fa';
import Footer from './Footer';


export default class Article extends Component {
    render(){
        const clapButton = (
            <path d="M28.86 17.34l-3.64-6.4c-.3-.43-.71-.73-1.16-.8a1.12 1.12 0 0 0-.9.21c-.62.5-.73 1.18-.32 2.06l1.22 2.6 1.4 2.45c2.23 4.09 1.51 8-2.15 11.66a9.6 9.6 0 0 1-.8.71 6.53 6.53 0 0 0 4.3-2.1c3.82-3.82 3.57-7.87 2.05-10.39zm-6.25 11.08c3.35-3.35 4-6.78 1.98-10.47L21.2 12c-.3-.43-.71-.72-1.16-.8a1.12 1.12 0 0 0-.9.22c-.62.49-.74 1.18-.32 2.06l1.72 3.63a.5.5 0 0 1-.81.57l-8.91-8.9a1.33 1.33 0 0 0-1.89 1.88l5.3 5.3a.5.5 0 0 1-.71.7l-5.3-5.3-1.49-1.49c-.5-.5-1.38-.5-1.88 0a1.34 1.34 0 0 0 0 1.89l1.49 1.5 5.3 5.28a.5.5 0 0 1-.36.86.5.5 0 0 1-.36-.15l-5.29-5.29a1.34 1.34 0 0 0-1.88 0 1.34 1.34 0 0 0 0 1.89l2.23 2.23L9.3 21.4a.5.5 0 0 1-.36.85.5.5 0 0 1-.35-.14l-3.32-3.33a1.33 1.33 0 0 0-1.89 0 1.32 1.32 0 0 0-.39.95c0 .35.14.69.4.94l6.39 6.4c3.53 3.53 8.86 5.3 12.82 1.35zM12.73 9.26l5.68 5.68-.49-1.04c-.52-1.1-.43-2.13.22-2.89l-3.3-3.3a1.34 1.34 0 0 0-1.88 0 1.33 1.33 0 0 0-.4.94c0 .22.07.42.17.61zm14.79 19.18a7.46 7.46 0 0 1-6.41 2.31 7.92 7.92 0 0 1-3.67.9c-3.05 0-6.12-1.63-8.36-3.88l-6.4-6.4A2.31 2.31 0 0 1 2 19.72a2.33 2.33 0 0 1 1.92-2.3l-.87-.87a2.34 2.34 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.64l-.14-.14a2.34 2.34 0 0 1 0-3.3 2.39 2.39 0 0 1 3.3 0l.14.14a2.33 2.33 0 0 1 3.95-1.24l.09.09c.09-.42.29-.83.62-1.16a2.34 2.34 0 0 1 3.3 0l3.38 3.39a2.17 2.17 0 0 1 1.27-.17c.54.08 1.03.35 1.45.76.1-.55.41-1.03.9-1.42a2.12 2.12 0 0 1 1.67-.4 2.8 2.8 0 0 1 1.85 1.25l3.65 6.43c1.7 2.83 2.03 7.37-2.2 11.6zM13.22.48l-1.92.89 2.37 2.83-.45-3.72zm8.48.88L19.78.5l-.44 3.7 2.36-2.84zM16.5 3.3L15.48 0h2.04L16.5 3.3z" fill-rule="evenodd"></path>
        )
        return(
            <div>
                <HomeHeader/>
                <Divider fitted />
                <MORGHeader/>
                <Grid>
                <Grid.Row centered>
                <Divider/>
                    <Item.Group>
                    <Item>
                    <Item.Image src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg" style={{width:"1200px", height:"820px"}} />
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
                        If You Only Read A Few Books In 2018, Read These 
                        </Item.Header>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Image avatar src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png" style={{height:'48px', width:'48px'}}/>
                        <Item.Content>
                        <p style={{fontSize:"18px"}}>Ryan Holiday  <Button basic color="green" size="mini">Follow</Button></p>
                        <p style={{fontSize:'14px'}}>Jun 26, 2018 &middot; 10 min read</p>
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
                        <p style={{fontSize:'21px', fontFamily:'Georgia', textAlign:'justify'}}>Deep Work: Rules for Focused Success in a Distracted World by Cal Newport Media consumption went way up in 2017. For most of us, that meant happiness and productivity went way down. The world is becoming noisier and will become more so every day. If you can’t cultivate the ability to have quiet, insightful, deeply focused periods of productive work, you’re going to get screwed. This is a book that explains how to cultivate and protect that skill — the ability to do deep work. I strongly urge you to begin this practice in 2018— if you want to get anything done or perform your best.<br/><br/>
The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life by Mark Manson To me, practical philosophy has always been the art knowing what to — and what not to — give a fuck about. That’s what Mark’s book is about. It’s not about apathy. It’s about cultivating indifference to things that don’t matter. Be careful, as Marcus Aurelius warns, not to give the little things more time and thought they deserved. Maybe looking back at this year reveals how much effort you’ve frittered away worrying about the trivial. If so, let 2018 be a year that you only devote energy to things that truly matter — get the important things right by ignoring the insignificant.<br/><br/>
The Way to Love: The Last Meditations of Anthony de Mello by Anthony de Mello Coach Shaka Smart recommended this little book (and it’s a little book, probably the smallest I’ve ever read. It fits in your palm). But it’s an incredibly wise and helpful read. Written by a Catholic Priest who’d lived in India, the book has this unusual convergence of eastern and western thought. One of my favorite lines: “The question to ask is not ‘What’s wrong with this person?’ but ‘What does this irritation tell me about myself?’ I plan on regularly revisiting it throughout 2018.<br/><br/>
But What If We’re Wrong by Chuck Klosterman It’s always good to remind ourselves that almost everything we’re certain about will probably be eventually proven wrong. Klosterman’s subtitle — Thinking About the Present As If It Were the Past — is a brilliant exercise for getting some perspective in 2018. Whether you think it’s going to be a year of radical change for the better or a horrible year of excesses of dangerous precedent, you’re probably wrong. You’re probably not even in the ballpark. This book shows you why, not with lectures about politics, but with a bunch of awesome thought experiments about music, books, movies and science.<br/><br/>
Rules for Radicals: A Practical Primer for Realistic Radicals by Saul Alinsky If Hillary Clinton had remembered the lessons of Saul Alinsky (who she wrote her college thesis on), the election may have turned out differently. Why? A notorious strategist and community organizer, Alinsky was a die hard pragmatist, but he also knew how to tell a story and create a collective cause. He could work within the system but knew how to shake it up and generate attention. This book is a classic and woefully underrated. Whatever you set out to do in 2018, this book can provide you with strategic guidance and insight.<br/><br/>
The Filter Bubble by Eli Pariser / Trust Me I’m Lying by Ryan Holiday / The Brass Check by Upton Sinclair I strongly recommend that you take the time in 2018 to read these books. In light of this year, you owe it to yourself to study and better understand how our media system works. In The Filter Bubble, Eli Pariser warns of the danger of living in bubbles of personalization that reinforce and insulate our worldview. Though Sinclair’s The Brass Check has been almost entirely forgotten by history, it’s not only fascinating but a timeless perspective. Sinclair deeply understood the economic incentives of early 20th century journalism and thus could predict and analyze the manipulative effect it had on The Truth. I used that book as a model for my expose of the media system, Trust Me, I’m Lying. Today, the incentives and pressures are different but they warp our information in a similar way. In almost every substantial charge Upton leveled against the yellow press, you could, today, sub in blogs and the cable news cycle and be even more correct.<br/><br/>
48 Laws of Power / 33 Strategies of War by Robert Greene Robert Greene is a master of human psychology and human dynamics — he has a profound ability to explain timeless truths through story and example. You can read the classics and not always understand the lessons. But if you read Robert’s books, I promise you will leave not just with actionable lessons but an indelible sense of what to do in many trying and confusing situations. I wrote earlier this year that strategic wisdom is not something we are born with — but the lessons are there for us to pick up. Pick these two up before the year ends and operate the next with a strategic mindset and clarity.<br/><br/>
Conspiracy: Peter Thiel, Hulk Hogan, Gawker, and the Anatomy of Intrigue by Ryan Holiday — If you want to immerse yourself in the above topics of media and strategy, and are looking for one book to teach you lessons in both, my book on the nearly decade-long conspiracy that billionaire Peter Thiel waged against Gawker will do this for you. This is a stunning story about how power works in the modern age, and is a masterclass in strategy and how to accomplish wildly ambitious aims.<br/><br/>
Mr. Eternity by Aaron Thier / The Count of Monte Cristo by Alexandre Dumas These books really have nothing to do with the events of 2016 but they are long and entertaining and they will make you forget your problems for the next 12 months. I thought I’d read Monte Cristo as a kid, but clearly I didn’t. Because the actual book is a 1,200 page epic of some of the most brilliant, beautiful and complicated storytelling ever put to paper. What a book! When I typed out my notes (and quotes) after finishing this book, it ran some 3,000 words. As for Mr. Eternity, it’s a fun, epic jaunt through the distant future (as though it was the past) in the vein of Voltaire’s Candide. Candide isn’t a bad read for this year either: “We must cultivate our own garden.”</p><br/><br/>
                        </Item.Content>
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
                        <Item>
                            <Button basic fluid color="green" content="See responses (216)"/>
                            </Item>     
                </Item.Group> 
                    </Grid.Column>
                    </Grid.Row>
                    </Grid>
                    <Grid style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
                    <Container style={{marginTop:'30px', marginBottom:"30px"}}>
                        <Header as="h3">More From Medium</Header>
                        <Divider/>
                            <Grid>
                                <Grid.Row columns="equal">
                            <Grid.Column>
                                <p style={{fontSize:'16px'}}>More from Mission.org</p>
                                <Image src='https://cdn-images-1.medium.com/focal/504/222/49/52/1*PWGpuXNpkASi6_Sbio7WaQ.jpeg' height="150px" style={{paddingBottom:'10px'}}/>
                                <p style={{fontSize:'21px', fontFamily:'Georgia'}}>How the PlayStation Took Over the World</p>
                                <Item.Group>
                                    <Item>
                                        <Item.Image size="mini"><Avatar round size={40} style={{width:'0'}} name="Andy Raskin"/></Item.Image>
                                        <Item.Content>
                                        Andy Raskin in Mission.org
                                        <p>Sep 15, 2016 &middot; 7 min read</p>
                                        </Item.Content>
                                        <Item.Content>
                                        <svg width="25" height="25" viewBox="0 0 33 33">{clapButton}</svg>54K  |     
                                        <Icon name="bookmark outline"/>                                       
                                        </Item.Content>
                                        <Item.Content>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            </Grid.Column>
                            <Grid.Column>
                                <p style={{fontSize:'16px'}}>More from Mission.org</p>
                                <Image src='https://cdn-images-1.medium.com/focal/504/222/49/52/1*PWGpuXNpkASi6_Sbio7WaQ.jpeg' height="150px" style={{paddingBottom:'10px'}}/>
                                <p style={{fontSize:'21px', fontFamily:'Georgia'}}>How the PlayStation Took Over the World</p>
                                <Item.Group>
                                    <Item>
                                        <Item.Image size="mini"><Avatar round size={40} style={{width:'0'}} name="Andy Raskin"/></Item.Image>
                                        <Item.Content>
                                        Andy Raskin in Mission.org
                                        <p>Sep 15, 2016 &middot; 7 min read</p>
                                        </Item.Content>
                                        <Item.Content>
                                        <svg width="25" height="25" viewBox="0 0 33 33">{clapButton}</svg>54K  |     
                                        <Icon name="bookmark outline"/>                                       
                                        </Item.Content>
                                        <Item.Content>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            </Grid.Column>
                            <Grid.Column>
                                <p style={{fontSize:'16px'}}>More from Mission.org</p>
                                <Image src='https://cdn-images-1.medium.com/focal/504/222/49/52/1*PWGpuXNpkASi6_Sbio7WaQ.jpeg' height="150px" style={{paddingBottom:'10px'}}/>
                                <p style={{fontSize:'21px', fontFamily:'Georgia'}}>How the PlayStation Took Over the World</p>
                                <Item.Group>
                                    <Item>
                                        <Item.Image size="mini"><Avatar round size={40} style={{width:'0'}} name="Andy Raskin"/></Item.Image>
                                        <Item.Content>
                                        Andy Raskin in Mission.org
                                        <p>Sep 15, 2016 &middot; 7 min read</p>
                                        </Item.Content>
                                        <Item.Content>
                                        <svg width="25" height="25" viewBox="0 0 33 33">{clapButton}</svg>54K  |     
                                        <Icon name="bookmark outline"/>                                       
                                        </Item.Content>
                                        <Item.Content>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            </Grid.Column>
                        </Grid.Row>
                            </Grid>  
                    </Container>
                    </Grid>
                <Grid style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", color:"white" }}>
                    <Container style={{ marginTop: '30px', marginBottom: "30px" }}>
                        <Grid>
                            <Grid.Row columns="equal">
                                <Grid.Column>
                                    <p style={{ fontSize: '21px'}}>Discover Medium</p>
                                    <Item.Group>
                                        <Item>
                                            <Item.Content>
                                                Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. <u>Watch</u>
                                            </Item.Content>
                                        </Item>
                                    </Item.Group>
                                </Grid.Column>
                                <Grid.Column>
                                    <p style={{ fontSize: '21px' }}>Make Medium yours</p>
                                    <Item.Group>
                                        <Item>
                                            <Item.Content>
                                                Follow all the topics you care about, and we'll deliver the best stories for you to your homepage and inbox. <u>Explore</u>
                                                </Item.Content>
                                        </Item>
                                    </Item.Group>
                                </Grid.Column>
                                <Grid.Column>
                                    <p style={{ fontSize: '21px' }}>Become a member</p>
                                    <Item.Group>
                                        <Item>
                                            <Item.Content>
                                                Get unlimited access to the best stories on Medium - and support writers while you're at it. Just $5/month. <u>Upgrade</u>   
                                                </Item.Content>
                                        </Item>
                                    </Item.Group>
                                </Grid.Column>
                                </Grid.Row>
                                <Divider/>
                                <Grid.Row>
                                        <Container>
                                            <Menu secondary>
                                                <Menu.Menu position="left">
                                                    <Menu.Item>
                                                <Header as='h1' style={{ color: "white" }}>Medium</Header>
                                                    </Menu.Item>
                                                </Menu.Menu>
                                                <Menu.Menu position='right'>
                                                    <Menu.Item>
                                                <p style={{ color: "white" }}>About</p>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                <p style={{ color: "white" }}>Help</p>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                <p style={{ color: "white" }}>Legal</p>
                                                    </Menu.Item>
                                                </Menu.Menu>
                                            </Menu>
                                </Container>
                                </Grid.Row>
                        </Grid>
                    </Container>
                </Grid>

                    </div>
        );
    }
}