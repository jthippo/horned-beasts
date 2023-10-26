import HornedBeast from "./HornedBeast";

export default function Gallery({ beasts, handleShowModal }) {
  return (
    <div>
      {beasts.map((beast) => {
        return (
          <HornedBeast
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description}
            handleShowModal={handleShowModal}
          />
        );
      })}
    </div>
  );
}
