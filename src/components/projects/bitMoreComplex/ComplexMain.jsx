import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusExtended from "./ProfileStatusExtended";

const ComplexMain = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeComponent, setActiveComponent] = useState("ProfileSettings");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfile((prevProfile) => ({
      ...prevProfile,
      profilePicture: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profile),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert("Profile updated successfully!");
    } catch (error) {
      setError(error.message);
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "ProfileSettings":
        return (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="profilePicture" className="form-label">
                Profile Picture
              </label>
              <input
                type="file"
                className="form-control"
                id="profilePicture"
                name="profilePicture"
                onChange={handleProfilePictureChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
          </form>
        );
      case "ProfileStatus":
        return <ProfileStatus profile={profile} />;
      case "ProfileStatusExtended":
        return <ProfileStatusExtended profile={profile} />;
      case "Login":
        return <Login />;
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <h1>Profile Settings</h1>
      <p>
        The whole purpose of this page is to test the multiple mechanisms of
        React.
      </p>
      {loading && <p>Loading...</p>}
      {error && <p className="alert alert-danger">{error}</p>}
      {!loading && !error && (
        <>
          <div className="mb-4">
            <select
              className="form-select"
              value={activeComponent}
              onChange={(e) => setActiveComponent(e.target.value)}
            >
              <option value="ProfileSettings">Profile Settings</option>
              <option value="ProfileStatus">Profile Status</option>
              <option value="ProfileStatusExtended">
                Profile Status Extended
              </option>
              <option value="Login">Login</option>
            </select>
          </div>
          {renderComponent()}
        </>
      )}
    </div>
  );
};

export default ComplexMain;
