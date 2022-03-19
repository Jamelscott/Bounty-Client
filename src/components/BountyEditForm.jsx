import axios from 'axios';
import { useState } from 'react';
import Form from './Form'

function BountyEditForm({ bounty, setShowForm, showForm }) {
  const [bountyForm, setBountyForm] = useState(bounty);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${process.env.REACT_APP_SERVER_URL}/bounties/${bounty._id}`, bountyForm)
    .then(response =>{
      console.log('🌈✅',response.data)
      setShowForm(!showForm)
    })
    .catch(console.log)
    //do some axios
    // axios
    // .get(process.env.REACT_APP_SERVER_URL + '/bounties')
    // .then((response) => {
    //   setBounties(response.data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };
  // if(showForm) return <Navigate to={`/bounties/${bountyForm._id}`}></Navigate>

  return (
    <>
    <Form 
    bountyForm={bountyForm}
    handleSubmit={handleSubmit}
    setBountyForm={setBountyForm}
    />
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={bountyForm.name}
          onChange={(e) =>
            setBountyForm({ ...bountyForm, name: e.target.value })
          }
          id="name"
        />
        <label htmlFor="wantedFor">Wanted for: </label>
        <input
          type="text"
          value={bountyForm.wantedFor}
          onChange={(e) =>
            setBountyForm({ ...bountyForm, wantedFor: e.target.value })
          }
          id="wanted for"
        />
        <label htmlFor="reward">Reward: </label>
        <input
          type="text"
          value={bountyForm.reward}
          onChange={(e) =>
            setBountyForm({ ...bountyForm, reward: e.target.value })
          }
          id="reward"
        />
        <label htmlFor="client">Client: </label>
        <input
          type="text"
          value={bountyForm.client}
          onChange={(e) =>
            setBountyForm({ ...bountyForm, client: e.target.value })
          }
          id="client"
        />
        <label htmlFor="ship">Ship: </label>
        <input
          type="text"
          value={bountyForm.ship}
          onChange={(e) =>
            setBountyForm({ ...bountyForm, ship: e.target.value })
          }
          id="ship"
        />
        <label htmlFor="captured">Captured: </label>
        <input
          type="text"
          value={bountyForm.captured}
          onChange={(e) =>
            setBountyForm({ ...bountyForm, captured: e.target.value })
          }
          id="captured"
        />
        <input type="submit" />
      </form> */}
    </>
  );
}

export default BountyEditForm;
