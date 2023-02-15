// const items = document.getElementsByClassName('item');
// for(const item of items){
//     item.addEventListener('click',function(e){
//         e.target.parentNode.removeChild(e.target)
//         // console.log(item.parentNode.removeChild(item));
//     })
// }

document.getElementById('list-container').addEventListener('click', function(e){
    e.target.parentNode.removeChild(e.target)
})

document.getElementById('btn-add-item').addEventListener('click',function(){
    // const listContainer = document.getElementById('list-container');
    // const li = document.createElement('li');
    // li.innerText ='New Brand Item added';
    // listContainer.appendChild(li);
    const textField = document.getElementById("text-field");
    const myElement = textField.value;
    const li = document.createElement('li');
    li.innerText = myElement;

    const parantNode = document.getElementById("list-container");
    parantNode.appendChild(li);
    document.getElementById("text-field").value =" ";   
})


