import React from 'react'
import './styles/componentStyles.css'

function HackathonUsers(props) {
  const hackathonUserObj = props.hackathonUserDt
  return (
    <div className='userlisting mt-1 d-flex justify-content-start'>
      <img src="https://bit.ly/3qsOlwx" alt="userpic" />
      <div className="userinfo ps-3">
        <h4>{hackathonUserObj ? hackathonUserObj.user.fullname : ''} </h4>
        <p>{hackathonUserObj ? hackathonUserObj.user.role : ''}</p>
        <p>{hackathonUserObj ? hackathonUserObj.user.email : ''}</p>
      </div>
    </div>
  )
}

export default HackathonUsers 