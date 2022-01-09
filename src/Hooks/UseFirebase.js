import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeAuthentication from '../Components/Login/Firebase/Firebase.init';


initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const createUser = ({ email, password }) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                setUser(user)
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    };

    const loginUser = ({ email, password }) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                setError('')
            })
            .catch((error) => {

                setError(error.message);

            }).finally(() => setIsLoading(false));
    };

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                setError('')
            }).catch((error) => {
                setError(error.message);

            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, []);

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return ({
        user,
        error,
        createUser,
        loginUser,
        googleSignIn,
        logOut,
        isLoading,
    });
};

export default UseFirebase;