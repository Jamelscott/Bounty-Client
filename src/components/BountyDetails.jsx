function BountyDetails({bounty}) {



    return (
      <>
        <h1><em>BountyDetails</em></h1>
        <h2>Name: {bounty.name}</h2>
        <h4>Client: {bounty.client}</h4>
        <h4>Reward: {bounty.reward}</h4>
        <h4>Wanted for: {bounty.wantedFor}</h4>
        <h4>Captured: {bounty.captured}</h4>

      {bounty.ship ? <h4>Ship: {bounty.ship}</h4>: <h4>Ship: none</h4>}

        {bounty.captured ? <h4>captured</h4> : <h4>Still wanted</h4>}
      </>
    );
  }
  
  export default BountyDetails;
  