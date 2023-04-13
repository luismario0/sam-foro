let cores = document.querySelectorAll('.sinais')
let contadorLuz = 0
  
function red(){
    cores[2].classList.add('red')
    cores[1].classList.remove('yellow')
    cores[0].classList.remove('green')
    
   
}
function yellow(){
    cores[1].classList.add('yellow')
    cores[2].classList.remove('red')
    cores[0].classList.remove('green')
   
}
function green(){
    cores[0].classList.add('green')
    cores[1].classList.remove('yellow')
    cores[2].classList.remove('red')
   
}

const mostrarLuz = () =>{
    contadorLuz++
 console.log(contadorLuz)
  switch (contadorLuz) {
    case 1:
        green()
    break
    case 5:
        yellow()
    break
    case 8:
        red()
        break
    case 12:
        contadorLuz = 0
     break
  }
   
}
  
   let interval =  setInterval(mostrarLuz,1000)
