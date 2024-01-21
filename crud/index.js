let container = document.querySelector('.container');
let submit = document.querySelector('.submit')
let input = document.querySelector('.text');
let ul = document.querySelector("#ul");
let index = 0;
function create(input) {
    index++;
    ul.innerHTML +=`
    <li class="list-group-item d-flex justify-content-around" id="li${index}">
        <span class="fs-5" id ="edit${index}">${input}</span>
        <span><i class="bi bi-pencil-square fs-4" onClick="editItem(${index})"></i></span>
        <i class="bi bi-trash-fill fs-4" onClick="deleteItem(${index})"></i> 
    </li>
`
}


submit.addEventListener('click',()=>{
    create(input.value) 
    input.value = "" 
});

input.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
       create(input.value);
       input.value = "" 
    }
})

function editItem(index){
    // let index = e.target.getAttribute('id')
    let text = document.getElementById('edit'+index)
    // let li = document.getElementById('li'+index)
    let update_text = prompt('Update',text?.innerText) 
    if(update_text){
        text.innerText = update_text
    }
}

function deleteItem(index) {
    // let index = e.target.getAttribute('data-id');
    let ul = document.getElementById('ul');
    let li = document.getElementById('li'+index);
    console.log('li'+index);
    if(li)
    {
        if(confirm("Are u sure want to delete this?"))
        {
            ul.removeChild(li);
        }     
    }
}


