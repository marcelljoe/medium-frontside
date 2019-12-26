import axios from 'axios';


export const getArticles = () => {
    return {
      type: "GET_ARTICLES",
      payload: axios.get("http://localhost:4000/api/v1/articles")
    };
}

export const getLatestArticles = () => {
    return {
      type: "GET_LATEST_ARTICLES",
      payload: axios.get("http://localhost:4000/api/v1/latestarticles")
    };
}
