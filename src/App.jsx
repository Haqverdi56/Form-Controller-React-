import React from 'react';
import { useState } from 'react';
import FormLogin from './Components/Form/FormLogin'
import Header from './Components/Form/Header'

function App() {
  const [show, setShow] = useState(false)
  const [loginShow, setLoginShow] = useState(true)
  

  return (
    <>
    <div>
      <Header loginShow={loginShow} show={show} setShow={setShow} />
      <FormLogin setLoginShow={setLoginShow} show={show} setShow={setShow} />
    </div>
    </>
  );
}

export default App;
