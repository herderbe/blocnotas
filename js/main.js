let botonCrear = document.getElementById('boton')
let contenedorNotas = document.querySelector('.contNotas')
let notas = document.querySelectorAll('.paraNotas')

function actualizar(){
    contenedorNotas.innerHTML = localStorage.getItem('notas')
}
actualizar()

function archivoNotas(){
    localStorage.setItem('notas', contenedorNotas.innerHTML)
}
botonCrear.addEventListener('click',function(){
    let contTexto = document.createElement('div')
    let texto = document.createElement('p')
    texto.setAttribute('contenteditable','true')
    let img = document.createElement('img')
    contTexto.className = 'paraNotas'
    img.src = 'img/delete.png'
    contTexto.appendChild(texto)
    contenedorNotas.appendChild(contTexto).appendChild(img)
    
})

contenedorNotas.addEventListener('click',function(evento){
    if(evento.target.tagName ==='IMG'){
        evento.target.parentElement.remove()
        archivoNotas()
    }if (evento.target.tagName ==='P') {
        notas = document.querySelectorAll('.paraNotas')
        notas.forEach(p => {
            p.onkeyup = function(){
                archivoNotas()
            }
        });
    } 
})