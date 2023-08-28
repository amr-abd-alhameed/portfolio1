import "../sass/Contact.scss";import { HeadLine, P, BigBtn } from "./common/index";
import Man from "../assets/images/men-suit-png-9471.png";

const Contact = () => {
  return (
    <>
      <section className="Contact d-flex" id="contact">
        <div className="Left">{<img src={Man} alt="" />}</div>
        <div className="Right container">
          <HeadLine color="white">contact us</HeadLine>
          <P color="white">
            let's make something new, different and more meaningful or make
            thing more visual or conceptual
          </P>
          <BigBtn href="mailto:amrabdalhameed947@gmail.com"> contact me</BigBtn>
        </div>
      </section>
    </>
  );
};

export default Contact;
