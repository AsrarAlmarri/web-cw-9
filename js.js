let products = [
    {name:`Creme Brulee Cookie`, price:1.250 },
    {name:`White Choco Orea Cookie`, price:1.500 },
    {name:`Mixed Dates Cookie`, price:2 }
];


let cart =[];


function addProduct(index)
{
    let product = products[index];

    let quantity = document.getElementById(index).value;


    product.quantity = quantity;



    cart.push(product);

     totalprice = 0;

     document.getElementById("itemsInCart").innerHTML = "";

    for (let index = 0; index < cart.length; index++) {
        let element = cart[index];
        let price = element.price*element.quantity
       totalprice = totalprice + price;
       let list = document.getElementById("itemsInCart");
      list.innerHTML +=`<li> ${element.quantity} ${element.name} for ${element.price}</li>`
      


    }
    

    document.getElementById("total").innerText = `${totalprice} KD`;

}

