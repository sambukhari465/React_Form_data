import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleForm(e) {
    e.preventDefault();

    const userData = {
      userId: userId,
      userPassword: userPassword,
    };

    axios.post("http://localhost:4500/postForm", userData)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1>User Login Form</h1>
      <form onSubmit={handleForm}>
        <input type="text" name='userId' onChange={e => setUserId(e.target.value)} /><br />
        <input type="password" name='password' onChange={e => setUserPassword(e.target.value)} /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
