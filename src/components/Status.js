export default function Status ({totalItems,packedItems}) {
    if (totalItems === 0) {
        return <footer className="stats">
            <em>Start adding items and be ready to go. 🚀</em>
        </footer>
    }
    const percentage = totalItems===0 ? 0 : Math.round((packedItems/totalItems)*100)
    return <footer className="stats">
        <em>
        {percentage===100? 'All done! Ready to go ✈️':
        `💼 You have ${totalItems} items on your list and have already have packed ${packedItems} items, (${percentage}%)`
        }
        </em>
    </footer>
}