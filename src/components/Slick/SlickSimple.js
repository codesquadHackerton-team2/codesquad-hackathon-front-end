import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';


const Title = styled.h2`
  font-size: 2em;
  text-align: left;
  color: #222;
`

const Thumbnail = styled.img`
  flex-grow: 1;
  width: 300px;
  height: 250px;
  padding: 5px;
  margin: 15px;
  max-width: 100%;
`;

const CardTitle = styled.p`

  font-size: 1em;
  text-align: center;
  color: #222;
`

const CardSubTitle = styled.p`
  font-size: 0.8em;
  text-align: center;
  color: #aaa;
`

const CardContainer = styled.div`
  
`

const SlideItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.handleRenderData = this.handleRenderData.bind(this)
    this.state = {
      
    };
  }
  handleRenderData(data){
    console.log('data',data)
    return data.map(v=>(
      <div>
        <Thumbnail src={v.img} />
        <CardTitle>{v.title}</CardTitle>
        <CardSubTitle>{v.subtitle}</CardSubTitle>
     </div>
    ))
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Title> {this.props.title}</Title>
        <Slider {...settings}>
          {this.props.dataList.map(v=>(
            <CardContainer>
              <Thumbnail src={v.img} />
              <CardTitle>{v.title}</CardTitle>
              <CardSubTitle>{v.subtitle}</CardSubTitle>
            </CardContainer>
          ))}
        </Slider>
      </div>
    );
  }
}