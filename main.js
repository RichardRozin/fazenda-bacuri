const galeria = document.querySelector('.galeria')
    galeria_imagens = document.querySelector('.galeria_imagens')


function display(){
    if(galeria_imagens.style.display = 'none')
        galeria_imagens.style.display = 'block'
        const retrair = document.createElement('p')
        retrair.classList.add('expandir')
        retrair.innerHTML = 'Retrair ⇧'
        galeria.appendChild(retrair)

        retrair.addEventListener('click', function(evento){
            window.location.reload()
        })
    }
    
