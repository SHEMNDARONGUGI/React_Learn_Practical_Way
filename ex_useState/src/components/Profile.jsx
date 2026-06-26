import { useState } from "react";

function Profile() {
  const [userProfile, setUserProfile] = useState({
    name: "",
    age: null,
  });

  const updatedProfile = () => {
    setUserProfile({ ...userProfile, name: userProfile.name });
    setUserProfile({ ...userProfile, age: userProfile.age });
  };

  return (
    <div>
      <input
        type="text"
        value={userProfile.name}
        placeholder="input name..."
        onChange={(e) =>
          setUserProfile({ ...userProfile, name: e.target.value })
        }
      />

      <input
        type="number"
        value={userProfile.age}
        placeholder="input age..."
        onChange={(e) =>
          setUserProfile({ ...userProfile, age: e.target.value })
        }
      />

      <button onClick={updatedProfile}>UpdateProfile</button>

      <div>
        <h3>{userProfile.name}</h3>
        <p>{userProfile.age}</p>
      </div>
    </div>
  );
}

export default Profile;
