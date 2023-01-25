//your code here

let input = document.getElementById('newTodoInput');
let button = document.getElementById('addTodoBtn');

button.addEventListener("click", validate);

function validate (e) {
    let data = input.value ;  
    data = data.trim()  
  
    if (data == ""){
     alert('Empty data not allowed...!')
    return 
    } 
    else {
        let space = document.createElement ('li')
        space.innerHTML = data ;
        document.body.append(space)
       
    }
    
}
