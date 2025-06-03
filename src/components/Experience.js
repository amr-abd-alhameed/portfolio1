import "../sass/Experience.scss";
import { Card, CardII, CardIII, Collector, HeadLine } from "./common/index";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <>
      <section className="section" id="experience">
        <HeadLine color="white">work experience</HeadLine>
        <div className="container call">
          <span className="ons"></span>

          <Collector revers>
            <Card
              color="white"
              as={motion.div}
              initial={{ x: -400, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              kalponian almarsos was a very interesting adventure in programming{" "}
              <br />
              • Learn programming fundamentals <br />• The basics of OOB, Data
              Structure , Algorithms
              <br />• APIs and Web Services
              <br />• Create Professional Web Apps
            </Card>
            <CardIII
              num={400}
              title="frontEnd developer"
              company="kalponian almarsos "
              start="Apr 2022"
              end="Nov 2022"
            />
          </Collector>
          <Collector black>
            <CardIII
              num={-400}
              title="frontEnd developer"
              company="Fiver "
              start="Nov 2022"
              end="present"
            />
            <CardII
              as={motion.div}
              initial={{ x: 400, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              {" "}
              • Building stable and maintainable codebase using JavaScript and
              React.js.
              <br />
              • Implementing a mobile-first approach to existing websites.
              <br />• Creating modular, responsive templates using modern CSS
              techniques and JavaScript libraries
              <br />• Leveraging responsive web frameworks
            </CardII>
          </Collector>
        </div>
      </section>
    </>
  );
};

export default Experience;
