import React, { useState } from "react";


const UserContext= React.createContext();

function UserProvider({children}) {

    const [showLogInForm, setStateOfLoginForm]= useState(false);
    const [showSignUpForm, setStateOfSignUpForm]= useState(false);
    const [isAuthenticated, setAuthenticated]= useState(false);

    const [user, set_user]= useState(null);
    const [token, set_token]= useState(null);

    const username= user?.name;
    const firstLetterOfUsername= username?.[0];

    function save_user_and_token(user, token) {
        set_user(user);
        set_token(token);
    }

    function set_loginform_state(val) {
   
        setStateOfLoginForm((old) => {
            if(val) {
                return val;
            } else {
                return !old;
            }
        });
    }

    function set_signupform_state(val) {

        setStateOfSignUpForm((old) => {
            if(val) {
                return val;
            } else {
                return !old;
            }
            
        });
    }
    return (
        <UserContext.Provider value={{showLogInForm, showSignUpForm, isAuthenticated, setAuthenticated, setStateOfLoginForm, 
            setStateOfSignUpForm, user, token, set_user, set_token, save_user_and_token, set_loginform_state, 
            set_signupform_state, username, firstLetterOfUsername}}>
            {children}
        </UserContext.Provider>
    )
}
export {UserContext, UserProvider};