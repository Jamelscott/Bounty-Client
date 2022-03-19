import {useParams,Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import NotFound from './NotFound'
import BountyDetails from '../BountyDetails'
import BountyEditForm from '../BountyEditForm'
import axios from 'axios'

function Bounty({bounties}) {

  const [bounty, setBounty] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [shouldNavigate, setShouldNavigate] = useState(false)
  //based onw hwat it was called in App
  const {id} = useParams()
  //ask the back end what the details about this id is
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_SERVER_URL}/bounties/${id}`)
    .then(response=>{
      // console.log(response.data)
      setBounty(response.data)
    })
    .catch(console.log)


  },[showForm])


  // //match state to the bounty freom the url
  // const matchedBounty = bounties.find(bounty => bounty._id === id)
  //acount for errors
  // if(!matchedBounty){
  //   return <NotFound />
  // }
  
    return (
      <>
        <p>show details about {id}</p>
        {
          showForm ? 
          <BountyEditForm 
          bounty={bounty} 
          setShowForm={setShowForm}
          showForm={showForm}
          /> : 
          <BountyDetails bounty={bounty}/>
        }
        <button
        onClick={()=>setShowForm(!showForm)}
        >{showForm ? 'Exit':'edit'}</button>
        <div>

        <Link to='/bounties'>back to Bounties</Link>
        </div>
      </>
    );
  }
  
  export default Bounty;
  