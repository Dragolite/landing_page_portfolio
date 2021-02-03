document.querySelector('#loadmore').addEventListener('click',()=>{
    for (const i of document.querySelectorAll('.displaycontent')) {
        
        i.classList.remove('displaycontent');
    }
})