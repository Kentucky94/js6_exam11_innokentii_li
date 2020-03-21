import React from 'react';
import {Route, Switch} from "react-router-dom";

import './App.css'
import Layout from "./components/Layout/Layout";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import ItemsMainPage from "./containers/ItemsMainPage/ItemsMainPage";

const App = () => {
  return (
    <Layout>
      <div className="App">
        <Switch>

          <Route path='/register' exact component={Register}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/' component={ItemsMainPage} />
        </Switch>
      </div>
    </Layout>
  );
};

export default App;