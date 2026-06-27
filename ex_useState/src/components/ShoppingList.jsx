import { useState } from "react";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setName("");
    setQuantity("");
  };
  // const [quantity, setQuantity] = useState(0);
  // const [name, setName] = useState("");

  // const [shoppingList, setShoppingList] = useState([{}]);

  // const updateShoppingList = () => {
  //   if (!name.trim() || quantity <= 0) return alert("Invalid Input");
  //   setShoppingList([
  //     ...shoppingList,
  //     {
  //       name: name,
  //       quantity: quantity,
  //     },
  //   ]);
  //   setName("");
  //   setQuantity(0);
  // };

  // console.log(shoppingList);

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Qty: {item.quantity}
          </li>
        ))}
      </ul>
      {/* <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={updateShoppingList}>add product</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default ShoppingList;
