export const getItemsFromLocalStorage = () => {
  const storedItems = localStorage.getItem("items");
  return storedItems ? JSON.parse(storedItems) : "";
};

export const setItemsInLocalStorage = (newItems) => {
  localStorage.setItem("items", JSON.stringify(newItems));
  console.log(newItems,'setItemsInLocalStorage')
};
