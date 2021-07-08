import Guest from "../Guest/Guest";

function GuestList(props){
    let guestList = props.guestList;
    let deleteGuest = props.deleteGuest;

    return(
        <div>
            <h2>Guest List</h2>
                  <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Kid's Meal</th>
              </tr>
            </thead>
            <tbody>
              {guestList.map(guest => (
                <Guest guest={guest} deleteGuest={deleteGuest}/>
              ))}
            </tbody>
                  </table>
        </div>
    )
}

export default GuestList;