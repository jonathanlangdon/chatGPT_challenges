-- retrieve the OrderID and OrderStatus from an Orders table where the OrderStatus is not 'Shipped'.

SELECT OrderID, OrderStatus FROM Orders WHERE OrderStatus != 'Shipped'