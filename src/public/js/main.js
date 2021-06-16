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