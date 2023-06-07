import TourItem from "./TourItem";
import "./TourItem.css";

const Home = () => {
  const tourItems = [
    {
      id: 1,
      date: "JUL16",
      place: "DETROIT,MI",
      spec_place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      id: 2,
      date: "JUL19",
      place: "TORONTO,ON",
      spec_place: "TORONTO,ON",
    },
    {
      id: 3,
      date: "JUL22",
      place: "BRISTOW, VA",
      spec_place: "JIGGY LUBE LIVE",
    },
    {
      id: 4,
      date: "JUL29",
      place: "PHOENIX, AZ",
      spec_place: "PHOENIX, AZ",
    },
    {
      id: 5,
      date: "AUG2",
      place: "LAS VEGAS, NV",
      spec_place: "T-MOBILE ARENA",
    },
    {
      id: 6,
      date: "AUG7",
      place: "CONCORD, CA",
      spec_place: "CONCORD PAVILION",
    },
  ];
  return (
    <section className="tourContainer">
      <h1>Tours</h1>
      {tourItems.map((item) => {
        return <TourItem key={item.id} item={item} />;
      })}
    </section>
  );
};

export default Home;
