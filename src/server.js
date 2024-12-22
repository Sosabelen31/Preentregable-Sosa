import express from "express";
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.listen(8080, () => console.log("server ok puerto 8080"));

app.listen(PORT, () => {
    console.log("Server on port", PORT)
})