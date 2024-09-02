import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Ahtasham Pervaiz",
        "I'm a Full Stack Web Developer",
        "I specialize in MERN stack development",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src="https://scontent.fisb2-2.fna.fbcdn.net/v/t39.30808-6/347387467_265056899232276_7461090912264494789_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEkp0_UbqMjyrWr1SuNtJ-5t4mbulwGcY63iZu6XAZxjkASM0SBply9mYELjqrtUtGTk1ApeZYobm8VrCwB_CpP&_nc_ohc=aefqgCj0KpMQ7kNvgFJd043&_nc_zt=23&_nc_ht=scontent.fisb2-2.fna&cb_e2o_trans=q&oh=00_AYBwzDxSbouMUEuAYNPTyw6rOYZ2cveWXnzvuFZKLEqj9A&oe=66DBB383" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
