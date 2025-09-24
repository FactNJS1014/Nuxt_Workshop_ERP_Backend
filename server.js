const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const userController = require("./controllers/UserController");
const productType = require("./controllers/ProductType");
const materialController = require("./controllers/MaterialController");
const StockMaterialController = require("./controllers/StockMaterialController");
const PackagingController = require("./controllers/PackagingController");
const ProductController = require("./controllers/ProductController");
const ProductFormularController = require("./controllers/ProductFormularController");
const ProductionPlanController = require("./controllers/ProductionPlanController");
const ProductionController = require("./controllers/ProductionController");
const ReportController = require("./controllers/ReportController");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
//Users
//
app.put("/api/user/updateUser/:id", userController.updateUser);
app.get("/api/user/list", userController.list);
app.delete("/api/user/remove/:id", userController.remove);
app.post("/api/user/create", userController.create);
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
app.get("/api/stockMaterial/list", StockMaterialController.list);
app.delete("/api/stockMaterial/remove/:id", StockMaterialController.remove);

//Packaging
app.post("/api/packaging/create", PackagingController.create);
app.get("/api/packaging/list", PackagingController.list);
app.delete("/api/packaging/remove/:id", PackagingController.remove);
app.put("/api/packaging/update/:id", PackagingController.update);

//product
app.delete("/api/product/remove/:id", ProductController.remove);
app.put("/api/product/update/:id", ProductController.update);
app.get("/api/product/list", ProductController.list);
app.post("/api/product/create", ProductController.create);

//productFormular

app.get("/api/productFormular/list/:productId", ProductFormularController.list);
app.post("/api/productFormular/create", ProductFormularController.create);
app.put("/api/productFormular/update/:id", ProductFormularController.update);
app.delete(
  "/api/productFormular/remove/:formularId",
  ProductFormularController.remove
);

//productionPlan
app.get("/api/productionPlan/list", ProductionPlanController.list);
app.post("/api/productionPlan/create", ProductionPlanController.create);
app.put("/api/productionPlan/update/:id", ProductionPlanController.update);
app.delete("/api/productionPlan/remove/:id", ProductionPlanController.remove);

//production
app.post("/api/production/create", ProductionController.create);
app.get("/api/production/list/:productionPlanId", ProductionController.list);
app.put("/api/production/update/:id", ProductionController.update);
app.delete("/api/production/remove/:id", ProductionController.remove);

//report
app.post("/api/report/production", ReportController.production);
app.get("/api/report/productsAndCost", ReportController.productsAndCost);
app.post(
  "/api/report/sumProductionPlanPerYearAndMonth",
  ReportController.sumProductionPlanPerYearAndMonth
);
app.post(
  "/api/report/sumProductionPerYearAndMonth",
  ReportController.sumProductionPerYearAndMonth
);
app.post(
  "/api/report/sumPriceStockMaterial",
  ReportController.sumPriceStockMaterial
);
app.post(
  "/api/report/sumProductionPerMonthAndYear",
  ReportController.sumProductionPerMonthAndYear
);
app.post(
  "/api/report/sumProductPerDayInMonthAndYear",
  ReportController.sumProductPerDayInMonthAndYear
);

// app.listen(3001, "0.0.0.0", () => {
//   console.log("Server is running on port 3001");
// });
// ✅ export app สำหรับ Vercel
module.exports = app;
