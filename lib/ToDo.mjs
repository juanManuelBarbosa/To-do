//consultar via objetos y metodos 
import performer from "/lib/request.mjs";


export class Todo {
    static async all(){
        let todos = await performer({
                type: 'listAll'
            });
            console.log(todos)
            return todos.map( todoJSON => new Todo(todoJSON) )
    }
    
    constructor(args){
        this.userId = args.userId;
        this.title = args.title;
        this.completed = args.completed;
        this.id = args.id
    }

    
}