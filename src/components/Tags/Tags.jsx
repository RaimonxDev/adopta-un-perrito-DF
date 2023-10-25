/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Badge from 'react-bootstrap/Badge';

// eslint-disable-next-line react/prop-types
export const Tags = ({text, color = 'success' }) => {
  return (
    <div className="text-center">
      <Badge bg={color}>{text.toUpperCase()}</Badge>
    </div>
  )
}
