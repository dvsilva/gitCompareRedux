import React from "react";
import { Provider } from "react-redux";

//import "./config/ReactotronConfig";
import "./config/reactotron";
import store from "./store";
import TodoList from "./TodoList";

//import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
