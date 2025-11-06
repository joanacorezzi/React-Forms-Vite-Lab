import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
const [searchText, setSearchText]  = useState(''); 

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
function handleSearchChange(newSearchText) {
  setSearchText(newSearchText)
}
//add function to handle new item submission
function handleItemFormSubmit(newItem) {
  setItems([...items, newItem]); //add new item to the list
} 

//filter items based on search
const itemsToDisplay = items.filter((item) => {
return item.name.toLowerCase().includes(searchText.toLowerCase())
});

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
<Filter
search={searchText}
onSearchChange={handleSearchChange}
/>

{/* add itemForm and apss down the callback*/ }
<ItemForm onItemFormSubmit={handleItemFormSubmit} />

{/* show filtered item */}
<ShoppingList items={itemsToDisplay} />
    </div>
  );
}

export default App;