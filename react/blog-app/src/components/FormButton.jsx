import React from 'react'

function FormButton({onClickFun,text}) {
  return (
    <button className='bg-slate-300 hover:bg-slate-900 hover:text-white transition m-auto rounded-sm text-md font-medium cursor-pointer  w-24 p-2 ' onClick={onClickFun}>{text}</button>
  )
}

export default FormButton