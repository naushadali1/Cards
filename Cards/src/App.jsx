import './App.css'
import Card from './Card.jsx'
function App() {
  const cards = [
    {
      id: 1,
      title: " Card Title1",
      content: "Card Content1"
    },
    {
      id: 2,
      title: " Card Title2",
      content: "Card Content2"
    },
    {
      id: 3,
      title: " Card Title3",
      content: "Card Content3"
    }
  ]
  return (
    <>
      {cards.map((card) => {
        return <div >
          <Card key={card.id} title={card.title} content={card.content} />
        </div>
      })}
    </>
  )
}

export default App
