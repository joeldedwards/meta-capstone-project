import React from 'react'

function Login() {
  return (
    <div id="Login">
        <div className="container">
            <form action="">
                <fieldset>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" />
                </fieldset>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login