import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function HackathonCard(props) {
  const hackathonObj = props.hackathondt
  console.log(props)
  return (
    <Container className='blogCont d-flex justify-content-center align-items-center mt-2'>
      <img src={hackathonObj.image_url} alt="simple" />
      <div className='p-2'>
        <h4>{hackathonObj.topic} </h4>
        <p>{hackathonObj.description.substring(0, 200)}{hackathonObj.description.length >= 200 && '...'} </p>
        <Container fluid className='d-flex justify-content-between'>
          <span>{hackathonObj.location} </span>
          <span>{hackathonObj.created_at} </span>
          <Link to={`/hackathon/${hackathonObj.uniq_id}`}><Button variant='outline-secondary' size='sm'>Read More</Button>{' '}</Link>
        </Container>
      </div>
    </Container>

  )
}

export default HackathonCard 