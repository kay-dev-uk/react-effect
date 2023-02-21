import React, { useEffect, useState } from 'react'

const FetchSuperhero = () => {
  const [superhero, setSuperhero] = useState([])

  
  useEffect(() => {
      async function getSuperhero(name) {
          const url = `https://superheroapi.com/api/5826270344122811/search/superman`
  
          try {
              const result = await fetch(url)
              const data = await result.json()
              console.log('Superhero', data)
              setSuperhero(data)
          } catch(error) {
              console.log(error)
          }
      }
      getSuperhero()    
  }, [])
  
  return (
      <>
          <h2>Superhero</h2>
          <ul>
              {superhero.map((superhero, idx) => <li key={idx}>{superhero.name}</li>)}
          </ul>
      </>
      )
  }
  
  export default FetchSuperhero
