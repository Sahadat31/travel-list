import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Status from "./components/Status";


function App() {
  const [items,setItems] = useState([])
  const clearItems = () => {
    setItems([])
  } 
  const handleItems = (item) => {
    setItems(items=>[...items,item])
  }
  const onDeleteItems = (id) => {
    setItems(items=> items.filter(item=> item.id !== id))
  }
  const toggleItems = (id) => {
    setItems(items=> items.map(item=> item.id===id ? {...item,packed: !item.packed} : item))
  }
  const packedItems = items.filter(item=> item.packed===true).length
  return <div className="app">
    <Logo></Logo>
    <Form onAddItem={handleItems} items={items}></Form>
    <PackingList 
    items={items} 
    onDeleteItems={onDeleteItems} 
    toggleItems={toggleItems}
    clearItems={clearItems}></PackingList>
    <Status totalItems={items.length} packedItems={packedItems}></Status>
  </div>
}

export default App;
