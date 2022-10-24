import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "./../../firebase/firebase.init";
firebaseInitialization();

//Providers
const googleProvider = new GoogleAuthProvider();

const auth = getAuth();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    //google signin
    function signInWithGoogle() {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user);
            }).catch(error => {
                setError(error.message);
            })
    }

    //get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
            if (signedInUser) {
                setUser(signedInUser);
            }
        });
        return () => unsubscribe;
    }, []);


    //sign out
    function logOut() {
        signOut(auth).then((res) => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        });
    }
    return {
        signInWithGoogle,
        user,
        error,
        logOut
    };
};

export default useFirebase;