/* eslint-disable react/function-component-definition */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, database } from '../misc/firebase';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfiles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userRef;
    const authUnsub = auth.onAuthStateChanged(authObj => {
      if (authObj) {
        userRef = database.ref(`/prodiles/${authObj.uid}`);

        userRef.on('value', snap => {
          const { name, createdAt } = snap.val();
          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            emial: authObj.emial,
          };
          setProfiles(data);
          setIsLoading(false);
        });
      } else {
        if (userRef) {
          userRef.off();
        }
        setProfiles(null);
        setIsLoading(false);
      }
    });
    return () => {
      if (userRef) {
        userRef.off();
      }
      authUnsub();
    };
  }, []);
  return (
    <ProfileContext value={{ profile, isLoading }}>{children}</ProfileContext>
  );
};

export const useProfile = () => {
  useContext(ProfileContext);
};
