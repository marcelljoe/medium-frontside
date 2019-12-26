const initState = {
  articlesByCat: []
};

const ArticleReducers = (state = initState, action) => {
  switch (action.type) {
    case "GET_ARTICLES_BC_FULFILLED":
      return {
        ...state,
        articlesByCat: action.payload.data
      };
    default:
      return state;
  }
};

export default ArticleReducers;
