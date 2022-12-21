import React, { useState,useEffect } from 'react'
import './form.css'

export default function Form({show, setShow, setLoginShow}) {
  const [myValues, setMyValues] = useState({name: '', email:'', password: ''})
  const [helloName, setHelloName] = useState('')

  const onChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    setMyValues({
      ...myValues,
      [name]: value
    })
  }
  useEffect(() => {
    console.log(myValues);
  }, [myValues])
  
  const onSubmit = (e)=> {
    e.preventDefault()
    setMyValues({name: '', email:'', password: ''})
    setShow(false)
    setHelloName(myValues.name)
    setLoginShow(false)
  }

  return (
      <div className='form'>
        {
          show && (
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor=""></label>
                <input name='name' type="text" value={myValues.name} onChange={onChange} placeholder='Name' />
              </div>
              <div>
                <label htmlFor=""></label>
                <input name='email' type="email" value={myValues.email} onChange={onChange}placeholder='Email' />
              </div>
              <div>
                <label htmlFor=""></label>
                <input name='password' type="password" value={myValues.password} onChange={onChange} placeholder='Password' />
              </div>
              <button  disabled={false} type='submit' >Submit</button>
            </form>
          )
        }
        {
          helloName && (
            <div className='welcome'>
              <p>Welcome: {helloName}</p>
            </div>
          )
        }
      </div>
  )
}
