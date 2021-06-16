async function request(path, method, body){
    const response = await fetch(path, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }) 
    return await response.json()
}

// messagebox.addEventListener("input", ()=>{
//     record.classList.add('hidden')
//     send.classList.remove('hidden')
//   if (!messagebox.value.length) {
//       record.classList.remove('hidden')
//       send.classList.add('hidden')
//   }else{
//       record.classList.add('hidden')
//       send.classList.remove('hidden')
//   } 
//   }, false);