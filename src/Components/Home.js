import React from 'react'
import Hackathon from './Hackathon'
import './styles/componentStyles.css'

function Home() {
  return (
    <>
      <section className="headerclass d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h1 className="ms-sm-0 ms-md-5">We Got 99 Problems, But Writing Code Ain't One</h1>
          </div>
          <div className="col-sm-12 col-md-6">
            <img src="./images/collaboration.svg" alt="" />
          </div>
        </div>
    </section>
    <section id="events" className="mt-4">
        <h2 className="text-center">Up-Coming Events</h2>
        <Hackathon />
    </section>
    <section id="usersLogics">

    </section>
    </>
  )
}

export default Home 