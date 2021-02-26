const addform = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchbar = document.querySelector('.search input');



// adding todos
const generateTemplate = (inputText)=>{
    const html = ` 
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputText}</span>
            <img src="fontawesome/fontawesome/svgs/solid/trash.svg" alt="" class="delete">
        </li>
    `
    list.innerHTML += html;
}

const pattern = /^[a-zA-Z]$/;

addform.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addform.add.value.trim().toLowerCase();
    if(todo.length && pattern.test(todo)){
        generateTemplate(todo);
        addform.reset();
    }
})

// deleting todos
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

// searching todos

const searchTodos = (term)=>{
    Array.from(list.children)
        .filter(child => !child.textContent.toLowerCase().includes(term))
        .forEach(child => child.classList.add('filtered'));

    Array.from(list.children)
    .filter(child => child.textContent.toLowerCase().includes(term))
    .forEach(child => child.classList.remove('filtered'));
};

searchbar.addEventListener('keyup', e =>{

    const term = searchbar.value.trim().toLowerCase();
    searchTodos(term);
})