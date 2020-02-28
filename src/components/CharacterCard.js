import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardImg
} from 'reactstrap';

export default function CharacterCard(props) {
  return(
    <div className='Char-Container'>
      <CardImg top className='Card-Img' src={props.entity.image}/>
      <Card className='Card'>
      <CardBody className='Card-Body'>
      <CardTitle className='Card-Title'>{props.entity.name}</CardTitle>
        <CardSubtitle className='Card-Subtitle'>Created On: {props.entity.created} </CardSubtitle>
        <CardText className='Card-Text'>
          Gender: {props.entity.gender} <br/>

          Species: {props.entity.species}<br/>

          Mortality Status: {props.entity.status}<br/>

          Appears in {props.entity.episode.length} Episodes <br/>

        </CardText>
      </CardBody>
    </Card>
  </div>
  );
}
