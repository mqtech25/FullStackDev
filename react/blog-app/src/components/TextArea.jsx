import React from 'react'

function TextArea({onChangeFun,value,placeholder,reqInput}) {
  return (
    <textarea className='bg-slate-100 py-2 px-3 w-full outline-none ring ring-slate-300 rounded-sm' value={value} placeholder={placeholder} rows={4} onChange={onChangeFun} required={reqInput} >
        </textarea>

  )
}

export default TextArea