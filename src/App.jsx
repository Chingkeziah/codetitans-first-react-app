import Card from "./Components/Card"
import Header from "./Components/Header"
import data from "./Data"
// created a function which display the properties of the card
// attached it to the card component so it understands what is coming in and going out

function displayCards(card){
  return (
    <Card 
      key={card.id}
      title={card.title} 
      meaning={card.meaning}
    />
  )
}

function App() {
  return (
    <>
      <Header />
      {/* the .map method is capturing data from the data file to display it */}
        {data.map(displayCards)}

    </>
  )
}

export default App
