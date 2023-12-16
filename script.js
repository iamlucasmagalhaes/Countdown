document.addEventListener("DOMContentLoaded", function() {

    //define a data do lançamento (ano, mês - 1, dia, horas, minutos, segundos)
    const launchDate = new Date(2024, 0, 1, 0, 0, 0)

    //atualiza o countdown a cada a cada 1000 milissegundos (1 segundo)
    const countdownInterval = setInterval(updateCountdown, 1000)

    //inicializa o countdown
    updateCountdown()

    function updateCountdown(){
        
        const currentDate = new Date()
        const timeDiferrence = launchDate - currentDate

        //verifica se a diferença de tempo é maior que zero
        if(timeDiferrence > 0){

            //calcula os dias, horas, minutos e segundos restantes para o lançamento
            const days = Math.floor(timeDiferrence / (1000 * 60 * 60 *24))
            const hours = Math.floor((timeDiferrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((timeDiferrence % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((timeDiferrence % (1000 * 60)) / 1000)

            //atualiza os elementos HTML
            document.getElementById("days").textContent = pad(days)
            document.getElementById("hours").textContent = ": " + pad(hours)
            document.getElementById("minutes").textContent = ": " + pad(minutes)
            document.getElementById("seconds").textContent = ": " + pad(seconds)
        } else {
            clearInterval(countdownInterval)
            document.getElementById("container").innerHTML = "<h1>Happy New Year!</h1>"
        }
    }

    //garante que numeros menores que 10 tenham um zero à esquerda
    function pad(value) {
        return value < 10 ? "0" + value : value
    }
})