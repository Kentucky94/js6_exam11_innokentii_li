import React from 'react';
import {Route, Switch} from "react-router-dom";

import './App.css'
import Layout from "./components/Layout/Layout";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import ItemsMainPage from "./containers/ItemsMainPage/ItemsMainPage";
import AddItemPage from "./containers/AddItemPage/AddItemPage";
import FullItemPage from "./containers/FullItemPage";

const App = () => {
  return (
    <Layout>
      <div className="App">
        <Switch>
          <Route path='/register' exact component={Register}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/items/add' exact component={AddItemPage} />
          <Route path='/items/:id' exact component={FullItemPage} />
          <Route path='/' component={ItemsMainPage} />
        </Switch>
      </div>
    </Layout>
  );
};

export default App;