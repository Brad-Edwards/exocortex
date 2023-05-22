import React from 'react';
import { Provider } from "react-redux";
import store from "./store/store";
import logo from './logo.svg'; // TODO: Add a logo
import './App.css';
import MainRouter from "./router/MainRouter";

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <MainRouter />
    </Provider>
  );
}

export default App;
