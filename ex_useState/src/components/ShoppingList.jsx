import { useState } from "react";

function ShoppingList() {
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("");

  const [shoppingList, setShoppingList] = useState([{}]);

  const updateShoppingList = () => {
    if (!name.trim() || quantity <= 0) return alert("Invalid Input");
    setShoppingList([
      ...shoppingList,
      {
        name: name,
        quantity: quantity,
      },
    ]);
    setName("");
    setQuantity(0);
  };

  console.log(shoppingList);

  return (
    <div>
      <input
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
      </table>
    </div>
  );
}

export default ShoppingList;
