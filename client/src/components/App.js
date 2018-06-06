import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Overview from './Overview';
import Sidebar from './Sidebar';
import Analysis from './Analysis';
import Code from './Code';
import Datasets from './Datasets';
import Search from './Search';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Sidebar />
          <Route exact path="/" component={Overview} />
          <Route exact path="/analysis" component={Analysis} />
          <Route exact path="/code" component={Code} />
          <Route exact path="/datasets" component={Datasets} />
          <Route exact path="/search" component={Search} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
