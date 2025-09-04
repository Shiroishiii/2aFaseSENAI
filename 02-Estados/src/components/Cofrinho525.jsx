import { useState } from "react"

function Cofrinho525() {
    const [saldo, setSaldo] = useState()
    const [precoProduto, setPrecoProduto] = useState()

    function verificar(){
        const moedasUm = 1.00
        const moedasCinquenta = 0.50
        const moedasVinteCinco = 0.25
        const moedasDez = 0.10
        const moedasCinco = 0.5

        let preco = Number(prompt("Qual o valor do produto que deseja comprar?"))
        let qtndMoedasUm = Number(prompt("Qual a quantidade de moedas de R$1,00?"))
        let qtndMoedasCinquenta = Number(prompt("Qual a quantidade de moedas de R$0,50?"))
        let qtndMoedasVinteCinco = Number(prompt("Qual a quantidade de moedas de R$0,25?"))
        let qtndMoedasDez = Number(prompt("Qual a quantidade de moedas de R$0,10?"))
        let qtndMoedasCinco = Number(prompt("Qual a quantidade de moedas de R$0,5?"))

        setPrecoProduto(preco)

        const soma = (qtndMoedasUm * moedasUm)+(qtndMoedasCinquenta * moedasCinquenta)+(qtndMoedasVinteCinco * moedasVinteCinco)+(qtndMoedasDez * moedasDez)+(qtndMoedasCinco + moedasCinco)

        setSaldo(soma)

        if (soma >= preco){
            alert("Você tem o suficiente para comprar, PARABÉNS!!!")
        }else{
            alert("Ainda falta um pouco")
        }

    }

  return (
    <div>
     <h1>Cofrinho - 5.25</h1>
     <button onClick={verificar}>Verificar dinheiro</button>
    </div>
  )
}

export default Cofrinho525