import React from 'react'
import { useState } from 'react'
const[email,setEmail]=useState('')
function Login() {
  return (
    <div>
        <div>
            <div>
                <h1>
                    User Login
                </h1>
            </div>

            <div>
            <form>

                <div><input type="text" required value={email} /></div>
                <div><button type='Submit'>Login</button></div>
            </form>

            </div>
        </div>
    </div>
  )
}

export default Login