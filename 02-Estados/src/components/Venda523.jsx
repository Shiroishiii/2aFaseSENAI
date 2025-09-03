import { useState } from "react"


function Venda523() {
    const [precoVenda,setPrecoVenda] = useState()

    function calcularPreco(){
        let precoCompra = Number(prompt("Preço de compra: "))
        if(precoCompra < 20){
            setPrecoVenda(precoCompra * 1.45) 
        }else{
            setPrecoVenda(precoCompra * 1.3)
        }
        
    }

  return (
    <div>
        <h2>Venda - 5.23</h2>
        <button onClick={calcularPreco}>Calcular</button>
        {precoVenda}
    </div>
  )
}

export default Venda523