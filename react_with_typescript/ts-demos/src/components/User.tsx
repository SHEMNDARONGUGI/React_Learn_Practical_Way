import type { FC } from "react";

type UserShape = {
  name: string;
  age: number;
  isStudent: boolean;
};

const User: FC<UserShape> = ({ name, age, isStudent }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <h1>{isStudent}</h1>
    </div>
  );
};

export default User;
