import Users from "./Users";

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <Users
          key={user.id}
          name={user.name}
          age={user.age}
        />
      ))}
    </ul>
  );
};
export default UserList;
