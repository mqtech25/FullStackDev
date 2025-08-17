import { useState } from 'react'
import './App.css'
import SearchInput from './components/SearchInput'
import Card from './components/card'
function App() {

  const [userInput,setUserInput]=useState('');
  const [gitApiData,setGitApiData] = useState('');
  const [loading,setLoading]= useState(false)
  const [notFound,setNotFound]=useState(false)

  const FunctionHandleInput= (e)=>{
      setUserInput(e.target.value);
  }

  const FunctionSearchInput = async(e)=>{
    setUserInput('');
 if(userInput){
  try{
    setGitApiData('')
      const fetchGitApi = await fetch (`https://api.github.com/users/${userInput}`);
      const result = await fetchGitApi.json() 
      if(fetchGitApi.status==200){
        setGitApiData(result);
      }else if(fetchGitApi.status==404){
        setNotFound(true)
      }
      }catch(error){
        console.log(error);
        setLoading(true)
      }   
  }
  }

  return (
    <>

    <h1 className='text-center mt-5 text-3xl font-bold'>
    <svg height="50" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="50" data-view-component="true" className="mx-auto octicon octicon-mark-github v-align-middle">
    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
</svg>
      Search Git User</h1>
      <p className='text-center mt-2'>
    <a href="https://github.com/mqtech25/FullStackDev/tree/main/react/github-user-profile" className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10 shadow-lg shadow-slate-500/50' target='_blank'>Open Source Git Repo</a>
  </p>
    <SearchInput inputText={userInput} FunctionHandleInput={FunctionHandleInput} FunctionSearchInput={FunctionSearchInput} />
    <Card apiData={gitApiData} loading={loading} notFound={notFound}/>
    </>
  )
}

export default App
