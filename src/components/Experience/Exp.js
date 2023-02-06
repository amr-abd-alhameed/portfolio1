import "./Exp.scss";
import { Card, CardII } from "./component/Card";
import CardIII from "./component/CardIII";
import Collector from "./component/Collector";

import { HeadLine } from "../common";

const Exp = () => {
    return (
        <>
            <section className="section">
                <HeadLine color="white">work experience</HeadLine>
                <div className="container call">
                    <span className="ons"></span>

                    <Collector revers>
                        <Card color="white">
                            hi gays I'm happy that i am with you
                        </Card>
                        <CardIII
                            title="frontEnd developer"
                            company="kalponian almarsos "
                            start="2022"
                            end="present"
                        ></CardIII>
                    </Collector>
                    <Collector black>
                        <CardIII
                            title="frontEnd developer"
                            company="Fiver "
                            start="2022"
                            end="present"
                        ></CardIII>
                        <CardII> hi gays I'm happy that i am with you</CardII>
                    </Collector>
                </div>
            </section>
        </>
    );
};

export default Exp;
