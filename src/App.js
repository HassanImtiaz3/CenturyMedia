import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 12;

  state={
    progress:0,
  }

  setProgress=(progress)=>{
    this.setState({progress: progress});
  }
  



  render() {

    


    return (
      <React.Fragment>
        <BrowserRouter>

        <LoadingBar
        height={1}
        color='#f11946'
        progress={this.state.progress}
      />


          <NavBar />
          
          <Routes>
            <Route
              path="/Home"
              element={
                <News setProgress={this.setProgress}  
                  pageSize={this.pageSize}
                  country="US"
                  category="general"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/About"
              element={
                <News setProgress={this.setProgress}  
                  pageSize={this.pageSize}
                  country="US"
                  category="science"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/Entertainment"
              element={
                <News setProgress={this.setProgress}  
                  pageSize={this.pageSize}
                  country="US"
                  category="Entertainment"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/Business"
              element={
                <News setProgress={this.setProgress}  
                  pageSize={this.pageSize}
                  country="US"
                  category="business"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/Technology"
              element={
                <News setProgress={this.setProgress}  
                  pageSize={this.pageSize}
                  country="US"
                  category="technology"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/Sports"
              element={
                <News setProgress={this.setProgress}   pageSize={this.pageSize} country="US" category="sports" />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/Science"
              element={
                <News setProgress={this.setProgress}  
                  pageSize={this.pageSize}
                  country="US"
                  category="science"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/Health"
              element={
                <News setProgress={this.setProgress}   pageSize={this.pageSize} country="US" category="health" />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/General"
              element={
                <News setProgress={this.setProgress}  
                  pageSize={this.pageSize}
                  country="US"
                  category="general"
                />
              }
            />
          </Routes>
          <News setProgress={this.setProgress}  
                  pageSize={this.pageSize}
                  country="US"
                  category="general"
                />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
