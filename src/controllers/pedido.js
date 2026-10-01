const pedidos = require("../../dados/pedidos.json")
const item = require(".././controllers/itens")
const listarItens = require("../../dados/itens.json")
const produtos = require("../../dados/produtos.json")


function calcTotais(req, res) {

    // listarItens.forEach(i => {
    //     const aux2 = listarProdutos.find(l => l.id == i.id)
    //     i.preco = aux2.preco
    // })

    pedidos.forEach(p => {

        let total = 0
        const aux = listarItens.filter(i => i.pedido_id == p.id)

        aux.forEach(a => {
            total += a.quantidade * produtos.find(p => p.id == a.produto_id).preco
        })

        console.log(p.id, total)

    })

    res.send()

}


const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1
    pedidos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    calcTotais()
    res.json(pedidos)
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    let status = 0

    pedidos.forEach((pedido) => {
        if (pedido.id == id) {
            pedido.cliente_id = dados.cliente_id
            pedido.data = dados.data
            status = 1
        }
    })
    if (status == 1) {
        res.send("Pedido atualizado com sucesso")
    } else {
        res.status(404).send("Erro ao atualizar pedido")
    }

}

const excluir = (req, res) => {
    const id = req.params.id
    let status = 0

    pedidos.forEach((pedido, indice) => {
        if (pedido.id == id) {
            status = 1
            pedidos.splice(indice, 1)
        }
    })
    if (status == 1) {
        res.send("Pedido excluido com sucesso")
    } else {
        res.status(404).send("Erro ao excluir pedido")
    }
}


module.exports = {
    criar,
    listar,
    alterar,
    excluir
}