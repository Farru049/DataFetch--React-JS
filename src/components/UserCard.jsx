import React from "react";

// Profile Picture Component
const ProfilePicture = ({ picture, name }) => (
  <img
    className="user-img"
    src={picture?.large || "default-image-url.jpg"} // Use default image if picture is missing
    alt={`${name?.first || "User"} ${name?.last || ""}`}
  />
);

// User Name Component
const UserName = ({ name }) => (
  <h3>{`${name?.first || "First Name"} ${name?.last || "Last Name"}`}</h3>
);

// User Phone Component
const UserPhone = ({ phone }) => (
  <p>{phone || "+91 999999999"}</p>
);

// User Address Component
const UserAddress = ({ location }) => (
  <p>
    {`${location?.street?.name || "Street Name"}, ${location?.city || "City"}, ${
      location?.country || "Country"
    }`}
  </p>
);

// Main UserCard Component
const UserCard = ({ userData }) => {
  if (!userData) {
    return <p>Loading user data...</p>; // Handle case where data is not yet available
  }

  const { name, location, picture, phone } = userData; // Destructure necessary fields

  return (
    <div className="user-card">
      {/* Render Profile Picture */}
      <ProfilePicture picture={picture} name={name} />
      
      {/* Render User Name */}
      <UserName name={name} />

      {/* Render User Phone */}
      <UserPhone phone={phone} />

      {/* Render User Address */}
      <UserAddress location={location} />
    </div>
  );
};

export default UserCard;
