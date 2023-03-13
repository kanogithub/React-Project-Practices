import ListGroup from "./components/ListGroup"
import Alert from "./components/Alert"

function App() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
  // event handler
  const handleSelectItem = (text: string) => { console.log(text) }

  return (
    <>
      <ListGroup items={items} heading={'City List'} onSelectItem={handleSelectItem} />
      <Alert><b>This</b> is alert</Alert>
    </>
  )
}

export default App
