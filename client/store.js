import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootreducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object gor the default data
const defaultState = {
    posts,
    comments
};

const store = createStore(rootreducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;