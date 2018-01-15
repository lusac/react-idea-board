import React, { Component } from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import IdeasBoard from './components/IdeasBoard';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div class="row">
            <Route exact path="/" component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
          </div>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <SubHeader />
    <IdeasBoard />
  </div>
)

const Page1 = () => (
  <div>
    <h2>page 1</h2>
  </div>
)

const Page2 = () => (
  <div>
    <h2>page 2</h2>
  </div>
)

export default App;
