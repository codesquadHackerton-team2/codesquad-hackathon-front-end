import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: left;
  color: palevioletred;
`;

const CardContainer = styled.ul`
`

const Thumbnail = styled.img`
  flex-grow: 1;
  width: 300px;
  height: 250px;
  padding: 5px;
  margin: 15px;
`;

function CardImage({src}) {
  return (
    <Thumbnail src={src}/>
  );
  }

function CardList({cardList}) {
  return (
    <CardContainer>
      {cardList.map(v=>(
        <div>
         
          <Thumbnail src={v.img}/>
          {v.title}
          {v.subtitle}
        </div>
      ))}
    </CardContainer>
  );
  }

class ListSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <div>
        <Title>{this.props.title}</Title>
        <CardList 
          cardList= {this.props.cardList}
          />
      </div>
    );
  }
}

export default ListSlider;