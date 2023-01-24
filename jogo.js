
var altura = 0
var largura = 0
var vidas = 1
var tempo = 50
var criaMosquitoTempo = 700
var nivel = window.location.search



if (nivel === '?normal'){
    criaMosquitoTempo = 1500
} else if (nivel === '?dificil'){
    criaMosquitoTempo = 1000
} else if(nivel === '?chucknorris'){
    criaMosquitoTempo  = 750
}

function ajustaTamanhoPalcoJogo(){
    largura = window.innerWidth
    altura = window.innerHeight
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

   tempo -= 1
   if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
   }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, criaMosquitoTempo)

function posicaoRandomica(){

    // remove o mosquito anterior 
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        if (vidas>3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('V'+vidas).src="imagens/coracao_vazio.png"
            vidas++

        }
    }
        
    // cria a posição randomica 
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY =  Math.floor(Math.random() * altura) - 90
    
    // operador ternario para verificação de variaveis negativas
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    // cria o elemento img e faz as atribuições
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    console.log(posicaoX, posicaoY)
    mosquito.style.left = posicaoX+'px'
    mosquito.style.top = posicaoY+'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    
    document.body.appendChild(mosquito)

}


function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

        

}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'LadoA'
        case 1:
            return 'LadoB'
    }
}



