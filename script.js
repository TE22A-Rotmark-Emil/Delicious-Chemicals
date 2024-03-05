function Buy(name, price){
    const Basket = document.querySelector(".BasketList");
    const TotalCost = document.querySelector("Price");
    let pricething = parseInt(TotalCost.innerHTML);
    let ItemList = [];
    let Item = {
        name: name,
        price: price
    }
    if (Basket.childElementCount < 6){
        ItemList.push(Item);
        console.log(ItemList);
        ItemList.forEach(element => {
            let li = document.createElement("li");
            li.textContent=element.name +  " €" + element.price;
            li.addEventListener("click", function(){
                RemoveItem(this);
            });
            Basket.append(li);
            pricething += element.price;
            pricething = Math.round(pricething);
            TotalCost.innerHTML = pricething;
        });
    }
}

function RemoveItem(li){
    const Basket = document.querySelector(".BasketList");
    Basket.remove(li);
}