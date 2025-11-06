import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
const [name, setName] = useState("");
const [category, setCategory] = useState('Produce');

//HANDLE FORM SUBMIT
function handleSubmit(e) {
e.preventDefault(); // to prenvent reload page

//create a new item object
const newItem= {
  id: uuid(),
  name: name,
  category: category,
  isInCart: false,
};

//pass the new item object
onItemFormSubmit(newItem);

//reset form fields
setName('');
setCategory('Produce');
}

  return (
    <form className="NewItem" onSubmit={handleSubmit}> {/* add onsubmit*/}
      <label>
        Name:
        <input 
        type="text" 
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}        />
      </label>

      <label>
        Category:
        <select 
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;