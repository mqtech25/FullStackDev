import React from 'react'

function Inputs({onChangeFun,value,type,placeholder,reqInput}) {
  return (
    <input type={type} className='bg-slate-100 py-2 px-3 w-full outline-none ring ring-slate-300 rounded-sm' value={value} placeholder={placeholder} onChange={onChangeFun} required={reqInput} />
  )
}

export default Inputs