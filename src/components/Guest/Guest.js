function Guest(props){
let guest = props.guest;
let deleteGuest = props.deleteGuest;
let id = guest.id
const deleteG = () =>{
    deleteGuest(id)
}


    return(
        <tr key={id}>
            <td>{guest.name}</td>
            <td>{String(guest.kidsMeal)}</td>
            <td><button onClick={deleteG}>Delete</button></td>
        </tr>
    );
}

export default Guest;