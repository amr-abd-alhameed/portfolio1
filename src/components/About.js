import { motion } from "framer-motion";
import "../sass/About.scss";
import { HeadLine, P, BigBtn, OverLay } from "./common/index";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <OverLay />
        <div className="container">
          <HeadLine>about</HeadLine>
          <div className="one text-capitalize">
            <P
              as={motion.p}
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Frontend developer with +2 year of experience in building
              responsive websites and web applications with HTML, CSS, SASS,
              Bootstrap, tailwindCss, JavaScript, typeScript, ES6, git & GitHub,
              redux, redux toolKit and working with React.js & Next.js
            </P>
          </div>
          <div className="two text-capitalize">
            <P
              as={motion.p}
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              I'm interested in coding and making beautiful WebApps and creating
              dynamic WebSites and playing any thing in any thing in my head
              gays.
            </P>
          </div>
          <div className="three">
            <BigBtn
              href="mailto:amrabdalhameed947@gmail.com"
              dark
              color="white"
              as={motion.a}
              initial={{ x: -400, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              contact me
            </BigBtn>
            <BigBtn
              href="https://www.mediafire.com/file/z4scmdxip6xgmk1/resume-amr.pdf/file"
              target="_blank"
              as={motion.a}
              initial={{ x: 400, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              download cv
            </BigBtn>
          </div>

          {/* <HeadLine name="about" />
                        position: relative;
                        z-index: 2;
                     */}
          {/* <Button cute color="green">
                        button
                    </Button>
                    <P>fancy</P>
                    <II>finish</II> */}
        </div>
      </section>
    </>
  );
};

export default About;
