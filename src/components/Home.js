import "../sass/Home.scss";
import circle from "../../src/assets/images/circle-512.png";
import man from "../../src/assets/images/men-suit-png-9471.png";
import { Icons, Text } from "./common";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="rings">
            <span className="one"></span>
            <img loading="lazy" className="two" src={circle} alt="" />
            <img loading="lazy" className="three" src={man} alt="" />
          </div>
          <Icons />

          <Text />
        </div>
      </section>
    </>
  );
};

export default Home;
