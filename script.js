const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "30 nov 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24; 
    const finalMinutos = Math.floor(segTotal / 60 ) % 60; 
    const finalSegundos = Math.floor(segTotal  ) % 60; 

    dia.innerHTML = formatoTempo(finalDias)
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)

    document.getElementById('dia').innerHTML = (finalDias) + "D"
    document.getElementById('hora').innerHTML = (finalHoras) + "H"
    document.getElementById('minuto').innerHTML = (finalMinutos) + "M"
    document.getElementById('segundo').innerHTML = (finalSegundos) + "S"

    document.getElementById('dia').style.color = "#514988"
    document.getElementById('hora').style.color = "#514988"
    document.getElementById('minuto').style.color = "#514988"
    document.getElementById('segundo').style.color = "#514988"

}
function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, )

const meuVideo = document.getElementById("meuVideo");
  meuVideo.autoplay = true;
  meuVideo.load();