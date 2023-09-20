const posicoes = document.querySelectorAll(".p")
let vez = 1
let tentativas = 1
let reservado1 = []
let reservado2 = []

posicoes.forEach(element => {
    element.addEventListener("click", e => {
        if(element.value === "j1" || element.value === "j2") {
            return
        }
        if(tentativas === 9){
            refresh()
        }
        if(vez == 1) {
            element.classList.add("j1")
            element.value = "j1"
            reservado1 += e.target.classList[0]
            vez = 2
            console.log(reservado1)
        } else {
            element.classList.add("j2")
            element.value = "j2"
            reservado2 += e.target.classList[0]
            vez = 1
            console.log(reservado2)
        }
        if(reservado1 == 210){
            alert("o primeiro venceu!")
            refresh()
        } else if (reservado2 == 210) {
            alert("o segundo venceu!")
            refresh()
        }
        tentativas ++
    })
})

function refresh() {
    location.reload()
}