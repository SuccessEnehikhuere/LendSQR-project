import React from 'react'
import logo from '../assets/Group.svg'
import img from '../assets/pablo-sign-in 1.svg'

const Auth = () => {
  return (
    <main className="container">
      <div className="img-container">
        <div>
          <img src={logo} className="img-logo" />
        </div>
        <div>
          <img src={img} className="img-main" />
        </div>
      </div>

      <div className="form-container">
        <form>
          <h1>welcome!</h1>
          <h5>Enter details to login.</h5>
          <input placeholder="Email" className="input-email" />
          <input placeholder="Password" className="input-password" />
          <h4>FORGET PASSWORD?</h4>
          <button>log in</button>
        </form>
      </div>
    </main>
  )
}

export default Auth
