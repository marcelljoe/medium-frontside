import React, {Component} from 'react';
import {Image, Item, Icon, Grid} from 'semantic-ui-react';
import Avatar from 'react-avatar';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';
import { getRelatedArticles } from '../Redux/_actions/RelatedArticleActions';



class RelatedArticles extends Component {
  state = {
      relCat : []
    }
  
  componentDidMount(){
        // console.log(this.props.categoryid);
        // axios.get(`http://localhost:4000/api/v1/category/${this.props.categoryid}/articles`)
        // .then(res => {
        //     this.setState({relCat: res.data});
        //     console.log(this.state.relCat);
        // });
          this.props.dispatch(getRelatedArticles(this.props.categoryid));
  }

  
    render(){
      const {relCat} = this.state;
      console.log(relCat);
      const checkDate = new Date(this.props.date);
      const date = moment(checkDate).format("DD MMMM YYYY");
      const clapButton = (
        <path
          d="M28.86 17.34l-3.64-6.4c-.3-.43-.71-.73-1.16-.8a1.12 1.12 0 0 0-.9.21c-.62.5-.73 1.18-.32 2.06l1.22 2.6 1.4 2.45c2.23 4.09 1.51 8-2.15 11.66a9.6 9.6 0 0 1-.8.71 6.53 6.53 0 0 0 4.3-2.1c3.82-3.82 3.57-7.87 2.05-10.39zm-6.25 11.08c3.35-3.35 4-6.78 1.98-10.47L21.2 12c-.3-.43-.71-.72-1.16-.8a1.12 1.12 0 0 0-.9.22c-.62.49-.74 1.18-.32 2.06l1.72 3.63a.5.5 0 0 1-.81.57l-8.91-8.9a1.33 1.33 0 0 0-1.89 1.88l5.3 5.3a.5.5 0 0 1-.71.7l-5.3-5.3-1.49-1.49c-.5-.5-1.38-.5-1.88 0a1.34 1.34 0 0 0 0 1.89l1.49 1.5 5.3 5.28a.5.5 0 0 1-.36.86.5.5 0 0 1-.36-.15l-5.29-5.29a1.34 1.34 0 0 0-1.88 0 1.34 1.34 0 0 0 0 1.89l2.23 2.23L9.3 21.4a.5.5 0 0 1-.36.85.5.5 0 0 1-.35-.14l-3.32-3.33a1.33 1.33 0 0 0-1.89 0 1.32 1.32 0 0 0-.39.95c0 .35.14.69.4.94l6.39 6.4c3.53 3.53 8.86 5.3 12.82 1.35zM12.73 9.26l5.68 5.68-.49-1.04c-.52-1.1-.43-2.13.22-2.89l-3.3-3.3a1.34 1.34 0 0 0-1.88 0 1.33 1.33 0 0 0-.4.94c0 .22.07.42.17.61zm14.79 19.18a7.46 7.46 0 0 1-6.41 2.31 7.92 7.92 0 0 1-3.67.9c-3.05 0-6.12-1.63-8.36-3.88l-6.4-6.4A2.31 2.31 0 0 1 2 19.72a2.33 2.33 0 0 1 1.92-2.3l-.87-.87a2.34 2.34 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.64l-.14-.14a2.34 2.34 0 0 1 0-3.3 2.39 2.39 0 0 1 3.3 0l.14.14a2.33 2.33 0 0 1 3.95-1.24l.09.09c.09-.42.29-.83.62-1.16a2.34 2.34 0 0 1 3.3 0l3.38 3.39a2.17 2.17 0 0 1 1.27-.17c.54.08 1.03.35 1.45.76.1-.55.41-1.03.9-1.42a2.12 2.12 0 0 1 1.67-.4 2.8 2.8 0 0 1 1.85 1.25l3.65 6.43c1.7 2.83 2.03 7.37-2.2 11.6zM13.22.48l-1.92.89 2.37 2.83-.45-3.72zm8.48.88L19.78.5l-.44 3.7 2.36-2.84zM16.5 3.3L15.48 0h2.04L16.5 3.3z"
          fill-rule="evenodd"
        ></path>
      );
        return (
          <Grid.Row columns={3} centered stretched>
            {this.props.articlesRel.slice(0, 3).map(data => (
              <Grid.Column width={5}>
                <p style={{ fontSize: "16px" }}>
                  More from {data.category.name}
                </p>
                <Image
                  src={data.img}
                  height="150px"
                  style={{ paddingBottom: "10px", align: "justify" }}
                />
                <p style={{ fontSize: "21px", fontFamily: "Georgia" }}>
                  {data.title}
                </p>
                <Item.Group>
                  <Item>
                    <Item.Image size="mini">
                      <Avatar
                        round
                        size={40}
                        style={{ width: "0" }}
                        name={data.user.fullname}
                      />
                    </Item.Image>
                    <Item.Content>
                      {data.user.fullname} in {data.category.name}
                      <p>{date} &middot; 7 min read</p>
                    </Item.Content>
                    <Item.Content>
                      <svg width="25" height="25" viewBox="0 0 33 33">
                        {clapButton}
                      </svg>
                      54K |
                      <Icon name="bookmark outline" />
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Grid.Column>
            ))}
          </Grid.Row>
        );
    }
}

const mapStateToProps = state => ({
  articlesRel: state.relatedArticleReducers.articlesRel
})

export default connect(mapStateToProps)(RelatedArticles);