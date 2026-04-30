const usuarios = [ 
      {    
    id: Date.now(),
    nome: "Cleitin",
    telefone: "(27) 4002-8922",
    email: "cleitin@email.com",
    idade: 67,
  },
  {
    id: Date.now(),
    nome: "Rian",
    telefone: "(27) 99999-1234",
    email: "rian@email.com",
    idade: 19
  },
  {
    id: Date.now(),
    nome: "Carlos",
    telefone: "(27) 98888-5678",
    email: "Carlos@email.com",
    idade: 18
  },
  {
    id: Date.now(),
    nome: "Nolan",
    telefone: "(27) 97777-4321",
    email: "nolan@email.com",
    idade: 25
  }
]

const listar = (req, res) => {res.json([])}

export default { listar }