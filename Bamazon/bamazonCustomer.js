//Dependencies 
var mysql = require ("mysql");
var inquirer = require ("inquirer");

//Created the connection from sql database

var connection = mysql.createConnection({

host: "localhost",
port: 3306,
user: "root",
password: "",
database: "bamazon"

});

//Connected to the mysql server and sql database

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected!")

});

// Choose all the items from the database and showed it on the terminal

connection.query("SELECT * FROM products", function(err,res){
for (var i=0; i < res.length; i++){
console.log(res[i].item_id + "|" + res[i].product_name + "|"+ res[i].department_name + "|" + res[i].price + "|" + res[i].stock_quantity);
}
});

customerChoice();

function customerChoice() {

connection.query("SELECT * FROM products"), function (err, res){
if (err) throw err;

inquirer
.prompt([{
            message: "What would you like to purchase? ",
            type: "input",
            name: "item",
            validate: function (value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
            message: "How many units you would like to purchase from this item?",
            type: "input",
            name: "units",
            validate: function (value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
         ])
     

    .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_name === answer.choice) {
            chosenItem = results[i];
          }
        }

        
        if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
          var recentStock = chosenItem.stock_quantity - answer.quantity
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: recentStock
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Your order placed successfully!");
              finish();
            }
          );
        }
        else {
          
          console.log("Item you are looking for is not in our stocks. Try again...");
          finish();
        }
      })
    }
};