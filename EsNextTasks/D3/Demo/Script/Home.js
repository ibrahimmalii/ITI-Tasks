function CreateProductCard(item){
    //Card
    var card = document.createElement("div");
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

function AddToCart(itemId,itemTitle,itemImage,itemPrice){
    debugger;
    var cart = {};
    if(localStorage.Cart){
        cart = JSON.parse(localStorage.Cart);
        let found = false;
        for(item in cart){
            if(cart[item].id == itemId){
                found = true;
                cart[item].count++;
                break;
            }  
        }
        if(!found){
            cart[itemTitle] = {id:itemId, price: itemPrice, image: itemImage, count:1};
        }
    }
    else{
        cart[itemTitle] = {id:itemId, price: itemPrice, image: itemImage, count:1};
    }
    localStorage.setItem("Cart",JSON.stringify(cart));
}

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
        var items = 0;
        for(item of json){
            if(items<4){
                document.querySelector("#Products .row:last-child").appendChild(CreateProductCard(item));
                items++;
            }
            else{
                items = 0;
                var newRow = document.createElement("div");
                newRow.classList.add("row");
                newRow.style.paddingLeft = "5%";
                document.querySelector("#Products").appendChild(newRow);
            }
        }
    })

function OpenCartWindow(){
    var newWin = open("Cart.html","_blank","width=1000px,height=700px");
}

//debugger;
if(document.cookie){
    document.getElementById("Name").innerText = "Welcome " + document.cookie.split("=")[1];
}
else{
    if(location.search != ""){
        var username = decodeURI(location.search.split("&")[0].split("=")[1].replace(/\+/," "));
        document.getElementById("Name").innerText = "Welcome " + username
        document.cookie = "username="+username
    }
    else{
        location.replace("http://127.0.0.1:5500/Register.html")
    }
}

function Logout(){
    var date = new Date();
    date.setDate(date.getDate()-1);
    console.log(date.toUTCString());
    document.cookie = `username=;expires=${date.toUTCString()}`;
    setTimeout(()=>{
        localStorage.removeItem("Cart");
        location.href = "http://127.0.0.1:5500/Home.html";
    },1000);
}