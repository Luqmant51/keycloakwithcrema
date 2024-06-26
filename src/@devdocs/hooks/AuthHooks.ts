import {
  useFirebase,
  useFirebaseActions,
} from '@devdocs/services/auth/firebase/FirebaseAuthProvider';
import { getUserFromFirebase } from '@devdocs/helpers/AuthHelper';
import { useAuthKeycloak } from '@devdocs/services/auth/keycloack/KeycloakAuthProvider';

export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading } = useFirebase();
  return {
    isLoading,
    isAuthenticated,
    user: getUserFromFirebase(user),
  };
};

export const useAuthMethod = () => {
  const {
    logInWithEmailAndPassword,
    registerUserWithEmailAndPassword,
    logInWithPopup,
    logout,
  } = useFirebaseActions();

  return {
    logInWithEmailAndPassword,
    registerUserWithEmailAndPassword,
    logInWithPopup,
    logout,
  };
};

export const useAuthUserKeyCloack = () => {
  const { user, isAuthenticated, isLoading } = useAuthKeycloak();
  return {
    isLoading,
    isAuthenticated,
    user: user,
  };
};


/*
// For AWS Auth
import { getUserFromAWS } from '@devdocs/helpers/AuthHelper';
import {
  useAwsCognito,
  useAwsCognitoActions,
} from '@devdocs/services/auth/AWSAuthProvider';

export const useAuthUser = () => {
  const { auth, user, isAuthenticated, isLoading } = useAwsCognito();
  return {
    auth,
    isLoading,
    isAuthenticated,
    user: getUserFromAWS(user),
  };
};

export const useAuthMethod = () => {
  const { signIn, signUpCognitoUser, confirmCognitoUserSignup, logout } =
    useAwsCognitoActions();

  return {
    signIn,
    signUpCognitoUser,
    confirmCognitoUserSignup,
    logout,
  };
};*/
/*

//For Auth0
import { useAuth0 } from '@auth0/auth0-react';
import { useMemo } from 'react';
import { getUserFromAuth0 } from '@devdocs/helpers/AuthHelper';

export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return {
    isLoading,
    isAuthenticated,
    user: useMemo(() => getUserFromAuth0(user), []),
  };
};

export const useAuthMethod = () => {
  const { loginWithRedirect, logout } = useAuth0();
  return { loginWithRedirect, logout };
};
*/
