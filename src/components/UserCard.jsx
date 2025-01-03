import React from "react";

const UserCard = ({ user }) => {
  console.log("usercard", user);
  const { firstName, lastName, photoUrl, age, about, gender } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}!</h2>
        <p>{about}</p>
        <p>age{age}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Intrested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
