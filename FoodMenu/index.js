let menu = {
  drinks: ["Water", "Sweet Tea", "Pepsi", "Orange Fanta", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};
const FoodItemsEl = document.getElementById("foodItems");
function menuFunction() {
    const dropDown = document.getElementById("menuSelector");
    let selectedValue = dropDown.value;
    if (selectedValue == "drinks") {
        console.log(menu.drinks);
        onmenuitemSelected(menu.drinks);
    }
    if (selectedValue == "entrees") {
        console.log(menu.entrees);
        onmenuitemSelected(menu.entrees);
    }
    if (selectedValue == "desserts") {
        console.log(menu.desserts);
        onmenuitemSelected(menu.desserts);
    } else if (selectedValue == "") {
        FoodItemsEl.options.length = 0;
        FoodItemsEl.size = 0;
    }
}

function onmenuitemSelected(itemsList) {
    FoodItemsEl.size = itemsList.length
    FoodItemsEl.options.length = 0;
    for (let i = 0; i < itemsList.length; i++) {
        const optionsEl = document.createElement('option')
        optionsEl.textContent = itemsList[i];
        FoodItemsEl.appendChild(optionsEl)
    }
}
      
  
    

var menuVariable = document.getElementById("menuSelector")

    menuVariable.onchange = menuFunction;
