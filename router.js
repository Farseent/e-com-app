const fs = require("fs");
const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Read data from `db.json` and `order.json`
const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
const orders = JSON.parse(fs.readFileSync("./order.json", "utf-8"));

// Middleware to use static JSON Server features
server.use(middlewares);

// Orders endpoint (GET all orders)
server.get("/orders", (req, res) => {
  res.json(orders);
});

// Orders endpoint (POST a new order)
server.post("/orders", (req, res) => {
  const newOrder = req.body;

  if (!newOrder || !newOrder.email || !newOrder.items || !newOrder.total) {
    return res.status(400).json({ error: "Invalid order data" });
  }

  newOrder.id = orders.length + 1; // Auto-increment order ID
  orders.push(newOrder);

  fs.writeFileSync("./order.json", JSON.stringify(orders, null, 2), "utf-8");

  res.status(201).json(newOrder);
});

// Attach the default JSON Server router for `db.json`
server.use(jsonServer.router(db));

// Start the server
server.listen(5000, () => {
  console.log("JSON Server is running on port 5000");
});
