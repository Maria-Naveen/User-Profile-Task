import axios from "axios";
import { useState, useEffect } from "react";
const UserProfile = () => {
  const [details, setDetails] = useState({});
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, []);
  const handleClick = () => {
    setShowBio(!showBio);
  };
  return (
    <div className="mw-1/5 mx-auto p-10 border border-gray-700 shadow-2xl">
      <p className="m-2">
        <span className="font-bold text-lg">Name:</span> {details.name}
      </p>
      <p className="m-2">
        <span className="font-bold text-lg">Email:</span> {details.email}
      </p>
      {showBio && (
        <div className="m-2">
          <span className="font-bold text-lg">Bio:</span>
          <p>{`${details.address.street}, ${details.address.city}`}</p>
          <p>{details.phone}</p>
          <p>{details.website}d</p>
          <p></p>
        </div>
      )}

      <button
        className="w-48 border text-white hover:text-gray-800 border-gray-700 bg-yellow-500 "
        onClick={handleClick}
      >
        Show details
      </button>
    </div>
  );
};

export default UserProfile;
