import "../sass/About.scss";import { HeadLine, P, BigBtn, OverLay } from "./common/index";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <OverLay />
        <div className="container">
          <HeadLine>about</HeadLine>
          <div className="one">
            <P>
              I'm interested in coding and making beautiful WebApps and creating
              dynamic WebSites
            </P>
          </div>
          <div className="two">
            <P>
              I'm interested in coding and making beautiful WebApps and creating
              dynamic WebSites and playing any thing in any thing in my head
              gays.
            </P>
          </div>
          <div className="three">
            <BigBtn href="mailto:amrabdalhameed947@gmail.com" dark>
              contact me
            </BigBtn>
            <BigBtn
              href="https://www.mediafire.com/file/fdhkhb0wtj1m27p/resume.docx/file"
              target="_blank"
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
