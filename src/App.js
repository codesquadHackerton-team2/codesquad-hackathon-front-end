import React, { Component } from 'react';
import styled, {injectGlobal} from 'styled-components';
import logo from './logo.svg';
import './App.css';
import GitHubLogin from 'react-github-login';
import Header from './components/Header/Header';
import ListSlider from './components/Slider/ListSldier';
import SimpleSlider from './components/Slick/SlickSimple';
import {image1, image2, image3, image4, image5, image6, image7, image8} from './assets/images';
const axios = require('axios')



const onSuccess = response => {
  const requestToken = response.code;  
  console.log(requestToken);
 
}

const onFailure = response => console.error(response);

const Wrapper = styled.div`
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;
`

const fakeData = [
  {
    img: image1,
    title: 'dummy Title',
    subtitle: 'dummy subTitle', 
  },
  {
    img: image2,
    title: 'dummy Title',
    subtitle: 'dummy subTitle', 
  },
  {
    img: image3,
    title: 'dummy Title',
    subtitle: 'dummy subTitle', 
  },
  {
    img: image4,
    title: 'dummy Title',
    subtitle: 'dummy subTitle', 
  },
  {
    img: image5,
    title: 'dummy Title',
    subtitle: 'dummy subTitle', 
  },
  {
    img: image6,
    title: 'dummy Title',
    subtitle: 'dummy subTitle', 
  },
  {
    img: image7,
    title: 'dummy Title',
    subtitle: 'dummy subTitle', 
  },
  {
    img: image8,
    title: 'dummy Title',
    subtitle: 'dummy subTitle', 
  }
]


class App extends Component {
  render() {
    return (
      <div className="App container">
         <Header 
          title="Gist Blog for CodeReview :D"
          children={<GitHubLogin 
          // clientId={clientID}
          // redirectUri={redirectUri}
          // scope={scope}
          // onSuccess={onSuccess}
          onFailure={onFailure}/>}
         />
         <Wrapper>
          <SimpleSlider
            title="Feature-List"
            dataList={fakeData}
          />
          <SimpleSlider
            title="Hot User"
            dataList={fakeData}
          />
        </Wrapper>
      </div>
    );
  }
}

injectGlobal`
  body {
    background-color: ghostwhite;
    padding: 0;
    margin: 0;
    font-family: cursive;
  }
`

export default App;
