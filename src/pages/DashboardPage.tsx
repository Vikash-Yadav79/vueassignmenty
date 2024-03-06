import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../services/api';

const DashboardPage: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error: any) { // Change the type annotation to 'any'
        console.error('Error fetching user data:', error.message);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div>
      <h2>Dashboard Page</h2>
      {userData && (
        <div>
          <h3>Welcome, {userData.first_name} {userData.last_name}</h3>
          <p>Email: {userData.email}</p>
          <p>Avatar: <img src={userData.avatar} alt="Avatar" /></p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
