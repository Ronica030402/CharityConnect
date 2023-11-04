import React, { useState, createContext } from 'react';

const initialUserProfile = {
  name: 'Children Home',
  email: 'childrenhome.com',
  phone: '(0111) 555-5555',
  address: '123 Main Street, Johannesburg, Gauteng, Zip 1401',
  npoMission: 'Our mission is to fight hunger and food insecurity by providing nutritious meals to non-profit organizations and communities in need.',
  npoVision: 'To create a world where no one goes to bed hungry, and everyone has access to nutritious food.',
  npoFounded: 'Founded in 2005',
  npoWhyFounded: 'Founded to address the growing issue of food insecurity in our community.',
  npoAchievements: 'Distributed over 1 million meals to date',
  npoWebsite: 'https://www.example-npo.org',
  npoFacebook: 'https://www.facebook.com/example-npo',
  npoTwitter: 'https://twitter.com/example-npo',
  npoInstagram: 'https://www.instagram.com/example-npo',
  npoLinkedIn: 'https://www.linkedin.com/company/example-npo',
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
