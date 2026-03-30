# Pràctica 3 - Formulari de notes

Repositori: 0376-Ra3Pr1-XiangTianRuirong

# Descripcio

Aquesta és una aplicació web que permet gestionar les notes d'alumnes. L'usuari pot introduir les dades d'un alumne (nom, nota de l'examen, nota de les pràctiques i nota d'actitud), calcular automàticament la nota final segons una ponderació establerta, i visualitzar tots els alumnes en una taula.

## Funcionalitats

**1.Formulari d'entrada de dades**

 * Nom de l'alumne: camp de text obligatori
 * Nota de l'examen: valor numèric entre 0 i 10
 * Nota de les pràctiques: valor numèric entre 0 i 10
 * Nota d'actitud: valor numèric entre 0 i 10

**2.Validació del formulari**

Abans d'afegir un alumne, el sistema valida:

 * Que el nom no estigui buit
 * Que les tres notes siguin numèriques
 * Que les tres notes estiguin entre 0 i 10

**3.Càlcul de la nota final**

La nota final es calcula amb les següents ponderacions:

* Examen: 60%
* Pràctiques: 30%
* Actitud: 10%

Exemple

* Examen: 7
* Pràctiques: 8
* Actitud: 10
* Nota final = (7 × 0.6) + (8 × 0.3) + (10 × 0.1) = 7.6

El resultat es mostra amb dos decimals.

**4.Taula de resultats**

Per cada alumne afegit, es mostra:

* Nom
* Nota de l'examen
* Nota de les pràctiques
* Nota d'actitud
* Nota final calculada
* Estat: Aprovat (nota ≥ 5) o Suspès (nota < 5)

**5.Ordenació de la llista**

L'aplicació permet ordenar els alumnes per nota final:

* Ordenar per nota: de menor a major nota
* Ordenar per nota: de major a menor nota

# Autor

Ruirong Xiang Tian
















