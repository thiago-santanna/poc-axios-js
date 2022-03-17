let txDados = document.querySelector('#dados')
let dadosUser = document.querySelector('#dados')

let inptNome = document.querySelector('#nomeUsuario')
let inptEmail = document.querySelector('#emailUsuario')
let inptSenha = document.querySelector('#senhaUsuario')

axios.get('http://localhost:8080/products/all')
    .then((response) => {
        txDados.innerHTML = response.data.map(p => `Produto: ${p.referencia
            }`)
    })
    .catch((error) => {
        console.log(error)
    })

const salvarUsuario = () => {
    axios.post('http://localhost:8080/users/', {
        nome: inptNome.value,
        email: inptEmail.value,
        password: inptSenha.value,
    })
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}


