import { useEffect, useState } from "react";
import uuid from "react-uuid";

function WishList() {
  const [wishText, setWishText] = useState("");
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("myWishList"));
    setWishList(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("myWishList", JSON.stringify(wishList));
  }, [wishList]);

  const handleWishAdd = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      setWishList((list) => list.concat({ id: uuid(), wish: wishText }));
      setWishText("");
    }
  };

  const handleWishInput = (event) => {
    setWishText(event.target.value);
  };

  return (
    <div>
      <input
        onChange={handleWishInput}
        value={wishText}
        placeholder={"I wish..."}
        className="inputBox"
        onKeyDown={handleWishAdd}
      />
      <button className="primary-button" onClick={handleWishAdd}>
        Add wish{" "}
      </button>
      <ul>
        {wishList.map(({ id, wish }) => (
          <li key={id}> {wish} </li>
        ))}
      </ul>
    </div>
  );
}

export default WishList;
