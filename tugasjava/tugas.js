//  Aritmatika Dasar
// nomer 1
document.write("<br>1. Aritmatika Dasar</br>");
a = (10+2)*10;
console.log(a);
document.write("Hasil nya dari penjeumlhan di :", a);
document.write("<br>");


// Memakai Function
// NOmer 2
document.write("<br>2. Memakai Function</br>");
function Perkalian(k, b)
{
    return hasil = k * b;
    
}
let hasilnya = Perkalian(9, 2);
document.write("Hasil perkalian dari 9 x 2 adalah : " + hasilnya);
console.log(hasilnya);
document.write("<br>");

// Perulangan For 
// Nomer 3
document.write("<br>3. Perulangan For");
for (let i=1; i<= 10; i++) {
   if (i % 2 === 0) {  // Jika sisa bagi 2 tidak ada sisa akan genap
        document.write("<br>bilangan ini Genap :",  i);
        console.log("Bilangan ini Genap :",  i);
        
    }
    
    else { // Lain Jika sisa bagi 2 ada sisa akan maka akan ganjil 
        
        document.write("<br> Bilangan ini Ganjil : ",  i);
        console.log("Bilangan ini Ganjil :",  i);
        
    }
    
    
}
document.write("<br>");
// Perulanang While
// Nomer 4
document.write("<br>4. Perulangan While");
let j = 10;
while (j >=1){
   document.write("<br>Perulangan While: ", j);
   console.log(" Bilangan ini adalah : ", j);
   j=j-2;
}
document.write("<br><br>");

document.write("5. Perulangan Do While");
let aa=5;
do{

document.write("<br> Perulangan do while: ", aa);
    aa=aa+2;
}
while (aa <= 15) 
