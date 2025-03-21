import React, { useState } from 'react'

const Login = ({handleLogin}) => {

     

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-orange-500 p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} 
                required 
                className='outline-none bg-transparent border-2 border-orange-500 text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-orange-500 text-lg py-2 px-6 rounded-full mt-3 placeho0lder:text-gray-400' type="password" placeholder='Enter password'
                />
                <button className='mt-7 text-white border-none outline-none hover:bg-orange-700 font-semibold bg-orange-500 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login