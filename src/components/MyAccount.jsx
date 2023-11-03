import React from 'react'
import Login from './Login'

function MyAccount() {
  return (
    <>
        <section id="MyAccount">
            <div className="banner-shape-area">
                <span className="shape"></span>
                <span className="shape"></span>
                <span className="shape"></span>
            </div>
            <h1>My Account</h1>
        </section>
        <Login />
    </>
  )
}

export default MyAccount