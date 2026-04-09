let selects = document.querySelectorAll('.select')
selects.forEach(select=>{
    select.addEventListener('click',()=>{
        console.log('click')
        console.log(select.getAttribute("id"))
    })
})
