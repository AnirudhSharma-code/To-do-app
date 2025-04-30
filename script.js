const inputbox=document.getElementById("textbar");
const taskcontainer=document.querySelector(".task-container");
document.getElementById('button').addEventListener('click',()=>{
    if(inputbox.value === ""){
        alert("you must write something ");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value;
        taskcontainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
})

taskcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    savedata();
},false)
function savedata(){
    localStorage.setItem("data",taskcontainer.innerHTML);
}
function showdata(){
    taskcontainer.innerHTML=localStorage.getItem("data");
}
showdata();