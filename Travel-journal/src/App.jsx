import './App.css'
import Card from './components/card'
import Header from './components/header'
import data from './data'

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  )
}

export default App
