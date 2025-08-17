import { memo } from 'react';
import searhIcon from '../assets/search-icon.png'

function SearchInput({inputText,FunctionHandleInput,FunctionSearchInput}) {
    return(
        <div className="rounded-lg border-0   p-5 group shadow-sm hover:translate-y-[-2px]  my-6 max-w-xl mx-auto">
                <div className="flex gap-3 ">
                    <input type="text" name="userInput" id="userInput" placeholder="Search User..." className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  md:text-sm flex-1 bg-white border-border" onChange={FunctionHandleInput} value={inputText} />

                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-3xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  bg-blue-300 text-white hover:bg-blue-400 h-10 px-4 py-2 todo-button-sky-400  disabled:bg-gray-300 cursor-pointer disabled:cursor-w-resize" id="searchBtn" disabled={inputText? false:true} onClick={FunctionSearchInput}>
                       <img src={searhIcon} width={25} alt="" />
                    </button>
                </div>
            </div>
    )
}

export default memo (SearchInput)