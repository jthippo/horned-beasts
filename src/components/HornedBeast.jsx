import { useState } from "react";

export default function HornedBeast({
  title,
  image_url,
  description,
  handleShowModal,
}) {
  const [favourites, setFavourites] = useState(0);

  function handleFavourites() {
    setFavourites(favourites + 1);
  }

  return (
    <div className="card">
      <img
        src={image_url}
        onClick={() => handleShowModal({ title, image_url })}
      />
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
        <p onClick={handleFavourites}>❤️{favourites}</p>
      </div>
    </div>
  );
}
