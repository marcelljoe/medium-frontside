import React, {Component} from 'react';
import Axios from 'axios';
import {Item, Header} from 'semantic-ui-react';
import moment from 'moment';

export default class HomeRecents extends Component {
    render(){
        const checkDate = new Date(this.props.createdAt)
        const date = moment(checkDate).format("DD MMMM YYYY")
        const subtitle = (this.props.subTitle).substring(0, 120);
        return(
            <div>
            <Item.Group><br />
                    <Item stretched="vertically">
                        <Item.Content key={this.props.index}>
                            <p>BASED ON CATEGORY {this.props.categoryName}</p>
                            <Header as="h2">{this.props.title}</Header>
                            <p>{subtitle}...</p>
                            <Item.Description verticalAlign="bottom">
                                <p>{this.props.fullname}<br />{date}</p>
                            </Item.Description>
                        </Item.Content>
                        <Item.Image src={this.props.img} style={{ height: "150px", width: "150px" }} />
                    </Item>
            </Item.Group>
            </div>            
        );
    }
}