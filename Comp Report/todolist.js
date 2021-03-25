//variable initialization
var taskText="";

var todo=document.getElementById('todo');

//array for todo list
var todoList=[];

//task object constructor
function task(text, iscompleted){
    this.text=text;
    this.iscompleted=iscompleted;
}

//add the task to the todo list
function addTask(){
    taskText=document.getElementById('taskText').value;
    if(taskText !=null){
        taskText=taskText.toUpperCase();
        todoList.push(taskText);
        document.getElementById('taskText').value="";
        arrayDisplay();
    }
}

//display the todo list
function arrayDisplay(){
    //clear tasks
    todoList.innerHTML="";
    //loop through each task and display
    for(i=0;i<todoList.length;i++){
        todoList.innerHTML +=
            `<div class="task">
        <p>Task:${todoList[i]}</p>
        <div class="trash">
            <i onclick="deleteItem($[i])" class="fas fa-trash-alt trashcan"></i>
        </div>`;
    }
}

//array delete
function deleteItem(index){
    //get the text
    taskText=document.getElementById("taskText").value;
    //check if text is null and capitalize it
    if(taskText !=null){
        taskText=taskText.toUpperCase();
    }
    //create new object
    var newTask=new task(taskText);
    //log new task
    console.log(newTask);
    //add the object to the todo array
    todoList.push(newTask);
    //clear form
    document.getElementById("taskText").value="";

    //call display function
    displayObjects();
}

//delete item from list
function deleteobject(index){
    todoList.splice(index, 1)
    displayObjects()
}

//Mark task completed
function markCompleted(index){
    if(todoList[index].iscompleted==true){
        todoList[index].iscompleted==false
    }
    else{
        todoList[index].iscompleted=true;
    }
    displayObjects()
}
