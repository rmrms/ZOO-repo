const ProfileStatusExtended = ({ profile }) => {
  return (
    <div className="mt-4">
      <h2>Extended Profile Status</h2>
      <p>
        {profile.name
          ? `Welcome, ${profile.name}! Your profile is complete.`
          : "Your profile is incomplete. Please update your profile."}
      </p>
      <p>
        {profile.email
          ? `Your email is ${profile.email}.`
          : "Please provide your email address."}
      </p>
      <p>
        {profile.password
          ? "Your password is set."
          : "Please set a password for your account."}
      </p>
      <p>
        {profile.profilePicture ? (
          <img
            src={URL.createObjectURL(profile.profilePicture)}
            alt="Profile"
            className="img-fluid rounded circle"
          />
        ) : (
          "No profile picture uploaded."
        )}
      </p>
      <p>
        {profile.address
          ? `Your address is ${profile.address}.`
          : "Please provide your address."}
      </p>
    </div>
  );
};

export default ProfileStatusExtended;
