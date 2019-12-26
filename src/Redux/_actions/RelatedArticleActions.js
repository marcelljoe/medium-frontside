import axios from "axios";

export const getRelatedArticles = id => {
  return {
    type: "GET_ARTICLES_RELATED_CATEGORY",
    payload: axios.get(`http://localhost:4000/api/v1/category/${id}/articles`)
  };
};
