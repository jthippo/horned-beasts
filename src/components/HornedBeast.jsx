import { useState } from "react";

export default function HornedBeast({ title, image_url, description }) {
  const [favourites, setFavourites] = useState(0);

  function handleFavourites() {
    setFavourites(favourites + 1);
  }

  return (
    <>
      <h2>{title}</h2>
      <img src={image_url} onClick={handleFavourites} />
      <span>❤️{favourites}</span>
      <p>{description}</p>
    </>
  );
}
