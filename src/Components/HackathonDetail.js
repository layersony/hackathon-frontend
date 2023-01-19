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
    const baseUrl = `https://hackathonbackend.cybpact.com/hackathon/${id}`
    const usersUrl = `https://hackathonbackend.cybpact.com/hackathon/${id}/users`

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
      <div className='hackathonImage'>
        <img src={hackathonObject ? hackathonObject.image_url : "https://bamusholdings.com/images/joomlart/demo/default.jpg"} alt="" width={600} />
      </div>
      <div>
        <h3 className="mt-3">{hackathonObject ? hackathonObject.topic : "Loading..."}</h3>
        <Link to={`/hackathon/book/${hackathonObject ? hackathonObject.uniq_id : 0}`}><Button variant='outline-secondary' size='sm'>Register Event</Button>{' '}</Link>
        <div className='d-flex justify-content-left align-items-left flex-column bmt-4 mb-4 mt-3'>
          <span><b>Date and Time :</b> {hackathonObject ? hackathonObject.datetime : "To be Set"}</span>
          <span className="mt-1"><b>Location :</b> - {hackathonObject ? hackathonObject.location : "To be Communicated"} </span>
        </div>
        <h4><u>Description</u></h4>
        <p>{hackathonObject ? hackathonObject.description : "loading..."}</p>
      </div>
      <div className='mt-2 mb-2'>
        <h3><u>Participating users</u></h3>
        <div className="partUsers">
          { hackathonUsers }
        </div>
      </div>
    </Container>
  )
}

export default HackathonDetail