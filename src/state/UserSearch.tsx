import React, {useState} from "react";

const UserSearch: React.FC = () => {
  const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 20},
    {name: 'Michael', age: 20}
  ];
  const [name, setName] = useState('');
  const [user, setuser] = useState<{name: string, age: number} | undefined>()
  const onClick = () => {
    const foundUser = users.find(user => user.name === name);
    setuser(foundUser);
  }


  return <div>
    User Search
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={onClick}>Search user</button>
    <div>
      {user && user.name}<br/>
    </div>
  </div>;
}

export default UserSearch;