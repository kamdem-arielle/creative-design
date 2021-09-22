document.querySelectorAll('.story-btn').forEach((button)=>{
button.addEventListener('click',()=>{
    button.classList.toggle('changes');
    button.nextElementSibling.classList.toggle('changes')
})
})