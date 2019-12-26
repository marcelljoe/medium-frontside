import React, {Component} from 'react';
import {Item, Header} from 'semantic-ui-react';
import Axios from 'axios';
import moment from 'moment';


export default class HomePopular extends Component{

    render(){
        const checkDate = new Date(this.props.createdAt);
        const date = moment(checkDate).format("DD MMMM YYYY");

        return (
          <div>
            <Item.Group>
              <Item stretched="vertically">
                <Header as="h2" floated="left" key={this.props.index}>{`0${this.props.index + 1}`}</Header>
                <Item.Content>
                  <Header as="h4">{this.props.title}</Header>
                  <Item.Content verticalAlign="bottom">
                    <p>
                      {this.props.fullname} in {this.props.categoryName}
                    <br/>{date}</p><br/>
                    
                  </Item.Content>
                </Item.Content>
              </Item>
            </Item.Group>
          </div>
        );
    }
}

