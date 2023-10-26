export default function SelectedBeast({ shownBeast, handleShowModal }) {
  return (
    <div className="modal" onClick={handleShowModal}>
      <h2>{shownBeast.title}</h2>
      <img className="bigBeast" src={shownBeast.image_url} />
    </div>
  );
}
