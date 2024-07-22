import { useState } from "react"

export default function Form ({onAddItem,items}) {

    const [description,setdescription] = useState('')
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (description==='') return
        const newItem = {description,quantity,packed: false, id:items.length+1}
        onAddItem(newItem)
        setdescription('')
        setQuantity(1)
    }
    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you want to add for your travel list 😍</h3>
        <select value={quantity} onChange={e=> setQuantity(Number(e.target.value))}>
            {
            Array.from({length:20}, (_,i)=> i+1)
            .map(num=>
                <option value={num} key={num}>{num}</option>
            )}
        </select>
        <input type="text" placeholder="Input items..." value={description} onChange={e=>setdescription(e.target.value)}></input>
        <button>Add</button>
    </form>
}