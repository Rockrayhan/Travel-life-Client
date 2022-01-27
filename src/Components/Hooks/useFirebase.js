import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import authInit from "../Firebase/firebase.init";
authInit();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)



    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)

            })
            .finally(() => setIsLoading(false))
    }




    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
         
            .then((userCredential) => {
                const newUser = { email, displayName: name };
            // send authentication link in email =========================
        //  updateProfile(auth.currentUser, {
        //     displayName: "User"
        // })
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
            //   =========================
                setUser(newUser);
                // save user to db 
                // saveUser(email, name) ;
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');

                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => setIsLoading(false));
    }


    // user observer 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        googleSignIn,
        isLoading,
        logOut,
        registerUser,

    }
};

export default useFirebase;