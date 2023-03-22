//Control del DOM 

import { Todo } from "/lib/ToDo.mjs"

window.addEventListener("load", (e)=>{
    
    let container = document.querySelector("#root ul")
    //Todo.all => retorna los todos del servicio web
    Todo.all().then(todo =>{
        //iteramos todos los todos
        
        todo.forEach(todo =>{
            
            let node = buildDOMElement(todo);
            container.prepend(node);
            editInPlace(node.querySelector('h1'),todo);
           })
    });

    let buildDOMElement = (todo) => {
        
        let li = document.createElement("li");
        li.innerHTML=`
        <h1>${todo.title}</h1>
        <button class ="close" >X</button>
        `;

        li.querySelector(".close").addEventListener("click", (e)=>{
            todo.destroy();
            li.remove();
        })
       
        return li;
    }



    let editInPlace = (node,todo)=>{

   
        node.addEventListener("click", (e)=>{
            //reemplazar el nodo por un campo de texto

            let inputText = document.createElement("textarea");
            inputText.value = node.innerHTML;
            inputText.autofocus = true;
            node.replaceWith(inputText);

            inputText.addEventListener("change", (ev)=>{
                inputText.replaceWith(node);
                todo.title = inputText.value;

                node.innerHTML = todo.title

                todo.save().then(r=>console.log(r))
            });

            //al finalizar la edicion : reemplazar el campo de texto por un nodo
        })

    }


})