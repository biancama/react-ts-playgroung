import React, {Component} from "react";

interface User {
  name: string;
  age: number;
}
interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}
class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  };
  onClick = () => {
    const {users} = this.props;
    const {name, user} = this.state;

    const foundUser = users.find(user => user.name === name);
    this.setState({user: foundUser});
  }
  render() {
    const {name, user} = this.state;
    return (
      <div>
        User Search
        <input type="text" value={name} onChange={(e) => this.setState({name: e.target.value})} />
        <button onClick={this.onClick}>Search user</button>
        <div>
          {user && user.name}<br/>
        </div>
    </div>
    );
  }
}

export default UserSearch;