function PartyLeader(props){
    let partyLeader = props.leader;
    return(
        <div>
            <h2>Party Leader</h2>
            {partyLeader && <h3>{partyLeader.name}</h3>}
        </div>
    )
}

export default PartyLeader;