/**
 * Created by varon on 08/10/2018.
 */

/* var demo = "Salut"
 console.log(demo)*/

//falsy
//0, '', false, null, undefined, []

/*for(var i = 0;i<5;i++)
{
    alert(i);
}

var isDone = false;
while(!isDone) {
    console.log('super');
    isDone = true;
}

var array = [1,2,3,4,5];
array.forEach(function(iteration) {
    alert(iteration);
});*/

var marc = {
    nom: 'Marc',
    age: 26,
    moyenne: 15
};

for(leNomQueTuDOnneAlaCle in marc) {
    console.log(leNomQueTuDOnneAlaCle);
}

if (marc.age >= 18 && marc.age <= 25)
{
    console.log('tu as accès à réduction')
} else {
    console.log('tu n\'as pas accès à la réduction')
}

var test = 2;
foo_test();

function foo_test() {
    test = 3;
    console.log(a);
}





/*function registerHandlers() {
 var as = document.getElementsByTagName('a');
 console.log(as);
 for (var i = 4; i < as.length; i++) {
 console.log(i);
 as[i].onclick = function() {
 window.alert(i);
 return false;
 }
 }
 }
 registerHandlers();*/

function appendChildren(decorateDivFunction) {
    var allDivs = document.getElementsByTagName('div');
    for (var i = 0; i < allDivs.length; i++) {
        console.log(i);
        var newDiv = document.createElement('div');
        function decorateDivFunction(newDiv) {
            allDivs[i].appendChild(newDiv);
        }
    }
}
appendChildren()



/*var marc = {
 nom: 'Marc',
 age: 17,
 moyenne: 15
 };*/

/*for(leNomQueTuDOnneAlaCle in marc) {
 console.log(leNomQueTuDOnneAlaCle);
 }

 if (marc.age >= 18 && marc.age <= 25)
 {
 console.log('tu as accès à réduction')
 } else {
 console.log('tu n\'as pas accès à la réduction')
 }

 var test = 2;
 foo_test();

 function foo_test() {
 test = 3;
 console.log(a);
 }*/

//le switch est un peu bloquant car il vérifie une exactitude, pas une supériorité, infériorité
/*switch (marc.age) {
 case 18:
 console.log('Bravo tu as 18 ans')
 break
 case 25:
 console.log('Bravo tu as un quart de siècle')
 break
 case 50:
 console.log('Bravo tu as un demi siècle')
 break
 default:
 console.log('Bon anniversaire')
 }*/

// écriture ternaire
// ? = code à éxécuter, : = else
/*if(marc.age>=18){
 console.log('tu es majeur')

 } else {
 console.log('tu es mineur')
 }*/

/*console.log(marc.age>=18 ? 'Tu es majeur' : 'Tu es mineur')*/

/*var eleves = ['jean', 'marc', 'marion']

 for ( var i = 0; i < eleves.length; i++) {
 var eleve = eleves[i];
 var marc = eleves[1];
 console.log('Bonjour' + eleves[i])
 }*/


//while
// Tant qu'une condition est vraie, alors, le code qu'on souhaite exécuter
// attention aux boucles infinies, il faut les couper avec un break

/*var i = 0
 while (i < 11) {
 console.log(i)
 if(i=3) {
 break
 }
 i = i + 1 // i++
 }*/

// test nombre premier
/*var number = 28
 var divisors = []
 for (var i = 0; i < number; i++) {
 if ((number % i) == 0) {
 divisors.push(i)
 }
 }
 var divisorsSum = 0
 for (var j = 0; j < divisors.length; j++) {
 divisorsSum += divisors[j]
 }
 var isPerfect = number == divisorsSum
 console.log(number + (isPerfect ? " ":" n\'" )+ "est" + (isPerfect ? " ":" pas ") + "parfait" )*/



/*var number = 28
 var divisorsSum = 0
 for (var i = 0; i < number/2; i++) {
 if ((number % i) == 0) {
 divisorsSum += i
 }
 }
 var isPerfect = number == divisorsSum
 console.log(number + (isPerfect ? " ":" n\'" )+ "est" + (isPerfect ? " ":" pas ") + "parfait" )*/


/*for (var number = 0; number < 1000; number++) {
 var divisorsSum = 0
 for (var i = 0; i <= number / 2; i++) {
 if ((number % i) == 0) {
 divisorsSum += i
 }
 }
 var isPerfect = number == divisorsSum
 if (isPerfect) console.log(number + " est parfait")
 }*/

// Exercices la moyenne des élèves
// Pour chaque eleve, si moyenne < 10, alors afficher le nom n'a pas la moyenne
/*

 var classA = [{
 nom: 'Marc',
 moyenne: 12
 }, {
 nom: 'Marie',
 moyenne: 8
 }, {
 nom: 'Paul',
 moyenne: 7
 }]

 /!*for (var i = 0; i < classA.length; i++) {
 var eleve = classA[i];

 if(eleve.moyenne < 10) {
 console.log(eleve.nom + ' n\'a pas la moyenne')
 } else {
 console.log(eleve.nom + ' a la moyenne')
 }
 }*!/
 // Les fonctions
 //fonctions existantes en JS
 //parseInt -> convertir une string en entier en passant en paramètre le chiffre et la base 10 (chiffres entre 0 et 9)
 //parseInt("1", 10) --> 1 // parseInt(456Salut, 10) -> 456
 //parsefloat, meme principe mais pas besoin de la base 10
 //catégorie de méthodes math.x => math.random() donne un chiffre aléatoire
 //méthode = fonction sur un objet
 // en JS, tout est objet

 function tellMeWhoIsAGoodStudent(eleves) {

 for (var i = 0; i < eleves.length; i++) {
 var eleve = eleves[i];

 if(eleve.moyenne >= 10) {
 console.log(eleve.nom + ' de la' + eleves[] + ' a la moyenne')
 }
 }
 }
 tellMeWhoIsAGoodStudent(classA)




 /!*
 function countSheeps(arrayOfSheep) {
 var countSheep = []
 console.log(countSheep)

 for(var i = 0; i < arrayOfSheep.length; i++) {
 var sheep = arrayOfSheep[i];
 if (sheep == true) {
 countSheep.push(sheep)
 }
 }
 }countSheeps()
 *!/

 function isPremier(number) {

 for (var i = 2; i < number; i++) {
 if (number % i === 0) {
 return false
 }
 }
 isPremier(12)
 }

 function multiply(a, b) {
 if (b === undefined){
 b = 1
 }
 return a * b
 }
 */
