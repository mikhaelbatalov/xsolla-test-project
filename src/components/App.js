import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import TablePage from './TablePage';
import ChartPage from './ChartPage';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact component={TablePage} />
          <Route path="/graph" component={ChartPage} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
