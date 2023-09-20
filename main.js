const posicoes = document.querySelectorAll(".p")
let vez = 1
let tentativas = 1

posicoes.forEach(element => {
    element.addEventListener("click", e => {
        if(element.value === "j1" || element.value === "j2") {
            return
        }
        posicoes[e.target.value] = element.value
        if(tentativas === 9){
            refresh()
        }
        if(vez == 1) {
            element.classList.add("j1")
            element.value = "j1"
           
            vez = 2
        } else {
            element.classList.add("j2")
            element.value = "j2"
            vez = 1
        }
        

        //HORIZONTAL

        if(posicoes[0].value == posicoes[1].value && posicoes[0].value == posicoes[2].value && posicoes[0].value == element.value) {
            alert(`${element.value} venceu!`)
        }else if(posicoes[3].value == posicoes[4].value && posicoes[3].value == posicoes[5].value && posicoes[3].value == element.value) {
            alert(`${element.value} venceu!`)
        }else if(posicoes[6].value == posicoes[7].value && posicoes[6].value == posicoes[8].value && posicoes[6].value == element.value) {
            alert(`${element.value} venceu!`)
        }

        //VERTICAL

        else if(posicoes[0].value == posicoes[3].value && posicoes[0].value == posicoes[6].value && posicoes[0].value == element.value) {
            alert(`${element.value} venceu!`)
        } else if(posicoes[1].value == posicoes[4].value && posicoes[1].value == posicoes[7].value && posicoes[1].value == element.value) {
            alert(`${element.value} venceu!`)
        } else if(posicoes[2].value == posicoes[5].value && posicoes[2].value == posicoes[8].value && posicoes[2].value == element.value) {
            alert(`${element.value} venceu!`)
        }
        
        //DIAGONAIS

        else if(posicoes[0].value == posicoes[4].value && posicoes[4].value == posicoes[8].value && posicoes[0].value == element.value) {
            alert(`${element.value} venceu!`)
        } else if(posicoes[2].value == posicoes[4].value && posicoes[4].value == posicoes[6].value && posicoes[2].value == element.value) {
            alert(`${element.value} venceu!`)
        }

        tentativas ++
    })
})

function refresh() {
    location.reload()
}