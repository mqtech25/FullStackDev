let userInput = document.getElementById('userInput')
let plusBtn = document.getElementById('plusBtn')
let noTask = document.getElementById('noTaskCard')
let taskWrap = document.getElementById('taskWrap')
let statesCardWrapper = document.getElementById('statesCardWrapper')


userInput.addEventListener('input',()=>{
    
   if(userInput.value !=''){
    plusBtn.removeAttribute('disabled')
   }else{
    plusBtn.setAttribute('disabled','true')
   }

})

plusBtn.addEventListener('click',()=>{
   
    if(userInput.value){
        let todoListItem = document.createElement('div');
        todoListItem.className='flex items-center border rounded-lg bg-neutral-200 todo-card gap-3';
        todoListItem.innerHTML=` <button
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-green-400 h-9 rounded-md p-1 hover:text-white" id='completeTask'><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-circle h-5 w-5">
            <circle cx="12" cy="12" r="10"></circle>
        </svg>
    </button>
    <div class="flex-1">
        <div class="text-left ">${userInput.value}</div>
    </div>
    <div class="flex gap-1">
    
        <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium px-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-sky-400 h-9 rounded-md p-1  hover:text-white" id='editTask'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-pen-line h-4 w-4">
                <path d="M12 20h9"></path>
                <path
                    d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z">
                </path>
            </svg></button>
    
        <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium  px-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-accent h-9 rounded-md p-1 text-muted-foreground hover:bg-red-400 hover:text-white " id='deleteTask'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-trash2 h-4 w-4">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" x2="10" y1="11" y2="17"></line>
                <line x1="14" x2="14" y1="11" y2="17"></line>
            </svg></button>
    </div>`;

   
let successCard = document.createElement('li');
successCard.className = 'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full border bg-green-200  text-black data-[state=closed]:opacity-0';
successCard.setAttribute('id','successCard');
successCard.setAttribute('data-state','open');
successCard.setAttribute('data-swipe-direction','right');
successCard.innerHTML =`

<div class="grid gap-1">
<div class="text-sm font-semibold">Task added!</div>
<div class="text-sm opacity-90">Your new task has been created.</div>
</div>`;

let deleteCard = document.createElement('li');
deleteCard.className = 'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full border bg-red-400  text-white data-[state=closed]:opacity-0';
deleteCard.setAttribute('id','deleteCard')
deleteCard.setAttribute('data-state','open')
deleteCard.setAttribute('data-swipe-direction','right');
deleteCard.innerHTML =`

<div class="grid gap-1">
<div class="text-sm font-semibold">Task Deleted!</div>
<div class="text-sm opacity-90">Your task has been Deleted.</div>
</div>`;

    
    noTask.setAttribute('data-listempty','false');
    taskWrap.append(todoListItem);
    statesCardWrapper.append(successCard)
    setTimeout(()=>{
        successCard.setAttribute('data-state','closed');
        statesCardWrapper.innerHTML =''
    },5000)
    
    userInput.value=""
    plusBtn.setAttribute('disabled','true')

    let deleteBtn = todoListItem.querySelector('#deleteTask');

        deleteBtn.addEventListener('click',()=>{
            todoListItem.remove();
            statesCardWrapper.append(deleteCard);

            setTimeout(()=>{
                deleteCard.setAttribute('data-state','closed');
                statesCardWrapper.innerHTML =''
            },5000)
        })


    }


})