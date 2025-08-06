import { useState } from 'react'
import './App.css'

function App() {

  let [inputValue, setInputValue] = useState('');
  let [inputEmpty,setInputEmpty]=useState('');
  let [addButtonDisable, setAddButtonDisable] = useState(true)
  let [todos, setTodos] = useState([])

  return (
    <>
      <h1 className='text-4xl sm:text-5xl font-bold mt-5 mb-4 text-white text-center'>Todo App</h1>
      <p className="text-lg text-white  text-center">Stay organized and get things done   </p>
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-3">
          <div className="flex-1 rounded-lg bg-neutral-200 shadow-sm todo-card my-6 p-5 text-center">
            <p className="text-2xl font-bold text-sky-400" id="activeTask">0</p>
            <p className="card-title">Active Tasks</p>
          </div>
          <div className="flex-1 rounded-lg bg-neutral-200 shadow-sm todo-card my-6 p-5 text-center">
            <p className="text-2xl font-bold text-green-500" id="completedTask">0</p>
            <p className="card-title">Completed</p>
          </div>
        </div>

        <div className="rounded-lg border-0 bg-neutral-200 p-5 group shadow-sm todo-card my-6">
          <div className="flex gap-3 ">
            <input type="text" name="userInput" id="userInput" value={inputEmpty} placeholder="Add a new task..." className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  md:text-sm flex-1 bg-secondary border-border"
              onChange={(event) => {
                if (event.target.value) {
                  setAddButtonDisable(false)
                  setInputValue(event.target.value);
                  setInputEmpty(event.target.value)
                } else {
                  setAddButtonDisable(true)
                }
              }}
            />


            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-3xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  bg-sky-400 text-white hover:bg-sky-600 h-10 px-4 py-2 todo-button-sky-400 disabled:opacity-20" id="plusBtn" disabled={addButtonDisable}

              onClick={() => {
                setTodos([...todos, inputValue]);
                setInputEmpty('')
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 my-4">

          <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#00bcff] h-9 todo-card rounded-md px-3 data-[active=true]:bg-[#00bcff]
    data-[active=true]:text-[#fff] data-[active=true]:[&_svg]:stroke-[#fff] " id="allFilterBtn" data-active="true">
            <svg width="24" height="24" className="lucide lucide-rocket text-cyan-500 dark:text-cyan-400" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#00bcff" fill="none">
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
            All
          </button>
          <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#60A5FA] h-9 todo-card rounded-md px-3 data-[active=true]:bg-[#60A5FA] data-[active=true]:text-[#fff] data-[active=true]:[&_svg]:stroke-[#fff]" id="activeFilterBtn" data-active="false">
            <svg className="lucide lucide-newspaper text-blue-400 dark:text-blue-600" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#60A5FA" fill="none" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
              <path d="M18 14h-8"></path>
              <path d="M15 18h-5"></path>
              <path d="M10 6h8v4h-8V6Z"></path>
            </svg>
            Active
          </button>
          <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#00c951] h-9 todo-card rounded-md px-3 data-[active=true]:bg-[#00c951] data-[active=true]:text-[#fff] data-[active=true]:[&_svg]:stroke-[#fff] " id="completedFilterBtn" data-active="false">

            <svg width="24" height="24" className="lucide lucide-rocket text-cyan-500 dark:text-cyan-400" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#00c951" fill="none">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Completed
          </button>
        </div>

        {/* <div className="rounded-lg border bg-neutral-300 bg-opacity-5 shadow-sm todo-card text-center py-12 px-4 data-[listempty=true]:block data-[listempty=false]:hidden" id="noTaskCard" data-listempty="true">
          No tasks yet. Add one above!
        </div> */}
        <div className="flex flex-col gap-2 shadow-sm todo-fade-in" id="taskWrap">
         {
          todos.map((element,index)=>(
            <div className="flex items-center border rounded-lg bg-neutral-200 todo-card gap-3 py-3 px-3 todoItem" list_id={index} data-status="active"> <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-green-400 h-9 rounded-md p-1 hover:text-white" id="completeTask"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle h-5 w-5">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          </button>
            <div className="flex-1" id="updateWraper">
              <div className="text-left" id="listText">
                {element}
              </div>
            </div>
            <div className="flex gap-1" id="editDeleteBtn">

              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium px-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-sky-400 h-9 rounded-md p-1  hover:text-white" id="editTask">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pen-line h-4 w-4">
                  <path d="M12 20h9"></path>
                  <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z">
                  </path>
                </svg></button>

              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium  px-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-accent h-9 rounded-md p-1 text-muted-foreground hover:bg-red-400 hover:text-white " id="deleteTask">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2 h-4 w-4">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" x2="10" y1="11" y2="17"></line>
                  <line x1="14" x2="14" y1="11" y2="17"></line>
                </svg></button>
            </div>
            </div>
          ))
         }
        </div>
      </div>
    </>
  )
}

export default App
