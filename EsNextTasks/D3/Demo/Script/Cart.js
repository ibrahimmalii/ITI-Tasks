function FillProducts(){
    if(localStorage.Cart){
        var cart = JSON.parse(localStorage.Cart)
        for(item in cart){
            var product = `
            <div class="row" style="padding-left: 20%; padding-right: 20%;width: 100%;">
                <div class="col-md-3">
                    <img src="${cart[item].image}" width="60%">
                </div>
                <div class="col-md-8 align-self-center">
                    <h4>${item}</h4>
                    <br>
                    <p class="card-subtitle text-muted">${cart[item].price}</p>
                </div>
                <div class="col-md-1 align-self-center">
                    <input type="number" class="form-control" style="width:100%" min="0" value=${cart[item].count} onchange="ValueChanged(this,'${item}')">
                </div>
            </div>`;
            document.getElementById("CartProducts").innerHTML += product;
            document.getElementById("CartProducts").innerHTML += "<hr style='margin-left:15%; margin-right:15%'>";
        }
        document.getElementById("CartProducts").innerHTML +=`<div class="row" style="padding-left: 20%; padding-right: 20%;width: 100%;"></div>`;
        var checkOut = document.createElement("button");
        checkOut.innerText = "Check Out";
        checkOut.classList.add("btn");
        checkOut.classList.add("btn-warning");
        document.querySelector("#CartProducts>.row:last-child").appendChild(checkOut);
    }
}

FillProducts();

function ValueChanged(counter, itemTitle){
    let cart = JSON.parse(localStorage.Cart);
    if(counter.value == 0){
        var deleteItem = confirm("are you sure you want to delete this item?");
        if(deleteItem){
            for(item in cart){
                if(item == itemTitle){
                    delete cart[item];
                    localStorage.Cart = JSON.stringify(cart);
                    location.reload();
                }
            }
        }
        else{
            counter.value = 1;
        }
    }
    else{
        for(item in cart){
            if(item == itemTitle){
                cart[item].count = counter.value;
                break;
            }
        }
    }
    localStorage.Cart = JSON.stringify(cart);
}