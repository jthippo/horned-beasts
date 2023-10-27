import HornedBeast from "./HornedBeast";

export default function Gallery({ beasts, handleShowModal, horns }) {
  const filteredHorns = beasts.filter(
    (beast) => beast.horns == horns || horns === ""
  );

  return (
    <div className="cardHolder">
      {filteredHorns.map((beast) => {
        return (
          <HornedBeast
            key={beast._id}
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
