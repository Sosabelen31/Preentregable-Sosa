import fs from "fs/promises"
import path from 'path'
import express from "express"

const PORT = 8080
const app = express() 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const products = []


app.get("/", (req, res) => {
    res.send("Hola desde mi server en express")
})

app.get("/api/products", (req,res) => {


 res.status(200).send(products)

})



app.get("/api/products/:pid", (req, res) =>{
   const productId = req.params.pid 

   const producto = products.find(prod => prod.id === productId)

   if(producto) {
    res.status(200).send(producto)
   } else{
    res.status(404).send("El producto no esta en stock")
   }

})

app.post("/api/products", (req,res) =>{
let {titulo, descripcion, variedad, precio, stock} = req.body

const newProduct = {
    id: crypto.randomBytes(10).toString("hex"),
    titulo: titulo,
    descripcion: descripcion,
    variedad: variedad,
    precio:precio,
    stock: stock
}

products.push(newProduct)

res.status(201).send(`Producto creado con el id: ${newProduct.id}`)
})

app.put("/api/products/:pid", (req,res) =>{
    const productId = req.params.pid 
    
    let {variedad, precio, stock} = req.body
    
    const producto = products.findIndex(prod => prod.id === productId)
 

    if(indice != -1) {

        products[indice].titulo = titulo
        products[indice].descripcion = descripcion
        products[indice].variedad = variedad
        products[indice].precio = precio
        products[indice].stock = stock

     res.status(200).send("Producto actualizado")
    } else{
     res.status(404).send("El producto esta sin stock")
    }

} )

app.delete("/api/products/:pid" , (req,res) => {
    const productId = req.params.pid 

   const indice = products.findIndex(prod => prod.id === productId)

   if(indice != -1) {
    
   products.splice(indice, 1) 
   res.status(200).send("Producto eliminado")
    } else{
    res.status(404).send("No hay stock de este producto")
   }
 
})

app.listen(PORT, () => {
    console.log("Server on port", PORT)
})