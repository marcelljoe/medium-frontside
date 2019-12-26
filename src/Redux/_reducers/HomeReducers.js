const initState = {
  articlesL: [],
  articlesR: []
}



const HomeReducers = (state = initState, action) => {
  switch (action.type) {
    case "GET_LATEST_ARTICLES_FULFILLED":
      return {
        ...state,
        articlesL: action.payload.data
      };
    case "GET_ARTICLES_FULFILLED":
      return {
        ...state,
        articlesR: action.payload.data
      };
    default:
      return state;
  }
}

export default HomeReducers;