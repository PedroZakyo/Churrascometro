let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
  console.log("Carregando...")

 let qdtAdultos = inputAdultos.value 
 let qdtcriancas = inputCriancas.value
let qdtduracao = inputDuracao.value

  let qdtTotalCarne = carnePP(qdtduracao) * qdtAdultos + (carnePP(qdtduracao) * qdtcriancas)
  let qdtTotalCerveja = cervejaPP(qdtduracao) * qdtAdultos 
 let qdtTotalBebidas = bebidasPP(qdtduracao) * qdtAdultos + (carnePP(qdtduracao) * qdtcriancas)

resultado.innerHTML =  `<p>${qdtTotalCarne/1000 } kg  de carne </p>`
resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355 )} latas de Cerveja</p>`
resultado.innerHTML +=  `<p>${Math.ceil( qdtTotalBebidas / 2000 )} garrafas  de  2L de Bebidas</p>`

} 


function carnePP(duracao) { 
  if (duracao >= 6) {
      return  650
  }else{
      return 400 
    }
  }

  function cervejaPP(duracao) { 
    if (duracao >= 6) {
        return  2000
    }else{
        return 1200 
      }
    }
  
    function bebidasPP(duracao) { 
      if (duracao >= 6) {
          return  1500
      }else{
          return 1000
        }
      }