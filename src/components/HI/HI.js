import "./HI.scss";

import Icons from "../Home/component/Icons";
import OverLay from "../common/OverLay";
const HI = () => {
    return (
        <>
            <section className="HI">
                <OverLay />
                <div className="container">
                    <div className="all">
                        <h2>let's say hi</h2>
                        <p>amrabdalhameed947@gmail.com</p>
                        <Icons />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HI;
