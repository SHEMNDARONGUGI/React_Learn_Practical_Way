const StyledCard = ({ title, description }) => {
  return (
    <div
      style={{
        backgroundColor: "lightBlue",
        padding: "20px",
        borderRadius: "10px",
        textColor: "darkBlue",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default StyledCard;
