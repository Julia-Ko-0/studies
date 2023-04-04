(function (){
    let heading = document.createElement('h1')
    heading.innerHTML = 'TODO'
    heading.className = 'TODO'
    let  title = document.createElement('h2')
    


    
    function createAppTitle(name_title){
        title.textContent = name_title
        title.className = 'title'
        return title
    }

    function createTodoItemForm(){
        
        let input = document.createElement('input')
        input.className = 'input'
        let btn = document.createElement('button')
        btn.textContent = 'Добавить задачу'
        btn.className = 'btn'

        
        form.append(input)
        form.append(btn)

        return {
            form,
            input,
            btn
        }

    }
    function createTodoList(){
        let list = document.createElement('ul')
        
        return list;
    }

    function createTodoItem(elem){
        let li =  document.createElement('li')
        li.textContent = elem 

        let btn_Done = document.createElement('button')
        btn_Done.className = 'btn'
        btn_Done.textContent =  'Готово'
        let btn_Delete = document.createElement('button')
        btn_Delete.className = 'btn'
        btn_Delete.textContent = 'Удалить'
        li.append(btn_Delete)
        li.append(btn_Done)

        
        return {
            btn_Delete,
            btn_Done,
            li
        }
    }




    function appSpisok(name){
        document.addEventListener('DOMContentLoaded', function (){
            let container = document.getElementById('container')
            let TodoItemForm = createTodoItemForm()
            let list = createTodoList()

            TodoItemForm.form.addEventListener('submit', function(e){
                e.preventDefault(); 
                let  todoItem = createTodoItem(TodoItemForm.input.value)
                todoItem.doneButton.addEventListener('click',function (){
                    todoItem.item.classList.toggle('list-group-item-success');
                });
                todoItem.deleteButton.addEventListener('click', function (){
                    if (confirm('Вы уверены?')) {
                        todoItem.item.remove();
                    }
                });

                list.append(todoItem.li)
                todoItemForm.input.value = '';

            })
            container.append(heading)
            container.append(createAppTitle(name))
            container.append(TodoItemForm)
            container.append(list)
            


        })
    }
    appSpisok('мой')
})()