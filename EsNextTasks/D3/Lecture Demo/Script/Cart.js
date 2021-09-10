if(localStorage.Cart){
    let cart = JSON.parse(localStorage.Cart);
    for(title in cart){
        createItem(title,cart[title])
    }
}

let createItem = (title,item) => {
    document.getElementById("CartProducts").innerHTML += 
    `<div class="row" style="padding-left: 20%; padding-right: 20%;width: 100%;">
    <div class="col-md-3">
        <img src="${item.image}" width="60%">
    </div>
    <div class="col-md-8 align-self-center">
        <h4>${title}</h4>
        <br>
        <p class="card-subtitle text-muted">${item.price}</p>
    </div>
    <div class="col-md-1 align-self-center">
        <input min="0" type="number" style="width:100%" onchange="CountChanged(this,'${title}')" value="${item.count}">
    </div>
    </div>`
}

const CountChanged = (counter,productTitle) => {
    if(counter.value == 0){
        let deleteProduct = confirm("Do you want to delete?");
        if(deleteProduct){
            let cart = JSON.parse(localStorage.Cart);
            delete cart[productTitle];
            localStorage.Cart = JSON.stringify(cart);
            location.reload();
        }
        else{
            counter.value = 1;
        }
    }
    else{
        let cart = JSON.parse(localStorage.Cart);
        cart[productTitle].count = counter.value;
        localStorage.Cart = JSON.stringify(cart);
    }
}