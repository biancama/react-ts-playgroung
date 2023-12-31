import { useState } from "react";

const GuestList:React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);
  const onClick =  () => {
    setGuests([...guests, name]);
    setName('');
  };
  return <div>
    <h3>GuestList</h3>
    <ul>
      {guests.map(g => <li key={g}>{g}</li>)}
    </ul>
    <input type="text" name="guestName" id="" value={name} onChange={(e) => setName((e.target.value)) }/>
    <button onClick={onClick}>Add Guest</button>
  </div>;
};

export default GuestList;