/*
** Penggunaan Variavel Javascript
*/

// Var
var nama = "Surya";
//var nama = "Surya", nim = 12345; // Tidak disarankan
//console.log(nama);

// Permasalaahan Var
var a = "Saya";
var a = "Aku";

console.log(a);

// Let
let b = "Saya";

// Const
const c = 1;

//c = 2; // Error karena konstanta / nilai tetap
console.log(c);

/*
** Tipe Data Javascript
*/

let name = "Surya";
let nim = 123456;
let kacaMata = 1.5;
let kawin = false;
let hati = null;

console.log(typeof name);
console.log(typeof nim);
console.log(typeof kacaMata);
console.log(typeof kawin);
console.log(typeof hati);

/*
** Pengkondisian
*/

let angka = 3;

if(angka < 3){
    console.log("Kurang nih");
}else{
    console.log("Lebih nih");
}


/*
** Operator
*/

// Aritmatika
let x = 9;
let y = 2;

console.log(x ** y);
console.log(x % y);

// Penggabungan
let gabungan = "10" + 1 + 20;
console.log(gabungan)

// Penugasan
x+=4; //x++ | x--
console.log(x)

// Perbandingan
// Lebih dari >
// Lebih dari sama dengan >=
// Lebih kecil <
// Lebih kecil sama dengan <=
// Sama dengan == atau ===
// Tidak sama dengan != atau !==

let q = "4";

console.log(q == 4);
console.log(q === 4);