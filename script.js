const formulari = document.getElementById('formulariAlumne')
const nomInput = document.getElementById('nom')
const examenInput = document.getElementById('examen')
const practiquesInput = document.getElementById('practiques')
const actitudInput = document.getElementById('actitud')
const cosTaula = document.getElementById('cosTaula')
const missatgeDiv = document.getElementById('missatge')
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

function mostrarMissatgeError(missatgeText) {
    missatgeDiv.textContent = missatgeText
    missatgeDiv.style.color = 'red'
    missatgeDiv.style.display = 'block'
}

function calcularNotaFinal(examen, practiques, actitud) {
    const notaFinal = (examen * 0.6) + (practiques * 0.3) + (actitud * 0.1)
    return Math.round(notaFinal * 100) / 100
}

function afegirAlumne() {
    const nom = nomInput.value
    const examen = parseFloat(examenInput.value)
    const practiques = parseFloat(practiquesInput.value)
    const actitud = parseFloat(actitudInput.value)
    
    if (!validarFormulari(nom, examen, practiques, actitud)) {
        return
    }
    
    const notaFinal = calcularNotaFinal(examen, practiques, actitud)
    const alumne = {
        nom: nom.trim(),
        examen: examen,
        practiques: practiques,
        actitud: actitud,
        notaFinal: notaFinal
    }
    alumnes.push(alumne)
    mostrarAlumnes()
    formulari.reset()
    missatgeDiv.style.display = 'none'
}

function mostrarAlumnes() {
    cosTaula.innerHTML = ''
    
    for (let i = 0; i < alumnes.length; i++) {
        const alumne = alumnes[i]
        const estat = alumne.notaFinal >= 5 ? 'Aprovat' : 'Suspès'
        
        const fila = `
            <tr>
                <td>${alumne.nom}</td>
                <td>${alumne.examen.toFixed(2)}</td>
                <td>${alumne.practiques.toFixed(2)}</td>
                <td>${alumne.actitud.toFixed(2)}</td>
                <td>${alumne.notaFinal.toFixed(2)}</td>
                <td>${estat}</td>
            </tr>
        `
        cosTaula.innerHTML += fila
    }
}
