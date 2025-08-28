import React from 'react'
import Inputs from '../components/Inputs'
import HeadingCP from '../components/HeadingCP'
import TextArea from '../components/TextArea'
import FormButton from '../components/FormButton'

function CreateBlog() {
  return (
    <main className='bg-neutral-100/50 w-full h-screen flex flex-col justify-center items-center'>
      <div className="flex flex-col gap-6 rounded-md w-lg bg-white shadow-lg p-5 text-center">
                <HeadingCP text={"Blog"}/>
          <Inputs type={"text"} onChangeFun={()=>{}} placeholder={'Title...'} value={""} reqInput={false} />
          <TextArea placeholder={"Description"} value={""} onChangeFun={()=>{}} reqInput={true} />

          <FormButton text={"Post"}/>
        </div>
  </main>
  )
}

export default CreateBlog