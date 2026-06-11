const StyledCard = ({ title, description }) => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        color: "darkblue",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default StyledCard;
