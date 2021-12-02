async function getClientesOpt() {
  clientes =[]
  fetch('https://api-estacionamento.herokuapp.com/clientes').then(response => {
      return response.json();
  })
      .then(data => {
          clientes.push(data);
          let select = document.getElementById('cliente')

          clientes[0].forEach(
              element => {
                  let opt = document.createElement('option')
                  opt.setAttribute("value", element.id);
                  opt.innerHTML= element.nome;
                  select.appendChild(opt)
              }
          )  
      })
}
getClientesOpt()


async function cadastrarCarro() {
  let marca = document.getElementById("marca").value
  let modelo = document.getElementById("modelo").value
  let cor = document.getElementById("cor").value
  let placa = document.getElementById("placa").value
  let cliente = document.getElementById("cliente").value



  let data = {
      "marca": marca,
      "modelo": modelo,
      "cor": cor,
      "placa":placa,
      "cliente": {
          "id": cliente
      }
  };
  await fetch('https://api-estacionamento.herokuapp.com/carros', {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)

  })
      .then((res) => { return res.json(); })
      .then((data) => { console.log(data) })
      .catch((err) => { console.log(err) })
}

document.getElementById("cadastroCarro").addEventListener("click", cadastrarCarro)