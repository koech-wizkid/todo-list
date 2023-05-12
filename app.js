const contentArea = document.getElementById('content-area');
const addButton = document.getElementById('add-button');
const contentObjective = document.getElementById('content-objective');


addButton.addEventListener('click', function(e){
    // create a div and store in a variable of content

    let content = document.createElement('div')
    // create a class in the div
    content.classList.add('content-list');

    //create a list item 
    let li = document.createElement('li')
    // display the text inserted in the textarea
    li.innerText = `${contentArea.value}`;
    

    // append inside the div with the variable of content
    content.appendChild(li);

    // create Edit button
    let editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fa-solid fa-edit"></i>'; 
    editBtn.classList.add('edit-content');
    //append the class of edit 
    content.appendChild(editBtn);
    
    
    // create a delete button

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.classList.add('delete-content');
    content.appendChild(deleteBtn);
    

    // checking if it display's in the browser and a validation
    if(contentArea.value === ""){
        alert('please write something');
    }
    else {
        // grap the content-objective id that houses the content div
        contentObjective.appendChild(content);
    }
    contentArea.value = "";

    deleteBtn.addEventListener('click', function(e){
        let target = e.target;
        e.target.parentElement.parentElement.remove();

    });
    editBtn.addEventListener('click', function(e){


        let s= e.target.parentElement.parentElement;
        // contentArea.value = s.children[0].innerHTML;
        // contentArea.value = s.children[3].innerHTML;
        

    })
   
});