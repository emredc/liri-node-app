var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  createMusic();
});

function createMusic() {
  console.log("Inserting a new music...\n");
  var query = connection.query(
    "INSERT INTO products SET ?",
    {
      title: "Lucille",
      artist: "B.B.King",
      genre: "blues"
    },
    function(err, res) {
      console.log(res.affectedRows + " music inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      deleteMusic();
    }
  )};

  function deleteMusic() {
    console.log("Deleting Buddy Guy...\n");
    connection.query(
      "DELETE FROM products WHERE ?",
      {
        artist: "Buddy Guy"
      },
      function(err, res) {
        console.log(res.affectedRows + " music deleted!\n");
        // Call readProducts AFTER the DELETE completes
        updateMusic();
      }
    );
  }

  function updateMusic() {
    console.log("Updating new song...\n");
    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          artist: "John Mayer"
        },
        {
          title: "Lucille" //Conditional
        }
      ],
      function(err, res) {
        console.log(res.affectedRows + " artist updated!\n");
        // Call deleteProduct AFTER the UPDATE completes
        afterConnection();
      }
    )};

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
