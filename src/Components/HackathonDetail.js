import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

function HackathonDetail() {
  const { id } = useParams()
  const [hackathonObject, sethackathonObject] = useState()

  useEffect(() => {
    const baseUrl = `http://localhost:9292/hackathon/${id}`
    const fetchData = async () => {
      const data = await fetch(baseUrl)
      const json = await data.json()
      sethackathonObject(json)
    }

    fetchData().catch(console.error)
  }, [id])

  console.log(hackathonObject)

  return (
    <Container className='p-2'>
      ID: {hackathonObject ? hackathonObject.uniq_id : '00000000'}
      <div className='hackathonImage'>
        <img src={hackathonObject ? hackathonObject.image_url : "https://bamusholdings.com/images/joomlart/demo/default.jpg"} alt="" width={600} />
      </div>
      <div>
        <h3 className="mt-3">{hackathonObject ? hackathonObject.topic : "Loading..."}</h3>
        <div className='d-flex justify-content-left align-items-center mt-4 mb-4'>
          <span>Date and Time: {hackathonObject ? hackathonObject.datetime : "To be Set"}</span>
          <span className="ms-3">location: - {hackathonObject ? hackathonObject.location : "To be Communicated"} </span>
        </div>
        <p>{hackathonObject ? hackathonObject.description : "loading..."}</p>
      </div>
    </Container>
  )
}

export default HackathonDetail