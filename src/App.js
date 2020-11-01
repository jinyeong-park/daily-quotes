import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    }

  }

  componentDidMount() {
    this.fetchQuoteFromApi()

  }
  // arror function 쓰면 constructor 안에 바인드 안 해도 됨
  fetchQuoteFromApi = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      // console.log('response', response)
      const { advice } = response.data.slip;
      console.log('response.data', advice)
      this.setState({
        quote: advice
      })

    })
    .catch((error) => {
      console.log('App get error', error)

    })
  }

  render() {
    const {quote} = this.state
    console.log('quote', quote)
    return (
      <div className='app'>
        <div className='card'>
           <h1 className='heading'>{quote}</h1>

        </div>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
