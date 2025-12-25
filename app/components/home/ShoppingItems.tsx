export default function ShoppingItems() {
  return (
    <div>
      <h2>Shopping Items</h2>
      <ul>
        <li>
          <input type="checkbox" /> Item 1 - $10 - Qty: 2 = $20
          <button className="ml-5">X</button>
        </li>
        <li>
          <input type="checkbox" /> Item 2 - $5 - Qty: 1 = $5
          <button className="ml-5">X</button>
        </li>
        <li>
          <input type="checkbox" /> Item 3 - $15 - Qty: 3 = $45
          <button className="ml-5">X</button>
        </li>
      </ul>
    </div>
  );
}
