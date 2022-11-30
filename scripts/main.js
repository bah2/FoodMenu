"use strict";

let menu = {
  

  drinks: [
    "Select a Drink",
    "Water",
    "Tea",
    "Sweet Tea",
    "Coke",
    "Dr. Pepper",
    "Sprite",
  ],
  entrees: [
    "Select a Entree",
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: [
    "Select a Dessert",
    "Cheesecake",
    "Chocolate Cake",
    "Snickerdoodle Cookie",
  ],
  appleJuice: [
    "Select a Dessert",
    "Cheesecake",
    "Chocolate Cake",
    "Snickerdoodle Cookie",
  ]
 
};
document.getElementById("menuItemsId").style.display = "none";
window.onload = function () {
  const menuItems = document.getElementById("menuItemsId"); //parent
  const menuId = document.getElementById("menuId");

  menuId.onchange = function () {
    menuItems.length = 0;

    if (menuId.selectedIndex == 1) {
      for (let i = 0; i < menu.appleJuice.length; i++) {
        const options = document.createElement("option");
        options.innerHTML = menu.appleJuice[i];
        menuItems.appendChild(options);
      }
      menuItems.style.display = "inline-block";
    } else if (menuId.selectedIndex == 0) {
      for (let i = 0; i < menu.drinks.length; i++) {
        const options = document.createElement("option");
        options.text = menu.drinks[i];
        menuItems.appendChild(options);
      }
      menuItems.style.display = "inline-block";
    } else if (menuId.selectedIndex == [2]) {
      for (let i = 0; i < menu.entrees.length; i++) {
        const options = document.createElement("option");
        options.text = menu.entrees[i];
        menuItems.appendChild(options);
      }
      menuItems.style.display = "inline-block";
    } else if (menuId.selectedIndex == [3]) {
      for (let i = 0; i < menu.desserts.length; i++) {
        const options = document.createElement("option");
       
        options.text = menu.desserts[i];
        // options.innerHTML = menu.desserts[i];
        menuItems.appendChild(options);
      }
      menuItems.style.display = "inline-block";
    } else {
      menuItems.style.display = "none";
    }
  };
  
   
};
