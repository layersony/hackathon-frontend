import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './styles/componentStyles.css'

function HackathonCard(props) {
  const hackathonObj = props.hackathondt
  return (
    <div className='col-sm- 12 col-md-6 col-lg-4 hackathonLanding mt-2 '>
      <div className="hackathonCard">
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
      </div>
    </div>

  )
}

export default HackathonCard 