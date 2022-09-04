import React, { useState, useEffect } from 'react'
import { Form, Button, InputGroup, Container, Row, Col } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './styles/componentStyles.css'

function CreateEvent() {
  const [errors, setErrors] = useState([])
  const [hackathonObject, sethackathonObject] = useState()
  const [formData, setformData] = useState({
    hackathon_uniq_id: "",
    email: "",
  })

  const navigate = useNavigate();

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    setformData({ ...formData, [name]: value })
  }

  const { id } = useParams()
  // get hackathon data
  useEffect(() => {
    const baseUrl = `http://localhost:9292/hackathon/${id}`
    const fetchData = async () => {
      const data = await fetch(baseUrl)
      const json = await data.json()
      sethackathonObject(json)
    }

    fetchData().catch(console.error)
  }, [id])

  // Submit form data
  function handleSubmit(event) {
    event.preventDefault();
    
    const baseUrl = `http://localhost:9292/book/event`

    if (formData.email.length > 0) {
      formData['hackathon_uniq_id'] = id
      console.log(formData)
      const reqOption = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      fetch(baseUrl, reqOption).then(response => response.json()).then(res => {
        if (res.error) {
          // take to ticket
          alert('Already Registered For this Event')
        }
        else if (res.usererror){
          alert('Do Register First to Book for a Ticket')
          navigate("/register")
        }
        else {
          alert('Successfully Registered')
          // take to ticket
          navigate('/')
        }
      }).catch(er => {
        alert('Check Console Panel An Error Occured')
        console.log('error', er)
      })
      setErrors([])
    } else {
      setErrors(['Recheck data entered and try again'])
    }
  }

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col md={3}></Col>
        <Col md={7}>
          <h2 className="text-center m-4">Book Ticket For {hackathonObject ? hackathonObject.topic : "Loading..."}</h2>
          <div>
            <p>Location: {hackathonObject ? hackathonObject.datetime : "To be Set"}</p>
            <p>Date and Time: {hackathonObject ? hackathonObject.location : "To be Communicated"}</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="email">Email</InputGroup.Text>
              <Form.Control type="text" name='email' onChange={handleChange} value={formData.email} placeholder="johndoe@gmail.com" aria-label="Email" aria-describedby="email" required />
            </InputGroup>

            <div className="d-flex justify-content-center align-items-center">
              <Button variant="success" type="submit">
                Get Ticket
              </Button>
            </div>
          </Form>

          {errors.length > 0 ? errors.map((error, index) => (<p key={index} style={{ color: "red" }}>{error}</p>)) : null}
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>

  )

}

export default CreateEvent