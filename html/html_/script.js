(function(){
    function createAppTitle(name_title){
        let title = document.createElement("h2")
        title.innerHTML = name_title
        return title

    }
    function createTodoItemForm(){
        let form = document.createElement('form')
        let input = document.createElement('input')
        let button = document.createElement('button')

        input.placeholder = 'Введите новое дело'
        button.textContent = 'Добавить дело'
       
        
        form.append(input);
        form.append(button);
    
        return {
            form,
            input,
            button,
        };
    }
    function createTodoList(){
        let list = document.createElement('ul')
        
        return list;
    }
    function createTodoItem(elem){
        let  item = document.createElement('li')
        
        item.textContent = elem
        return{
            item
        }
    }
    function spisokDel(name){
        document.addEventListener('DOMContentLoaded',function(){
            let todoTitle = createAppTitle(name)
            let todoItemForm = createTodoItemForm()
            let container = document.getElementById('todo')
            let todoList = createTodoList()

            container.append(todoTitle)
            container.append(todoItemForm.form)
            container.append(todoList)

            todoItemForm.form.addEventListener('submit', function(e){
                e.preventDefault();

                

                let  todoItem = createTodoItem(todoItemForm.input.value);
            

            
                
                todoList.append(todoItem.item);
                // todoList.item.remove()

            })
            
             
        })
    }
    spisokDel("Список дел 1")
    spisokDel("Список дел 2")
})()