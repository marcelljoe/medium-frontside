import React, {Component} from "react";
import {Container, Menu, Icon, Dropdown, Item, Image, Button} from "semantic-ui-react";
import Registration from "./Registration";
import {Link} from "react-router-dom";
import Avatar from "react-avatar";
import addToPhotos from "material-ui/svg-icons/image/add-to-photos";


export default class NSHeader extends Component {
    state = { activateItem: 'none' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    stateNS ={ activateItem: 'none' }
    handleMenuClick = (e, { nameNS }) => this.setState({ activeItem : nameNS })

    render(){
        const options = [
            {
                key: 'user',
                text: (
                    <div>
                        <Item>
                            <Avatar name="Marcell Joe" size={40} round="20px" align="left" style={{ marginRight: '10px' }} />
                            <Item.Content>
                                <strong>Marcell Jonathan</strong>
                                <p>@arcljnthn</p>
                            </Item.Content>
                        </Item>
                        <p style={{ color: "green" }}>Become a member</p>
                    </div>
                ),
                disabled: false,
            },
            <Dropdown.Divider />,
            { key: 'newstory', text: 'New story' },
            { key: 'stories', text: 'Stories' },
            { key: 'stats', text: 'Stats' },
            <Dropdown.Divider />,
            { key: 'bookmarks', text: 'Bookmarks' },
            { key: 'profile', text: 'Profile' },
            { key: 'settings', text: 'Settings' },
            { key: 'help', text: 'Help' },
            { key: 'signout', text: 'Sign Out' },
        ]

        const NSOptions = [
            { key: "atp", text: "Add to publication"},
            { key: "sdl", text: "Share draft link"},
            { key: "stt", text: "Share to Twitter"},
            { key: "mus", text: "Manage unlisted setting"},
            { key: "cfi", text: "Change featured image"},
            { key: "cdt", text: "Change display title / subtitle"},
            { key: "ct", text: "Change tags"},
            { key: "srh", text: "See revision history"},
            { key: "ms", text: "More settings"},
            <Dropdown.Divider/>,
            { key: "hks", text: "Hints and keyboard shortcuts"},
            { key: "mh", text: "More help"}
        ]

        const DropdownTriggerExample = () => (
            <Dropdown fluid trigger={trigger} options={options} />
        )

        const menuTrigger = (<Icon name="ellipsis horizontal"/>)

        const trigger = (
            <Avatar name="Marcell Joe" size="40px" round="20px" />
        )
        return(
            <Container>
                <Menu secondary>
                    <Menu.Item>
                        {/* <Header as='h1' style={{ marginLeft: "0px" }}>Medium</Header> */}
                        <Link to="/"><Image src="https://medium.com/icons/monogram-mask.svg" style={{ width: "35px", height: "35px" }} /></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <p>Draft</p>
                    </Menu.Item>
                    <Menu.Item>
                        <p>Saved</p>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                             <Button size="mini" color="green">Publish</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Dropdown trigger={menuTrigger} options={NSOptions} icon={null} />
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name="bell" />
                        </Menu.Item>
                        <Menu.Item>
                            <Dropdown trigger={trigger} options={options} />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Container>
            );
    }
}