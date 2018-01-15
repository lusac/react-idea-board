import React, { Component } from 'react';
import Header from './components/Header';
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
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">Page1</Link></li>
            <li><Link to="/page2">Page2</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/page1" component={Page1}/>
          <Route path="/page2" component={Page2}/>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <IdeasBoard></IdeasBoard>
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
