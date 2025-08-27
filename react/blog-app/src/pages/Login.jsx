import React, { useState } from 'react'
import HeadingCP from '../components/HeadingCP'
import Inputs from '../components/Inputs'
import FormButton from '../components/FormButton'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  return (
    <>
        <div className="w-full h-screen bg-slate-200 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-6 rounded-md w-lg bg-white shadow-md p-5 text-center">
                <HeadingCP text={"Login"}/>
                <Inputs type={'email'} value={email}   placeholder={'john@gmail.com'} reqInput={true} onChangeFun={(e)=>{
                     setEmail(e.target.value);
                }}/>
                <Inputs type={'password'} value={password}   placeholder={'*******'} reqInput={true} onChangeFun={(e)=>{
                     setPassword(e.target.value);
                }}/>
               <FormButton onClickFun={()=>{}} text={'Login'}/>
            </div>
        </div>
    </>
  )
}

export default Login