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
