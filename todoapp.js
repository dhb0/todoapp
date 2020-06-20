//UI variables

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#tasklist');

form.addEventListener('submit', addNewItem);
btnDeleteAll.addEventListener('click', deleteAll);
taskList.addEventListener('click',deleteItem);
taskList.addEventListener('click', takeUp);
taskList.addEventListener('click',takeDown);
taskList.addEventListener('click',editItem);


var listArr = [];

function addNewItem(e){
    e.preventDefault();
    if(input.value == ''){
        alert('You should type a task');
        return;
    }

    listArr.unshift(input.value);
    bindArray();
    input.value='';
    
}

/* function bindArray(){
    taskList.innerHTML = '';
    for(let i = 0; i<listArr.length; i++){
    
    taskList.innerHTML += `<li class="list-group-item list-group-item-secondary">${listArr[i]}<a href="#" class="delete-item float-right"><i class="fas fa-times"></i></a><a class="edit-item float-right mr-3" href="#"><i class="far fa-edit"></i></a><a class="mr-3 float-right" href="#"><i class="fas fa-arrow-alt-circle-down"></i></a><a class="mr-3 float-right" href="#"><i class="fas fa-arrow-alt-circle-up"></i></li>`;
    }
} */

function bindArray(){
    taskList.innerHTML='';
    for(let i = 0; i<listArr.length; i++){
        var li = document.createElement('li');
        li.className = 'list-group-item list-group-item-secondary';
        var a1 = document.createElement('a');
        a1.setAttribute('href','#');
        a1.className = 'delete-item float-right';
        a1.innerHTML = '<i class="fas fa-times"></i>';
        var a2 = document.createElement('a');
        a2.setAttribute('href','#');
        a2.className = 'edit-item float-right mr-3';
        a2.innerHTML = '<i class="far fa-edit"></i>';
        var a3 = document.createElement('a');
        a3.setAttribute('href', '#');
        a3.className = 'mr-3 float-right';
        a3.innerHTML = '<i class="fas fa-arrow-alt-circle-down"></i>';
        var a4 = document.createElement('a');
        a4.className = 'mr-3 float-right';
        a4.setAttribute('href','#');
        a4.innerHTML = '<i class="fas fa-arrow-alt-circle-up">';
        li.appendChild(a1);
        li.appendChild(a2);
        li.appendChild(a3);
        li.appendChild(a4);
        li.appendChild(document.createTextNode(listArr[i]));
        taskList.appendChild(li);
    }
}


function deleteAll(e){
    if(taskList.innerHTML == ''){
        return;
    }

    if(confirm('Are you sure?')){
    taskList.innerHTML='';
    listArr = [];
    }
    bindArray();
 
    e.preventDefault();
 }

 function deleteItem(e){
    if(e.target.className == 'fas fa-times'){
        var str = e.target.parentElement.parentElement.textContent;
        var findIndex = listArr.indexOf(str);
        listArr.splice(findIndex, 1);
        bindArray();
    }
    
    
    e.preventDefault();
}

function takeUp(e){
    
    if(e.target.className=="fas fa-arrow-alt-circle-up"){
        var str = e.target.parentElement.parentElement.textContent;
        var findIndex = listArr.indexOf(str);
        if(findIndex==0){
            return;
        }
        var frst = listArr[findIndex];
        var scnd = listArr[findIndex-1];
        listArr[findIndex] = scnd;
        listArr[findIndex-1] = frst;
        bindArray();
        }
    
    
    e.preventDefault();
    }

function takeDown(e){
    
        if(e.target.className=="fas fa-arrow-alt-circle-down"){
            var str = e.target.parentElement.parentElement.textContent;
            var findIndex = listArr.indexOf(str);
            if(findIndex==listArr.length-1){
                return;
            }
            var frst = listArr[findIndex];
            var scnd = listArr[findIndex+1];
            listArr[findIndex] = scnd;
            listArr[findIndex+1] = frst;
            bindArray();
            }
        
        
        e.preventDefault();
    }

function editItem(e){
    if(e.target.className == 'far fa-edit'){
        var str = e.target.parentElement.parentElement.textContent;
        var findIndex = listArr.indexOf(str);
        let prnt = e.target.parentElement.parentElement;
        let txt = prnt.textContent;
        var input = document.createElement('INPUT');
        input.setAttribute('type','text');
        input.setAttribute('id', 'editinput');
        input.setAttribute('value',txt);
        prnt.appendChild(input);
        var x = prnt.childNodes[4];
        prnt.removeChild(x);
        input.addEventListener('keydown',function(e){
            if(13==e.keyCode){
                listArr[findIndex]=input.value;
                bindArray();
            }
        })
        
        
    }

    e.preventDefault();
}
    


 
