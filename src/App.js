/*import './css/bootstrap.min.css';
import './App.css'
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pagesize=6;
  apiKey='8f62a5ee3dea410c8aa802e0bef49f05';

  state={
    progress:0

  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
          
          />
          <Routes>
            <Route exact  path="/" element={<  News setProgress={this.setProgress} apiKey={this.apiKey}  key='general' pagesize={this.pagesize} country="in" category="general" />}></Route>
            <Route exact path="/Business" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pagesize={this.pagesize} country="in" category="business" />}></Route>
            <Route exact path="/Entertainment" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pagesize={this.pagesize} country="in" category="entertainment" />}></Route>
            <Route exact path="/General" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pagesize={this.pagesize} country="in" category="general" />}></Route>
            <Route exact path="/Health" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pagesize={this.pagesize} country="in" category="health" />}></Route>
            <Route exact path="/Science" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pagesize={this.pagesize} country="in" category="science" />}></Route>
            <Route exact path="/Sports" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pagesize={this.pagesize} country="in" category="sports" />}></Route>
            <Route exact  path="/Technology" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key='technology}>' pagesize={this.pagesize} country="in" category="technology" />}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}
*/
//function based component
import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pagesize = 6;
  const apiKey = '8f62a5ee3dea410c8aa802e0bef49f05';

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={setProgress} apiKey={apiKey} key='general' pagesize={pagesize} country='in' category='general' />}
          ></Route>
          <Route
            exact
            path="/Business"
            element={<News setProgress={setProgress} apiKey={apiKey} key='business' pagesize={pagesize} country='in' category='business' />}
          ></Route>
          <Route
            exact
            path="/Entertainment"
            element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pagesize={pagesize} country='in' category='entertainment' />}
          ></Route>
          <Route
            exact
            path="/General"
            element={<News setProgress={setProgress} apiKey={apiKey} key='general' pagesize={pagesize} country='in' category='general' />}
          ></Route>
          <Route
            exact
            path="/Health"
            element={<News setProgress={setProgress} apiKey={apiKey} key='health' pagesize={pagesize} country='in' category='health' />}
          ></Route>
          <Route
            exact
            path="/Science"
            element={<News setProgress={setProgress} apiKey={apiKey} key='science' pagesize={pagesize} country='in' category='science' />}
          ></Route>
          <Route
            exact
            path="/Sports"
            element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pagesize={pagesize} country='in' category='sports' />}
          ></Route>
          <Route
            exact
            path="/Technology"
            element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pagesize={pagesize} country='in' category='technology' />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

