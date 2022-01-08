import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Components/Login/Firebase/Firebase.init';


initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();


    const createUser = ({ email, password }) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                setUser(user)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const errormsg = { errorCode, errorMessage };
                setError(errormsg)
            });
    }


    return ({
        user,
        error,
        createUser
    });
};

export default UseFirebase;