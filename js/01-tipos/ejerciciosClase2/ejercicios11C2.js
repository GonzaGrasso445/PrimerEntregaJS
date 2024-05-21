// Voy a presentar una funcion en la cual el  cliente que esta dispuesto a comprar entre 3 modelos de zapatillas entre las cuales las marcas 
// a seleccionar son Nike, Adidas o Lacoste, diseñe el proceso de eleccion, facturacion y pago.


let nike = "nike";
let adidas = "adidas";
let lacoste = "lacoste";

let precioNike = 100000;
let precioAdidas = 80000;
let precioLacoste = 120000;




let cantidad= parseInt(prompt("Por favor seleccione la cantidad a comprar"));
console.log("Usted va a comprar " + cantidad + " de zapatillas, en el siguiente paso elija una marca ")


let zapatillas= prompt("Por favor elija una  marca de zapatilla entre nike, adidas y lacoste tal cual se describe");


while(zapatillas !==nike && zapatillas !==adidas && zapatillas !==lacoste){
    zapatillas=  prompt("ingrese una marca correcta");
    if(zapatillas!==nike && zapatillas!==adidas && zapatillas!==lacoste){
        console.log("Ingrese una marca correcta")
    }
    else{
        console.log("Comencemos con la compra");
    }
}


let talle = parseFloat(prompt("Por favor elija un talle entre 40 y 45"));

while(talle<40 || talle>45){
    talle=  prompt("ingrese un talle correcto ");
    if(talle<40 || talle>45){
        console.log("ingrese un talle correcto ");
    }
    else{
        console.log("disponemos de ese talle");
    }
}



function zapatillasCom(zapatillas){
    switch(zapatillas){
        case "nike":
            console.log("usted ha elegido " + cantidad  + " zapatillas nike,  con un precio de $ " +precioNike +" y debera abonar $ " + (precioNike * cantidad));
            break;
        case "adidas":
            console.log("usted ha elegido " + cantidad  + " zapatillas adidas,  con un precio de $ "+precioAdidas + " y debera abonar $ " + (cantidad*precioAdidas));
            break;
            
        case "lacoste":
            console.log("usted ha elegido " + cantidad  + "  zapatillas lacoste,  con un precio de $ "+precioLacoste + " y debera abonar $ " + (cantidad * precioLacoste));
            break;

            
    }
    let pago= prompt("Por favor elija una forma de pago entre efectivoDebito,tarjetaCredito o mercadoPago ");

    console.log("Usted eligio la forma de pago: " + pago);

    let efectivoDebito = "efectivoDebito"
    let tarjetaCredito = "tarjetaCredito"
    let mercadoPago = "mercadoPago"
    let montoCompra= prompt("ingrese el monto de compra");

    while(pago!=efectivoDebito && pago!=tarjetaCredito && pago!=mercadoPago){
    pago=  prompt("ingrese un medio de pago correcto");
    if(pago!=efectivoDebito && pago!=tarjetaCredito && pago!=mercadoPago){
        console.log("por favor ingrese un medio de pago correcto");
    }
    else{
        console.log("Procesaremos el pago");
    }

    }

 

    if(pago==efectivoDebito){
        console.log(  "usted no tiene recargo , por lo cual va a abonar $: " + montoCompra)
    }
    else if (pago==tarjetaCredito){
        let cuota = prompt("seleccione 1 , 3 o 6 cuotas")
        let num = prompt("ingrese los 16 numeros de su tarjeta")
        while(num.length!=16){
            num=  prompt("ingrese los 16 numeros de su tarjeta");
            if(num.length!=16){
                console.log("Ingrese los 16 numeros de su tarjeta")
            }
            else{
                console.log("los numeros ingresados son correctos");
            }
        }
        let ven = prompt("ingrese los 4 numeros de la fecha de vencimiento usando dos dias para el mes y dps dias para el año")
        while(ven.length!=4){
            ven=  prompt("ingrese los 4 numeros de la fecha de vencimiento usando dos dias para el mes y dps dias para el año");
            if(ven.length!=4){
                console.log("ingrese los 4 numeros de la fecha de vencimiento usando dos dias para el mes y dps dias para el año")
            }
            else{
                console.log("los numeros ingresados son correctos");
            }
        }
        let seg = prompt("ingrese los 3 numeros de seguridad que figuran detras de la tarjeta")
        while(seg.length!=3){
            seg=  prompt("ingrese los 3 numeros de seguridad que figuran detras de la tarjeta");
            if(seg.length!=3){
                console.log("ingrese los 3 numeros de seguridad que figuran detras de la tarjeta")
            }
            else{
                console.log("los numeros ingresados son correctos");
            }
        }
        
        if (cuota==1){
            console.log(  "usted no tiene recargo , por lo cual va a abonar $: " + montoCompra)
            console.log("va a realizar una compra con la tarjeta de credito numero :" + num)
            
        }
        else if(cuota==3){
            console.log(  "usted tiene recargo del 10% , por lo cual va a abonar $: " + (montoCompra *1.10))
            console.log("va a realizar una compra con la tarjeta de credito numero :" + num)
            
        }
        else{

            console.log(  "usted tiene recargo del 10% , por lo cual va a abonar $: " + (montoCompra *1.30) )
            console.log("va a realizar una compra con la tarjeta de credito numero :" + num)
            
        }
    }
    else{
        console.log(  "usted no tiene recargo , por lo cual va a abonar $: " + montoCompra)
    }
    

    

 
}


zapatillasCom(zapatillas);