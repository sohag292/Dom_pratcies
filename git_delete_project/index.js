document.getElementById('delete-confirm').addEventListener('keyup',function(e){
    const text = e.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if(text === 'delete'){
        deleteButton.removeAttribute('disabled');
    }
    
})

document.getElementById('btn-delete').addEventListener('click',function(){
    const secret = document.getElementById('secret-info');
    secret.style.display='none';
})