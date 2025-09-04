import { use, useState } from "react"

function Garcom531() {
    const [resultado, setResultado] = useState()

    function verificar(){
        let salario = Number(prompt('Digite o valor do seu salário: '))
        let emprestimo = Number(prompt('Digite o valor que deseja como empréstimo: '))
        let numPrestacoes = Number(prompt('Digite o número de prestações: '))

        let porcentagemSalario = salario * 0.3
        let valorPrestacoes = emprestimo/numPrestacoes 
        let resultado = ''

        if (salario === '' && salario > 0 || emprestimo === '' && emprestimo > 0||numPrestacoes == '' && numPrestacoes > 0){
            alert('Nenhum campo pode estar vazio')
        }

        if(valorPrestacoes > porcentagemSalario){
            resultado = 'O empréstimo não pode ser concedido'
        }else{
            resultado = 'O empréstimo pode ser concedido'
        }

        setResultado(resultado)
    }

  return (
    <div>
        <h1>Não tem garçom de cara feia - 5.31</h1>
        <button onClick={verificar}>Verificar empréstimo</button>
        <p>resultado:
            {resultado}
        </p>
    </div>
  )
}

export default Garcom531