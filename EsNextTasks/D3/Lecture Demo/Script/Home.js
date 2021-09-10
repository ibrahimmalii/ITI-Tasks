//debugger;

if(location.search){
    let data = location.search.split("&")[0].split("=")[1].replace(/\+/," ");
    //console.log(data);
    let date = new Date();
    date.setDate(date.getDate()+1);
    document.cookie = `username=${data};expires=${date.toUTCString()};`
    document.getElementById("Name").innerText = `Welcome ${data}`;
}
else if(document.cookie){
    let data = document.cookie.split("=")[1];
    document.getElementById("Name").innerText = `Welcome ${data}`;
}
else{
    location.href="http://127.0.0.1:5500/Register.html";
}

const Logout = ()=>{
    debugger;
    let date = new Date();
    date.setDate(date.getDate()-1);
    document.cookie = "username=;expires="+date.toUTCString();
    location.href="http://127.0.0.1:5500/Home.html";
}

let ajax = new XMLHttpRequest();
ajax.open("GET","https://fakestoreapi.com/products",true);
ajax.onreadystatechange = function(){
    if(ajax.readyState == 4 && ajax.status == 200){
        let products = JSON.parse(ajax.responseText);
        for(item of products){
            //console.log(item)
            let div = CreateProductCard(item);
            document.getElementById("Product").appendChild(div);
        }
    }
}
ajax.send();

const CreateProductCard = (item) => {
    //Card
    let card = document.createElement("div");
    card.style.maxWidth = "20rem";
    card.setAttribute("id",item.id);
    card.classList.add("card");
    card.classList.add("border-warning");
    card.classList.add("mb-3");
    card.innerHTML = `<div class="card-header">
        <img src="${item.image}" height="80%">
        </div>
        <div class="card-body">
          <div class="card-subtitle">${item.title}</div>
          <p class="card-subtitle text-muted">${item.price}</p>
          <button type="button" class="btn btn-warning" onclick="AddToCart(${item.id},'${item.title}','${item.image}','${item.price}')">Add to Cart</button>
        </div>`
    
    return card;
}

const AddToCart = (id,title,image,price) => {
    debugger;
    let cart = {};
    if(localStorage.Cart){
        cart = JSON.parse(localStorage.Cart);
        if(cart[title])
            cart[title].count++;
        else
            cart[title] = {"id":id, "image":image, "price":price, "count":1};
    }
    else{
        cart[title] = {"id":id, "image":image, "price":price, "count":1};
    }
    localStorage.Cart = JSON.stringify(cart);
}

const OpenCartWindow = () => {
    let cartWin = open("/Cart.html","_blank","width=1500,height=500");
}