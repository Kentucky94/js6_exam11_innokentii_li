import React from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

const ItemBlock = props => {
  return (
    <div >
      <Card>
        <CardImg top className='w-25' src={'http://localhost:8080/uploads/' + props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.price} USD</CardText>
          <Button onClick={props.onClick}>Learn More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemBlock;