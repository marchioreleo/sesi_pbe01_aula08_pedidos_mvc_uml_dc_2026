const express = require("express")
const router = express.Router()

const Cliente = require("./controllers/cliente")
const Pedido = require("./controllers/pedido")
const Produto = require("./controllers/produtos")
const Item = require("./controllers/itens")

const rotaInicial = (req, res) => {
    res.json("Pedidos MVC respondendo")
}

router.get('/', rotaInicial)

router.get('/clientes', Cliente.listar)
router.get('/pedidos', Pedido.listar)
router.get('/produtos', Produto.listar)
router.get('/itens', Item.listar)

router.post('/clientes', Cliente.criar)
router.post('/pedidos', Pedido.criar)
router.post('/produtos/:id', Produto.criar)
router.post('/itens/:id', Item.criar)

router.put('/clientes/:id', Cliente.alterar)
router.put('/pedidos/:id', Pedido.alterar)
router.put('/produtos/:id', Produto.alterar)
router.put('/itens/:id', Item.alterar)

router.delete('/clientes/:id', Cliente.excluir)
router.delete('/pedidos/:id', Pedido.excluir)
router.delete('/produtos/:id', Produto.excluir)
router.delete('/itens/:id', Item.excluir)


module.exports = router