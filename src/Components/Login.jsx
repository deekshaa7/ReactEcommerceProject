import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../UserContext";
 // Ensure the path is correct

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

const Login = () => {
  const [email, setEmail] = useState("");
  const [upassword, setPassword] = useState("");
  const { setDetail } = useContext(LoginContext);
  const myNav = useNavigate();

  const loginCheck = () => {
    let url = `http://localhost:3000/signup/?email=${email}`;
    axios.get(url).then((res) => {
      if (res.data.length === 0) {
        alert("Invalid User Id");
      } else {
        if (res.data[0].password !== upassword) {
          alert("Invalid Password");
        } else {
          setDetail(res.data[0].name, res.data[0].email);
          myNav("/profile");
        }
      }
    });
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBInput wrapperClass='mb-2' label='Email address' id='form1' type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
      <MDBInput wrapperClass='mb-2' label='Password' id='form2' type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>
      <MDBBtn className="mb-4" onClick={loginCheck}>Sign in</MDBBtn>
      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>
        <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm" />
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm" />
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm" />
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default Login;
