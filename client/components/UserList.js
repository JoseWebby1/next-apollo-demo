import UserCard from './UserCard';
import styles from './UserList.module.css'

const UserList = ({users}) => {
  return (
    <div className={styles.container}>
      <div>
        {users?.map((user) => (
          <div key={user.id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList;
