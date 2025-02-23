

const ProfileStatus = ({profile}) => {
  return (
    <div className="mt-4">
      <h2>Profile Status</h2>
      <p>
        {profile.name ? `Welcome, ${profile.name}! Your profile is complete.` : "Your profile is incomplete. Please update your profile."}
      </p>
      <p>
        {
          profile.email ? `Your email is ${profile.email}.` : "Please provide your email address."
        }
      </p>
      <p>
        {profile.password ? "Your password is set." : "Please set a password for your account."}
      </p>
    </div>
  )
}

export default ProfileStatus;