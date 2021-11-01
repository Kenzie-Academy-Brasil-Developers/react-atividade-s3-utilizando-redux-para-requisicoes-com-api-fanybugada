import { useSelector } from "react-redux";
import "./style.css";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);

  if (digimons[0] === undefined) {
    return <p>Pesquise pelo nome o digimon desejado!</p>;
  }

  return (
    <section className="digimonsSection">
      {digimons.map((digimon, index) => {
        return (
          <div key={index}>
            <img src={digimon.img} alt="" />
            <h4>{digimon.name}</h4>
            <h4>{digimon.level}</h4>
          </div>
        );
      })}
    </section>
  );
};

export default Digimons;
