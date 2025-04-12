import { useEffect, useState } from 'react'
import './App.css'
import PersonCard from './components/person-card/person-card.component'

function App() {

  const [data, setData] = useState(null);
  const [category, setCategory] = useState("freedom_fighters");


  // Using the lifecycle - ComponentDidMount
  useEffect(() => {

    async function getLeaderData() {
      const response = await fetch("/src/assets/data/leaders.json");
      const json = await response.json();
      setData(json);
    }

    getLeaderData();

  }, [])

  return (
    <>
      <select onChange={function (e) {
        setCategory(e.target.value);
      }}>
        <option value={"freedom_fighters"}>Freedom Fighters</option>
        <option value={"politicians"}>Politicians</option>
        <option value={"leaders"}>Leaders</option>
      </select>

      <div className='person-list'>
        {
          data && data[category] && data[category].map(function (person, index) {
            return <PersonCard person={person} />
          })
        }
      </div>



    </>
  )
}

export default App
