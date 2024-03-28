import React from 'react';

// Define types for user data
interface User {
  name: string;
  image: string;
}

// Profile component
const Profile: React.FC = () => {
  // Dummy user data
  const user: User = {
    name: 'John Doe',
    image: 'path/to/user/image.jpg' // You can replace this with the actual path to the user's image
  };

  return (
    <div>
      {/* Banner */}
      <div style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
        <h1>마이페이지</h1>
      </div>

      {/* User information */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* User image */}
        <img src={user.image} alt="User" style={{ width: '150px', borderRadius: '50%', marginBottom: '10px' }} />
        {/* User name */}
        <h2>{user.name}</h2>
      </div>
    </div>
  );
}

export default Profile;
