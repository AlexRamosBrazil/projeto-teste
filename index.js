let nome = "Alex"
let experience = 12000
let nivel = null

if (experience <= 1000) {
    nivel = "Ferro"
}else if (experience <= 2000) {
    nivel = "Bronze"
}else if (experience <= 5000) {
    nivel = "Prata"
}else if (experience <= 7000) {
    nivel = "Ouro"
}else if (experience <= 8000) {
    nivel = "Platina"
}else if (experience <= 9000) {
    nivel = "Ascendente"
}else if (experience <= 10000) {
    nivel = "Imortal"
}else {
    nivel = "Radiante"
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)


