const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/api/products', productRouter)



app.get('/api/carts', (req,res) => {
    res.send('get carts')
})
app.post('/api/carts', (req,res) => {
    res.send('create carts')
})
app.put('/api/carts', (req,res) => {
    res.send('update carts')
})
app.delete('/api/carts', (req,res) => {
    res.send('delete carts')
})