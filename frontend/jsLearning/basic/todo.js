
let todo =[];

let requestQuery ;

do{
    requestQuery= prompt(`Enter what you want \n 'list' to show all data list \n 'add' to add data in list \n 'delete' to delete data \n 'quit' to quit process `);

    if(requestQuery == 'quit'){
        console.log('App quit');
        break
    }else  if(requestQuery == 'list'){
        console.log('**************');
        // for(taskItem of todo){
        //     console.log(taskItem);
        // }
        for(let i=0; i<todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log('**************');
    }else if(requestQuery == 'add'){
    requestQuery= prompt('Enter which you want to add');

        todo.push(requestQuery)
        console.log(todo);  
        console.log('list updated');
        alert('list updated')
    }else if(requestQuery == 'delete'){
        index = prompt('Enter which item index to remove from list');
        todo.splice(index,1)
        console.log(todo);
        console.log('list updated');
    }else{
        alert('wrong request, plz choose action from given list')
    }

}while(true)