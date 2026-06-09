// import "./index.css";
import { TiShoppingCart } from "react-icons/ti";
import { FaComputer } from "react-icons/fa6";
import data from "./data";
import StyledCard from "./components/StyledCard";
import ProfileCard from "./components/ProfileCard";
import profileData from "./profileData";
const App = () => {
  // const styles = {
  //   color: "red",
  //   backgroundColor: "teal",
  //   padding: "2rem",
  // };
  return (
    <section>
      {data.map((data, id) => (
        <StyledCard
          key={id}
          title={data.title}
          description={data.description}
        />
      ))}

      {profileData.map((profile, id) => (
        <ProfileCard key={id} username={profile.username} bio={profile.bio} />
      ))}
      {/* <TiShoppingCart />
      <FaComputer /> */}

      {/* <h1 style={styles}>Inline Style</h1> */}
      {/* <h1>Separate file for styling</h1> */}
    </section>
  );
};

export default App;
