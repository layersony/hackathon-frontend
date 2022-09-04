import React, { useState } from 'react'
import { Form, Button, InputGroup, Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './styles/componentStyles.css'

function CreateUser(){
  const [errors, setErrors] = useState([])
  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    languages: "",
    role: ""
  })

  const navigate = useNavigate();

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setformData({ ...formData, [name]: value })
  }

  // Submit form data
  function handleSubmit(event) {
    event.preventDefault();
    const baseUrl = "http://localhost:9292/user"

    if (formData.email.length > 0) {
      const reqOption = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      fetch(baseUrl, reqOption).then(response => response.json()).then(res => {
        if (res.error){
          alert('No Need for Registering Again - User Already Registered')
        }
        else{
          alert('User Created Successfully')
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
          <h2 className="text-center m-4">Register</h2>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="fullname">Full Name</InputGroup.Text>
              <Form.Control type="text" name='fullname' onChange={handleChange} value={formData.fullname} placeholder="John Doe" aria-label="Full Name" aria-describedby="fullname" required />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="email">Email</InputGroup.Text>
              <Form.Control type="text" name='email' onChange={handleChange} value={formData.email} placeholder="johndoe@gmail.com" aria-label="Email" aria-describedby="email" required />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="phonenumber">Phone Number</InputGroup.Text>
              <Form.Control type="text" name='phonenumber' onChange={handleChange} value={formData.phonenumber} placeholder="+254723459875" aria-label="Phone Number" aria-describedby="phonenumber" required />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="role">Role</InputGroup.Text>
              <Form.Select name="role" onChange={handleChange} value={formData.role} aria-label="Role" required>
                <option>Select Role</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="DevOps">DevOps</option>
                <option value="Cloud Developer">Cloud Developer</option>
                <option value="Beginner Developer">Beginner Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Ethical Hacker">Ethical Hacker</option>
              </Form.Select>
            </InputGroup>


            <InputGroup className="mb-3">
              <InputGroup.Text id="languages">Languages</InputGroup.Text>
              <Form.Control type="text" name='languages' onChange={handleChange} value={formData.languages} placeholder="Javascript, Python, Ruby" aria-label="Languages" aria-describedby="languages" required />
            </InputGroup>
            

            <div className="d-flex justify-content-center align-items-center">
              <Button variant="success" type="submit">
                Sign Up
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

export default CreateUser