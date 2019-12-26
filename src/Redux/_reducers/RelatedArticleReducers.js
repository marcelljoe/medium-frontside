const initState = {
  articlesRel: []
};

const relatedArticleReducers = (state = initState, action) => {
  switch (action.type) {
    case "GET_ARTICLES_RELATED_CATEGORY_FULFILLED":
      return {
        ...state,
        articlesRel: action.payload.data
      };
    default:
      return state;
  }
};

export default relatedArticleReducers;
