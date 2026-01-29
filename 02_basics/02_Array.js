const marvel_heros = ["thor", "Inronman", "spiderMan"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

//if you are puching array in another array ,not a good practice
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);

//concat operater
//  const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


//spread operater

const all_new_hero = [...marvel_heros, ...dc_heros]

// console.log(all_new_hero);

const another_array = [1, 2, 3, [4, 5, 6],7,[6, 7, [4, 5]]]
//flat with infinity goes to depth of the array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("deepak"))
//it will make array from given input
console.log(Array.from("Hitesh"));

//in this you have to tell which one you want in array value or key
console.log(Array.from({name: "deepak"}));

score1 = 100
score2 = 200
score3 = 300
console.log(Array.of(score1, score2, score3));
