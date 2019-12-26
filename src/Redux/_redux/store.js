import { createStore, combineReducers, applyMiddleware} from 'redux';
import HomeReducers from '../_reducers/HomeReducers';
import ArticleReducers from '../_reducers/ArticleReducers';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import relatedArticleReducers from '../_reducers/RelatedArticleReducers';


const middlewares = [logger, promiseMiddleware];

const reducers = combineReducers({
    HomeReducers,
    ArticleReducers,
    relatedArticleReducers
});

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;