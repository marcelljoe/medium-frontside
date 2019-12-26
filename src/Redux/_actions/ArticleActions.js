import axios from "axios";


export const getArticlesByCategory = (id) => {
  return {
    type: "GET_ARTICLES_BC",
    payload: axios.get(`http://localhost:4000/api/v1/category/${id}/articles`)
  };
};

