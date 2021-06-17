let id = window.localStorage.getItem('id')
if(!id) window.location = '/login'

const renderMessage = async () => {
    let allMessages = await request('/messages', 'GET')
    let allUsers = await request('/users', 'GET')
    for (const values of allMessages) {
        const user = allUsers.find(check => check.id == values.userId)
        const newLi = document.createElement('li')
        newLi.setAttribute("class", "chat__content")
        
        if(values.userId == id){
            newLi.classList.add("me")
            newLi.innerHTML = `<span class="triangle-right"></span>
            <div class="chat__content-left">
                <p class="chat__name">${user.username}</p>
                <p class="chat__text">${values.message}</p>
            </div>
            
            <div class="chat__content-right"><time class="time">${values.time}</time>`
        }else{
            newLi.innerHTML = `<span class="triangle-left"></span>
            <div class="chat__content-left">
                <p class="chat__name">${user.username}</p>
                <p class="chat__text">${values.message}</p>
            </div>
            
            <div class="chat__content-right"><time class="time">${values.time}</time>`
        }
         messages.appendChild(newLi)    
    }
}

form.addEventListener("submit", async e => {
    e.preventDefault()
    const response = await request('/message', 'POST', {
        userId: id,
        message: messagebox.value
    })
    if(response){
        messages.innerHTML = null
        renderMessage() 
        
    }
    e.target.reset();
})

messagebox.addEventListener("input", ()=>{
    record.classList.add('hidden')
    send.classList.remove('hidden')
  if (!messagebox.value.length) {
      record.classList.remove('hidden')
      send.classList.add('hidden')
  }else{
      record.classList.add('hidden')
      send.classList.remove('hidden')
  } 
  }, false);




renderMessage()
