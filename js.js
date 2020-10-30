const anadir = document.querySelector('.add');
 
anadir.addEventListener('submit', i => {
    i.preventDefault();
    const newToDo = anadir.add.value.trim();
    console.log(newToDo);
});
const list = document.querySelector('.to-dos');
const generateTemplate = toDo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
};
anadir.addEventListener('submit', i => {
    i.preventDefault();
    const newToDo = anadir.add.value.trim();
    if(newToDo.length) {
        generateTemplate(newToDo);
        anadir.reset();
    }
    
});
list.addEventListener('click', i => {
    if(i.target.classList.contains('delete')) {
        i.target.parentElement.remove();
    }
});
