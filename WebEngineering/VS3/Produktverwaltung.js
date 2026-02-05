const products = [
{ name: 'Laptop', category: 'Elektronik', price: 800, quantity: 3 },
{ name: 'Kaffeemaschine', category: 'Haushalt', price: 120, quantity: 1 },
{ name: 'Smartphone', category: 'Elektronik', price: 500, quantity: 5 },
{ name: 'Mixer', category: 'Haushalt', price: 80, quantity: 2 },
{ name: 'Tablet', category: 'Elektronik', price: 250, quantity: 4 }
];

function checkelektronik(produkt){
    if(produkt.category==="Elektronik") return produkt
}
let elektronik= products.filter(checkelektronik);
//console.log("Elektronische Geräte")
//console.log(elektronik)


let gesamtpreis = 0;
products.map(preis => {
    //console.log(preis)
    gesamtpreis+=preis.price
    //console.log("Neuer Gesamtpreis: "+gesamtpreis)
})
//console.log("Gesamtpreis: "+gesamtpreis)



let teuer = products.filter(produkt => {
    if(produkt.price>100) return produkt
})
//console.log("Teure Geräte")
//console.log(teuer)



const a = [1,2,3]
let b=[];
a.map(num => b.unshift(num))
//console.log(b)


const names=["AFF", "Add", "cdd"]
//names.forEach(name=>console.log(name))

let sum=0;
a.forEach(num=> sum+= num)
console.log(sum)