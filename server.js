const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const userController = require("./controllers/UserController");
const productType = require("./controllers/ProductType");
const materialController = require("./controllers/MaterialController");
const StockMaterialController = require("./controllers/StockMaterialController");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
//Users
//
app.post("/api/user/signIn", userController.signIn);
app.get("/api/user/info", userController.info);
app.put("/api/user/update", userController.update);

//productType
app.post("/api/productType/create", productType.create);
app.get("/api/productType/list", productType.list);
app.put("/api/productType/update/:id", productType.update);
app.delete("/api/productType/remove/:id", productType.remove);

//material
app.delete("/api/material/remove/:id", materialController.remove);
app.put("/api/material/update/:id", materialController.update);
app.get("/api/material/list", materialController.list);
app.post("/api/material/create", materialController.create);

//stockMaterial
app.post("/api/stockMaterial/create", StockMaterialController.create);

app.listen(3001, "0.0.0.0", () => {
  console.log("Server running on port 3001");
});
