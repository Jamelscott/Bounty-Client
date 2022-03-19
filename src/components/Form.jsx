function Form({bountyForm, setBountyForm, handleSubmit}) {
    return ( <>
    <form onSubmit={handleSubmit}>
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
      </form>
    </> );
}

export default Form;