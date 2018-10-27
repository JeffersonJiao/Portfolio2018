import React, { Component } from 'react'
import {About} from './components/pages/About'
import './App.css'
import {Header} from './components/pages/Header'
import {Works} from  './components/pages/Works'
import {Contact} from './components/pages/Contact'
import {Footer} from './components/pages/Footer'
class App extends Component {
  
  state = {
    windowPos :0,
  }
  handleScroll = () =>{
    let windowPos = window.pageYOffset;
    this.setState({windowPos});
    }
componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    }

componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll);
    }
  render() {
    return (
      <React.Fragment>
          <Header scrollPos={this.state.windowPos}/>
          <About/>
          <Works/>
          <Contact/>
          <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
