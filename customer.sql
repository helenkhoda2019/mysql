DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;
use bamazon_db;

CREATE TABLE products (
 item_id INTEGER AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
 department VARCHAR(45) NOT NULL,
 price decimal(10,2) NOT NULL,
 stock_quantity INTEGER (10) NOT NULL,
 
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department,price,stock_quantity)
VALUES ( "notebook","netfliex", 10.2,3);
INSERT INTO products (product_name, department,price,stock_quantity)
VALUES ( "The matriex","netfliex", 10.2,3);
INSERT INTO products (product_name, department,price,stock_quantity)
VALUES ( "love me","netfliex", 10.2,3);
INSERT INTO products (product_name, department,price,stock_quantity)
VALUES ( "taco","food", 10.2,3);
INSERT INTO products (product_name, department,price,stock_quantity)
VALUES ( "hamberger","food", 10.2,3);
INSERT INTO products (product_name, department,price,stock_quantity)
VALUES ( "salad","food", 10.2,3);
INSERT INTO products (product_name, department,price,stock_quantity)
VALUES ("story","book", 10.2,3);
INSERT INTO products (product_name, department,price,stock_quantity)
VALUES ( "romatic","book", 10.2,3);
INSERT INTO products (product_name, department,price,stock_quantity)
VALUES ( "scary","book", 10.2,3);
INSERT INTO products (product_name, department,price,stock_quantity)
VALUES ( "funny","book", 10.2,3);

