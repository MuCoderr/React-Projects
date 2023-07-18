import { useEffect, useState } from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import axios from "axios";
import User from "./User";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const { path, url } = useRouteMatch();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(user => setUsers(user.data))
      .finally(setLoading(false));
  }, []);

  return (
    <div>
      <hr />
      <h1>Users</h1>
      {loading && <h4>Loading...</h4>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`${url}/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User}></Route>
      </Switch>
    </div>
  );
}

export default Users;
