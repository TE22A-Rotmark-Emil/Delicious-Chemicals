function Buy(name, price){
    const Basket = document.querySelector(".Basket");
    let ItemList = [];
    let Item = {
        name: name,
        price: price
    }
    ItemList.push(Item);
    console.log(ItemList);
    ItemList.forEach(element => {
        let li = document.createElement("li");
        li.textContent=element.name +  " $" + element.price;
        Basket.append(li);
    });
}