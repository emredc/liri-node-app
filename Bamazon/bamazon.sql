DROP DATABASE bamazon;
CREATE DATABASE bamazon;

USE bamazon;
CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(7,2) NOT NULL,
stock_quantity INTEGER (25) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Phantom Soccer Cleats", "Shoes", 68.35,35);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Magnetico Turf Soccer Shoe","Shoes",70,30);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Flight Fleece Air Hoodie","Clothing",77.59,22);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Camo Blackbird Hoodie","Clothing",54.95,36);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Outdoor Backpacking Camping Stove","Outdoor",13.99,150);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Camping Cookware and Pot Set","Outdoor",46.99,120);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Falcon Water Repellent Hiking Camping Backpack","Outdoor",69.99,75);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("LG 65-Inch 4K Ultra HD SmartTV","Electronics",2996.99,38);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Portable Mini Projector","Electronics",399,65);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Too Big to Fail","Books",17.00,255);

SELECT * FROM products;