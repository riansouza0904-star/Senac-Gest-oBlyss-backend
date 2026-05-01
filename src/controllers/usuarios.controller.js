let usuarios = [ 
      {    
    id: 1,
    "nome": "Cleitin",
    "telefone": "(27) 4002-8922",
    "email": "cleitin@email.com",
    "idade": 67,
  },
  {
    id: 2,
    "nome": "Rian",
    "telefone": "(27) 99999-1234",
    "email": "rian@email.com",
    "idade": 19
  },
  {
    id: 3,
    "nome": "Carlos",
    "telefone": "(27) 98888-5678",
    "email": "Carlos@email.com",
    "idade": 18
  },
  {
    id: 4,
    "nome": "Nolan",
    "telefone": "(27) 97777-4321",
    "email": "nolan@email.com",
    "idade": 25
  }
]

const listar = (req, res) => res.json(usuarios)

const filtrarid = (req, res) => {
  const usuario = usuarios.find(u => u.id === Number(req.params.id))
  if (!usuario) return res.status(404).json({ message: "Usuário não encontrado" })
  res.json(usuario)
}

export default { listar, filtrarid} 