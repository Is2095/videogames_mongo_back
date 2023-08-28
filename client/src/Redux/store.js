
import { createStore, applyMiddleware, compose } from 'redux';
import  reducer from './reducer';
import thunk from 'redux-thunk';


const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS

const store = createStore(
   reducer,
   composeEnhancers(applyMiddleware(thunk)), //esta línea es para poder hacer peticiones a un server (middleware)
);
export default store;
