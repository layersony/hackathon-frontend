import React, { useState, useEffect } from 'react';
import HackathonCard from "./HackathonCard"

function Hackathon(){
  const base_url = "http://localhost:9292"

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

  console.log(hackathons)

  return (
      <div>
        {hackathons}
      </div>
  )

}

export default Hackathon