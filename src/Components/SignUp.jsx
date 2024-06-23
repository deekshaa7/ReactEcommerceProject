import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

function SignUp() {
  const [input, setInput]=useState({});
    const myNav=useNavigate();
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
    }
    const handleSubmit=()=>{
        let url="http://localhost:3000/signup";

        axios.post(url,input).then((res)=>{
            alert("data added successfully")
            myNav("/login")
        })
    }
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBInput wrapperClass='mb-2' label='Name' id='form1' type='text' name='name' onChange={handleInput}/>
      <MDBInput wrapperClass='mb-2' label='Email address' id='form2' type='email' name='email' onChange={handleInput}/>
      <MDBInput wrapperClass='mb-2' label='Password' id='form3' type='password' name='password' onChange={handleInput}/>
      <MDBInput wrapperClass='mb-2' label='Confirm Password' id='form4' type='password' name='confirmpassword' onChange={handleInput}/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" onClick={handleSubmit}>Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
  );
}
export default SignUp;