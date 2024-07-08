import React,{useState} from "react";
import {LoginForm} from "../../components/login/Login.comp";
import { Button } from 'react-bootstrap';
import {ResetPassword} from "../../components/password-reset/PasswordReset.comp";
import "./entry.style.css";

export const Entry=  () => {

    const [email, setemail]= useState('')
     const [password, setpassword]= useState('')
     const [frmLoad, setFrmLoad] = useState("login");

     const handleOnChange = (e) =>{
        const{name, value} = e.target

        switch(name){
            case 'email':
                setemail(value);
                break;

                case 'password':
                setpassword(value);
                break;

                default:
                    break;
   
        }

     };

     const handleOnSubmit = (e) => {

        e.preventDefault();

        if(!email || !password){
           return  alert('Please fill all the fields');
        }

        console.log(email,password);
     };

     const handleOnResetSubmit = (e) => {

      e.preventDefault();

      if(!email ){
         return  alert('Please enter the email');
      }

      console.log(email);
   };
     
     const formSwitcher = frmType => {
        setFrmLoad(frmType);
     };





    return<div className="p-5 mb-4 bg-light rounded-3 shadow">
      {frmLoad=='login' && <LoginForm 
   handleOnChange={handleOnChange}    
   handleOnSubmit={handleOnSubmit}
   formSwitcher={formSwitcher}
    email={email}
    pass={password}/>}

   {frmLoad == "rest" &&<ResetPassword
    
    handleOnChange={handleOnChange}    
    handleOnResetSubmit={handleOnResetSubmit}
    formSwitcher={formSwitcher}
    email={email}/>}
    
    </div>
      
     
};
