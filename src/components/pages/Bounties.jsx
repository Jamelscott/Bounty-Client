import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Form from '../Form'

function Bounties({bounties}) {

  // const [bountyCreate, setBountyCreate] = useState({})

  const [bountyCreate, setBountyCreate] = useState({
    name: "",
    wantedFor: "",
    client: "",
    ship: ""
  })
  // const [bountyForm, setBountyForm] = useState(bountyCreate);

  



  // controle form to createa a new bounty

  // render all the bounties with links to /bounties/:id
const bountyLinks = bounties.map((bounty,idx)=>{
  return(
    <div key={`bounty-link-${idx}`}>
      <Link to={`/bounties/${bounty._id}`}>{bounty.name}</Link>
    </div>
  )
})

const handleSubmit = (e)=>{
  e.preventDefault()
  // 
  axios.post(`${process.env.REACT_APP_SERVER_URL}/bounties`, bountyCreate)
  .then(newBounty=>{
    return axios.get(process.env.REACT_APP_SERVER_URL + '/bounties')
    console.log(newBounty.data)
    // setBountyCreate({
    //   name: "",
    //   wantedFor: "",
    // })
  })
  .catch(console.log)
}


    return (
      <>
        <h1>Bounties</h1>
        {bountyLinks}

        <Form 
       bountyForm={bountyCreate}
       setBountyForm={setBountyCreate}
       handleSubmit={handleSubmit}
       />
        {/* <form onSubmit={handleSubmit}>
          <label htmlFor="bountyName">Name:</label>
          <input 
          type="text"
          name="name"
          value={bountyCreate.name}
          onChange={(e)=> setBountyCreate({...bountyCreate, name: e.target.value})}

           />
          <label htmlFor='bountyWantedFor'>Wanted For: </label>
          <input 
          type="text"
          value={bountyCreate.wantedFor}
          onChange={(e)=> setBountyCreate({...bountyCreate, wantedFor: e.target.value})}
          />
          <label htmlFor='bountyClient'>Client: </label>
          <input 
          type="text"
          value={bountyCreate.client}
          onChange={(e)=> setBountyCreate({...bountyCreate, client: e.target.value})}
          />
          <label htmlFor='bountyShip'>ship: </label>
          <input 
          type="text"
          value={bountyCreate.ship}
          onChange={(e)=> setBountyCreate({...bountyCreate, ship: e.target.value})}
          />

          <input type="submit" />

        </form> */}
      </>
    );
  }
  
  export default Bounties;
  