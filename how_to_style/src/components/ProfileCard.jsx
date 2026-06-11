const ProfileCard = ({ username, bio }) => {
  const styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    margin: "20px",
    borderRadius: "8px",
    textColor: "black",
  };
  return (
    <div style={styles}>
      <h1>{username}</h1>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;
