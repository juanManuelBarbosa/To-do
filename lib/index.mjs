//Control del DOM 
import { Todo } from "/lib/ToDo.mjs"

window.addEventListener("load", (e)=>{
    
    let container = document.querySelector("#root ul")
    //Todo.all => retorna los todos del servicio web
    Todo.all().then(todo =>{
        //iteramos todos los todos
        
        todo.forEach(todo =>{
            
            let node = buildDOMElement(todo);
            container.prepend(node)
           })
    });

    let buildDOMElement = (todo) => {
        
        let li = document.createElement("li");
        li.innerHTML=`
        <h1>${todo.title}</h1>
        `;

        return li;
    }
})