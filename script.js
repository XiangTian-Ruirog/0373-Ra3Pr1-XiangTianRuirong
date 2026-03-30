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

function validarFormulari(nom, examen, practiques, actitud) {
    if (!nom || nom.trim() === '') {
        mostrarMissatgeError('El camp "Nom" no pot estar buit')
        return false
    }
    if (isNaN(examen) || examen < 0 || examen > 10) {
        mostrarMissatgeError('La nota de l\'examen ha de ser un número entre 0 i 10')
        return false
    }
    if (isNaN(practiques) || practiques < 0 || practiques > 10) {
        mostrarMissatgeError('La nota de les pràctiques ha de ser un número entre 0 i 10')
        return false
    }
    if (isNaN(actitud) || actitud < 0 || actitud > 10) {
        mostrarMissatgeError('La nota d\'actitud ha de ser un número entre 0 i 10')
        return false
    }
    return true
}

function mostrarMissatge(){
    missatgeDiv.textContent = 'ERROR: Revisa les dades, recorda que el nom no pot estar en buit i les notes tenen que estar en el rang 0-10'
    missatgeDiv.style.color = 'red'
    missatgeDiv.style.display = 'block'
}

function calcularNotaFinal(examen, practiques, actitud) {
    const notaFinal = (examen * 0.6) + (practiques * 0.3) + (actitud * 0.1)
    return Math.round(notaFinal * 100) / 100
}

