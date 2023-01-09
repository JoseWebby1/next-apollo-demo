import UserList from '../components/UserList';
import { useState, useEffect } from "react"; 
import styles from './users.module.css'
const endpoint = 'https://dummyjson.com/users';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [skipLimit, setSkipLimit] = useState(0);

  const fetchMoreUsers = async (e) => {
    try {
      const res = await fetch(
        `${endpoint}?limit=20&skip=${skipLimit}`
      );
      const data = await res.json();
      setUsers(data.users)
      setSkipLimit(skipLimit+20);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMoreUsers();
  }, []);

  return (
    <div>
      <h1 className={styles.heading}> User List.... </h1>
      <UserList users={users} />
      <button type='button' className={styles.btn} onClick={fetchMoreUsers}>Load More Users</button>
    </div>
  )
}

export default Users;
