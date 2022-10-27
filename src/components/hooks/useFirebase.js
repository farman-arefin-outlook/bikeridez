import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "./../../firebase/firebase.init";
firebaseInitialization();

//Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const emailProvider = new signInWithEmailAndPassword();
const auth = getAuth();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");

    //google signin
    function signInWithGoogle() {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user);
            }).catch(error => {
                setError(error.message);
            })
    }

    //github signin
    function signInWithGithub() {
        signInWithPopup(auth, githubProvider)
            .then(res => {
                setUser(res.user);
            }).catch(error => {
                setError(error.message);
            })
    }

    //signin with email and password

    function signInWithEmail(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
            .then(res => {
                setUser(res.user);
            }).catch(error => {
                setError(error.message);
            })
    }

    //get email
    function getEmail(e) {
        setEmail(e?.target?.value);
    }
    //get name

    function getName(e) {
        setName(e?.target?.value);
    }
    //get photo

    function getPhoto(e) {
        setPhoto(e?.target?.value);
    }
    //get password
    function getPassword(e) {
        setPassword(e?.target?.value);
    }

    //set name and profile image url
    function setNameAndImage() {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
            setError(error.message);
        });
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

    //sign up with email and password

    function signUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setNameAndImage();
                alert('User has been created')
            }).catch(error => {
                setError(error.message);
            })
    }
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
        signInWithGithub,
        signInWithEmail,
        user,
        setUser,
        error,
        setError,
        logOut,
        signUp,
        getPassword,
        getEmail,
        getPhoto
    };
};

export default useFirebase;