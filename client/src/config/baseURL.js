
const baseURL =
  process.env.REACT_APP_ENV === "development"
    ? "http://localhost:5000/items"
    : "https://grocery-shopping-list-app.herokuapp.com/items";

export default baseURL;