import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      // Computed property name
      [name]: value,
    }));
  };
  // const [userProfile, setUserProfile] = useState({
  //   name: "",
  //   age: null,
  // });

  // const updatedProfile = () => {
  //   setUserProfile({ ...userProfile, name: userProfile.name });
  //   setUserProfile({ ...userProfile, age: userProfile.age });
  // };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>

      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      {/* <input
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
      </div> */}
    </div>
  );
}

export default Profile;
