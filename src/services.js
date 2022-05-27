

export function semaforo(cor) {
    if (cor == "verde") {
        return "pode passar"
    }

    else if (cor == "amarelo") {
        return "aguarde"

    }

    else if (cor == "vermelho") {
        return "não passe"
    }

    else{
        return "daltônico"
    }
}

export function diaSemana(numero) {
    
    if (numero == 0){
        return "domingo"
    }
    
    else if (numero == 1){
        return "segunda"
    }

    else if (numero == 2){
        return "tersa"
    }

    else if (numero == 3){
        return "quarta"
    }

    else if (numero == 4){
        return "quinta"
    }

    else if (numero == 5){
        return "sexta"
    }

    else if (numero == 6){
        return "sabado ANIMADO"
    }

    else{
        return "Broxa"
    }
}


