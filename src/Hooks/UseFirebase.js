import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import initializeAuthentication from '../Components/Login/Firebase/Firebase.init';


initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const [value, setValue] = React.useState(0);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const createUser = ({ email, password, name, history }) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newDestination = '/';
                history.replace(newDestination);
                const user = userCredential.user;
                const newUser = { email, displayName: name };
                setUser(newUser)

                saveUser(email, name, 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });

                setError('')
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    };

    const loginUser = ({ email, password, location, history }) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newDestination = location?.state?.from || '/';
                history.replace(newDestination);
                const user = userCredential.user;
                setUser(user)
                setError('')
            })
            .catch((error) => {

                setError(error.message);

            }).finally(() => setIsLoading(false));
    };

    const googleSignIn = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const newDestination = location?.state?.from || '/';
                history.replace(newDestination);
                const user = result.user;
                setUser(user)
                saveUser(user.email, user.displayName, 'PUT')
                setError('')
            }).catch((error) => {
                setError(error.message);

            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, []);

    const handleRating = ({ Name, review, rating }) => {
        const values = { Name, review, rating };
        fetch('https://dry-hollows-72773.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId !== '') {
                    alert('success')
                }
            })
    }

    useEffect(() => {
        fetch(`https://dry-hollows-72773.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://dry-hollows-72773.herokuapp.com/users', {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }


    return ({
        user,
        error,
        admin,
        token,
        createUser,
        loginUser,
        googleSignIn,
        logOut,
        isLoading,
        value,
        setValue,
        handleRating

    });
};

export default UseFirebase;