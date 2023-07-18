import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function User() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(user => setUsers(user.data))
      .finally(setLoading(false));
  }, [id]);

  return (
    <div>
      {loading && <h4>Loading...</h4>}
      <h1>User Detail</h1>
      {!loading && <code>{JSON.stringify(users)}</code>}

      <div>
        <Link to={`/users/${parseInt(id) + 1}`}>
          Next Users ({parseInt(id) + 1})
        </Link>
      </div>
    </div>
  );
}

export default User;
