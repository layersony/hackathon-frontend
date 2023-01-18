import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import HackathonCard from "./HackathonCard"
import './styles/componentStyles.css'


function Hackathon(){
  const base_url = "https://hackathonbackend.cybpact.com/"

  const [ hackathonList, setHackathonList ] = useState([]);

  useEffect(() =>{
    const fetchData = async () => {
      const data = await fetch(base_url)
      const json = await data.json()
      setHackathonList(json)
    }

    fetchData().catch(console.error)
    
  }, [])

  const hackathons = hackathonList.map(item => {
    return <HackathonCard key={item.id} hackathondt={item} />
  })

  return (
    <Container>
      <div className="row mt-5 mb-5">
        {hackathons}
      </div>
    </Container>
  )

}

export default Hackathon