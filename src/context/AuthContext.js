import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from 'lib/firebase';
import {
  collection,
  addDoc,
  setDoc,
  doc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

import {
  updateProfile,
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [profile, setProfile] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function setUsername(username) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        try {
          const accountData = {
            username: username,
            uid: auth.currentUser.uid,
            memberSince: serverTimestamp(),
          };
          setDoc(doc(db, 'accounts', username), { ...accountData });
          updateProfile(user, {
            displayName: username,
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      } else {
        // User is signed out
        // ...
      }
    });
  }
  const signup = (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password).catch(function (error) {
      console.log(error);
    });
  };

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
    console.log('log out');
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  async function getProfile() {
    const currentProfile = auth.currentUser.uid;
    const q = query(collection(db, 'accounts'), where('uid', '==', currentProfile));

    const querySnapshot = await getDocs(q);
    const res = [];

    querySnapshot.forEach((doc) => {
      res.push(doc.data());
    });
    setProfile(res[0]);
    return res[0];
  }

  useEffect(() => {
    setLoading(false);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        getProfile();
        // ...
      } else {
        setCurrentUser();
      }
    });
  }, []);

  const value = {
    profile,
    loading,
    setUsername,
    test: 'test2',
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
