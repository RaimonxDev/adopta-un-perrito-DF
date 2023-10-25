/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Tags } from '../Tags/Tags';


// eslint-disable-next-line react/prop-types
export const MyCard = ({title, content, breed, image, colorBadge }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className='text-center'>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>
        {content}
        </Card.Text>
        <Tags text={breed} color={colorBadge} />
      </Card.Body>
    </Card>
  )
}
