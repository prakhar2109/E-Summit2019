import React from "react";

export default class AuthService extends React.Component{
    hasToken(){    
    }
    getToken(){
        return localStorage.getItem('ca_auth_token')
    }
    setToken(token){
        localStorage.setItem('ca_auth_token',token)
    }
    logout(){
        return localStorage.removeItem('ca_auth_token')
    }
}