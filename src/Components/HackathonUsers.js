import React from 'react'
import Container from 'react-bootstrap/Container'

function HackathonUsers(props) {
  const hackathonUserObj = props.hackathonUserDt
  return (
    <Container className='hackathonCont d-flex justify-content-start align-items-start mt-2'>
      <div className=''>
        <p>{hackathonUserObj ? hackathonUserObj.user_id :0} </p>
      </div>
    </Container>
  )
}

export default HackathonUsers 