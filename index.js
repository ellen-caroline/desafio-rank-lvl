let win, lose, lvlHero, result;

function calculateBalance(win, lose){
    let balance = win - lose;

    if (balance < 10) {
        lvlHero = 'Ferro'
    } else if (balance <= 20) {
        lvlHero = 'Bronze'
    } else if (balance <= 50) {
        lvlHero = 'Prata'
    } else if (balance <= 80) {
        lvlHero = 'Ouro'
    } else if (balance <= 90) {
        lvlHero = 'Diamante'
    } else if (balance <= 100) {
        lvlHero = 'Lendário'
    } else {
        lvlHero = 'Imortal'
    }

    return balance;
}

result = calculateBalance(Math.floor(Math.random()*100), Math.floor(Math.random()*100));

console.log("O Herói tem de saldo de " + result + " está no nível " + lvlHero);