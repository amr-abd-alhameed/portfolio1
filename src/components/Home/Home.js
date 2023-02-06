import "./Home.scss";

import circle from "../../../src/assets/images/circle-512.png";
import man from "../../../src/assets/images/men-suit-png-9471.png";

import Text from "./component/Text";
import Icons from "./component/Icons";

const Home = () => {
    return (
        <>
            <section className="home">
                <div className="container">
                    <div className="rings">
                        <span className="one"></span>
                        <img className="two" src={circle} alt="" />
                        <img className="three" src={man} alt="" />
                    </div>
                    <Icons />

                    <Text />
                </div>
            </section>
        </>
    );
};

export default Home;
