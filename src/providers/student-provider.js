// FIXME: mock
const result = [
  {
    name: 'Ana Ferreira',
    age: 18
  },
  {
    name: 'Graciane Pinheiro Batista',
    age: 20
  },
  {
    name: 'Zeina Oliveira',
    age: 25
  }
]

const list = async (query) => {
  console.log('search', query)
  if (!query || !query.length) {
    return result
  }

  const token = query.toLowerCase()
  return result.filter(it => {
    console.log(it.name.toLowerCase(), token)
    return it.name.toLowerCase().indexOf(token) !== -1
  })
}

export default {
  list
}
