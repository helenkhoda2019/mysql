var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  else {
    console.log("connected as id " + connection.threadId);
    displayProducts();
    //display the user the list of products thorough a function
  }
});

//display the user the list of products
function displayProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) {
      console.log(err)
    }
    if (res) {
      // for (var i = 0; i < res.length; i++) {
      //   console.log('---------------------')
      //   console.log('Product Id:' + res[i].item_id)
      //   console.log('Product Name:' + res[i].product_name)
      //   console.log('Depatment:' + res[i].department)
      //   console.log('Price:' + res[i].price)
      //   console.log('Quantity: ' + res[i].stock_quantity)
      //   console.log('--------------------')
      // }
      console.table(res);
    }
    processPurchase();
  })
}



//the user can buy a product through the id of the product


function processPurchase() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "productID",
        message: "Which product id would you like to purchase?"
      },
      {
        type: "input",
        name: "quantity",
        message: "How many would you like to purchase?"
      },
    ])
    .then(function (answer) {
      var id = answer.productID;
      var quantity = parseInt(answer.quantity);
      lookIntoInventory(id, quantity)
      // useritem = purchase.productID;
      // userquantity= purchase.quantity;
      // console.log(`You chose to purchase ${userquantity} ${databaseres[useritem-1].product_name}(s).`);
      // checkforquantity();
    })
}



//you have to see if you have enough products in the inventory
function lookIntoInventory(itemId, quantity) {
  connection.query('SELECT * from products WHERE item_id=?', [itemId], function (err, res) {
    if (err) throw err;
    if (res) {
      console.log(quantity);
      console.log(typeof quantity)
      if (res[0].stock_quantity>= quantity){
        var newQuantity = res.stock_quantity - parseInt(quantity);
        console.log("we have enough! " +newQuantity +" :: "+ typeof newQuantity)
        updateinventory(itemId, newQuantity)
      } 
      // console.log("cust wants this many: " + quantity);
      // console.log("We have this many: " + res[0].stock_quantity);
    }
  })
}

function updateinventory(itemId, quantity) {
  console.log(quantity,typeof quantity);
  connection.query('UPDATE products SET ? where ?', [{stock_quantity:quantity},{item_id: itemId}], function (err, res) {
    if (err) console.log(err);
  })
}

  //code here






//and you are going to process the purchase


// and you are going to update your inventory



//if you don't have enough you are going to tell the to select again
















// function productdisplay(){


// }

// function userprompt() {
//     inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 name: 'action',
//                 message: 'id of products customers like to buy?',
//                 choices: [
//                     'CD',
//                     'DVD',

//                 ]
//             },
//         ])
//         .then(choice => {
//             var actionchoice = choice.action

//             if (actionchoice == "CD") {
//                 CDitem();
//             }
//             if (actionchoice == "DVD") {
//                 DVDitem();
//             }

//         })
//  };


//  inquirer
//   .prompt([
//     {
//         type: "input",
//         name: "productID",
//         message: "Which product would you like to purchase?"
//       },
//       {
//         type: "input",
//         name: "quantity",
//         message: "How many would you like to purchase?"
//       },
//   ])
//   .then(function(purchase) {

//     useritem = purchase.productID;
//     userquantity= purchase.quantity;
//     console.log(`You chose to purchase ${userquantity} ${databaseres[useritem-1].product_name}(s).`);
//     checkforquantity();

//   })





