import HornedBeast from "./HornedBeast";

export default function Gallery(props) {
  return (
    <div>
      {props.beasts.map((beast) => {
        return (
          <HornedBeast
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description}
          />
        );
      })}
    </div>
  );
}
