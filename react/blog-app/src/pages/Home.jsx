import React from 'react'
import Inputs from '../components/Inputs'
import BlogCard from '../components/BlogCard'

function Home() {
  return (
    <>
      <main className='bg-neutral-100/50 w-full h-full'>
        <div className="container m-auto">
            <div className="searchBar max-w-xl mx-auto py-6">
              <Inputs type={"text"} onChangeFun={()=>{}} placeholder={'Search Blog...'} value={""} reqInput={false} />
            </div>
            <div className="flex flex-wrap justify-center gap-5 py-12">
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
            </div>
        </div>
      </main>
    </>
  )
}

export default Home