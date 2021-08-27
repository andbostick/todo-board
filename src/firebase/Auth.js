import React from 'react'
import  StyledFirebaseAuth  from 'react-firebaseui/StyledFirebaseAuth'
import firebase from './clientApp'


const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
    return (
        <div>
            <h1>Login</h1>
            <p>please sign-in</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}

export default SignInScreen;