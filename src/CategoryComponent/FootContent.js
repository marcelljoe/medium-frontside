import React, {Component} from 'react';
import {Item, Divider} from 'semantic-ui-react';
import moment from 'moment';


export default class FootContent extends Component {
    render(){
        const checkDate = new Date(this.props.createdAt);
        const date = moment(checkDate).format("DD MMMM YYYY");
        const subtitle = this.props.content.substring(0, 50);
    
        return (
          <div>
            <Item.Group>
              <Item stretched="vertically">
                <Item.Content>
                  <Item.Header as="h3" style={{ fontSize: "22px" }}>
                    {this.props.title}
                  </Item.Header>
                  <br />
                  <p style={{ fontSize: "18px" }}>{subtitle}...</p>
                  <p style={{ fontSize: "14px", color: "#6a0bff" }}>
                    {this.props.fullname}
                  </p>
                  <p style={{ fontSize: "14px" }}>{date}</p>
                </Item.Content>
                <Item.Content style={{textAlign: "right"}}>
                  <Item.Image
                    src={this.props.img} size="small"/>
                </Item.Content>
              </Item>
              <Divider />
            </Item.Group>
          </div>
        );
    }
}

