import React, { useState, createContext } from 'react';

const initialUserProfile = {
  name: 'Nhlanhla Leece',
  email: 'nhlanhlaleece@email.com',
  phone: '(081) 555-5555',
  address: '123 Black reef road, City, State, Zip Code',
  cardDetails: {
    cardNumber: '** ** ** 1234 (Expires 12/25)',
    expiryDate: '12/25',
    cvv: '***',
  },
};

export const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(initialUserProfile);
  const updateUserProfile = (updatedProfile) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      ...updatedProfile,
    }));
  };

  return (
    <UserProfileContext.Provider value={{ userProfile, updateUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};
