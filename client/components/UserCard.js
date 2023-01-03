import styles from './UserCard.module.css'

const UserCard = ({ user }) => {
  return (
      <div className={styles.card}>
        <div>
          <h5 className={styles['card-title']}>Name: {user.firstName}</h5>
          <p> Address: {user.address.address} </p>
          <p> Email: {user.email} </p>
          <p> Phone number: {user.phone} </p>
        </div>
      </div>
    );
  };
  
export default UserCard;
