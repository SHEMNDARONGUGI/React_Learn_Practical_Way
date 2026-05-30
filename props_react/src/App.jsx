import React from "react";

const App = () => {
  return (
    <User
      img="https://avatars.githubusercontent.com/u/152214765?s=400&u=7132302d4ff48feb57ddab656f63e12d0b087cd7&v=4"
      name="Shem Ndaro Ngugi"
      age={22}
      isMarried={false}
      hobbies={["coding", "reading", "cycling"]}
    />
  );
};

// Props destructuring
const User = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <section>
      <img src={img} alt={name} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is married: {isMarried}</h3>
      <h4>Hobbies: {hobbies}</h4>
    </section>
  );
};

// const User = (props) => {
//   console.log(props);
//   return (
//     <section>
//       <img src={props.img} alt={props.name} />
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//       <h3>Is married: {props.isMarried}</h3>
//       <h4>Hobbies: {props.hobbies}</h4>
//     </section>
//   );
// };

export default App;
