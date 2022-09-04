import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import HackathonUsers from './HackathonUsers'
import './styles/componentStyles.css'


function HackathonDetail() {
  const { id } = useParams()
  const [hackathonObject, sethackathonObject] = useState()
  const [hackathonUserObject, sethackathonUserObject] = useState([])

  useEffect(() => {
    const baseUrl = `http://localhost:9292/hackathon/${id}`
    const usersUrl = `http://localhost:9292/hackathon/${id}/users`

    const fetchData = async () => {
      const data = await fetch(baseUrl)
      const json = await data.json()
      sethackathonObject(json)
    }

    const fetchUsersData = async () => {
      const data = await fetch(usersUrl)
      const json = await data.json()
      sethackathonUserObject(json)
    }

    fetchData().catch(console.error)
    fetchUsersData().catch(console.error)
  }, [id])

  const hackathonUsers = hackathonUserObject.map(item => {
    return <HackathonUsers key={item.id} hackathonUserDt={item} />
  })


  return (
    <Container className='p-3 hackathondetail'>
      ID: {hackathonObject ? hackathonObject.uniq_id : '00000000'}
      <div className='hackathonImage bg-primary'>
        <img src={hackathonObject ? hackathonObject.image_url : "https://bamusholdings.com/images/joomlart/demo/default.jpg"} alt="" width={600} />
      </div>
      <div>
        <h3 className="mt-3">{hackathonObject ? hackathonObject.topic : "Loading..."}</h3>
        <Link to={`/hackathon/book/${hackathonObject ? hackathonObject.uniq_id : 0}`}><Button variant='outline-secondary' size='sm'>Register Event</Button>{' '}</Link>
        <div className='d-flex justify-content-left align-items-center mt-4 mb-4'>
          <span>Date and Time: {hackathonObject ? hackathonObject.datetime : "To be Set"}</span>
          <span className="ms-3">location: - {hackathonObject ? hackathonObject.location : "To be Communicated"} </span>
        </div>
        <p>{hackathonObject ? hackathonObject.description : "loading..."}</p>
      </div>
      <div>
        <h2>Participating users</h2>
        <div className="partUsers">
          { hackathonUsers }
        </div>
      </div>
    </Container>
  )
}

export default HackathonDetail