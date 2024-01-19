let heroes = [ "venom" , "shang-chi" , "doctor-strange" , "mile-morales" , "miss marvel" , "black-panther" ];
console.log(heroes);
// arrays are mutable
heroes[5] = "goku";
console.log(heroes);

//splice

console.log(heroes.splice(2,2,"ben10" , "peace-maker"));
console.log(heroes);

let bbq = ["tikka" , "seekh kabab" , "malai boti" , "chapli kabab" , "chargha"];
let seafood = ["fish" , "prawns" , "lobster"];
let sweetdish = ["custurd" , "jelly" , "ice-cream" , "gulab-jamun"]

let menu = bbq.concat(seafood , sweetdish);
console.log(menu);