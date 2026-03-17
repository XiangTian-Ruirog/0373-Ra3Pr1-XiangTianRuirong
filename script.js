const formulari = document.getElementById('formulariAlumne')
const nomInput = document.getElementById('nom')
const examenInput = document.getElementById('examen')
const practiquesInput = document.getElementById('practiques')
const actitudInput = document.getElementById('actitud')
const cosTaula = document.getElementById('cosTaula')
const missatge = document.getElementById('missatge')
const ordenarAscBt = document.getElementById('ordenarAsc')
const ordenarDescBt = document.getElementById('ordenarDesc')
let alumnes = []

function mostrarMissatge(){
    missatgeDiv.textContent = 'ERROR: Revisa les dades, recorda que el nom no pot estar en buit i les notes tenen que estar en el rang 0-10'
    missatgeDiv.style.color = 'red'
    missatgeDiv.style.display = 'block'
}
