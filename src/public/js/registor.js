let id = window.localStorage.getItem('id')
if(id) window.location = '/'

form.onsubmit = async (event) => {
    event.preventDefault()
    
    let res = await request('/registor', 'POST', {
        phone: phone.value,
        username: username.value,
        password: password.value
    })
    if(res){
        display.textContent = res.message
        window.localStorage.setItem('id', res.body.id)
        setTimeout(()=>{
            window.location = '/'
        }, 2000)
    }
}