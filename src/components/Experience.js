import "../sass/Experience.scss";import { Card, CardII, CardIII, Collector, HeadLine } from "./common/index";

const Experience = () => {
  return (
    <>
      <section className="section" id="experience">
        <HeadLine color="white">work experience</HeadLine>
        <div className="container call">
          <span className="ons"></span>

          <Collector revers>
            <Card color="white">
              kalponian almarsos was a very interesting adventure in programming{" "}
              <br />
              • Learn programming fundamentals <br />• The basics of OOB, Data
              Structure , Algorithms
              <br />• APIs and Web Services
              <br />• Create Professional Web Apps
            </Card>
            <CardIII
              title="frontEnd developer"
              company="kalponian almarsos "
              start="Apr 2022"
              end="Nov 2022"
            />
          </Collector>
          <Collector black>
            <CardIII
              title="frontEnd developer"
              company="Fiver "
              start="Nov 2022"
              end="present"
            />
            <CardII>
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
