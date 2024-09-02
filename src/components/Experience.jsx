import React from "react";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      imageSrc: "pny.png",
      role: "Frontend Developer",
      startDate: "2023",
     
      location: "PNY Institute, Rwp",
      experiences: [
        "Built the frontend of websites like KFC and Arsha.",
        "Developed games like Tic Tac Toe, Rock Paper Scissors, BMI, and Guess a Number using JavaScript."
      ]
    },
    {
      id: 2,
      imageSrc: "react.png",
      role: "Full Stack Developer",
      startDate: "2023",
      
      location: "PNY Institute, Rwp",
      experiences: [
        "Created a photo portfolio website using React.",
        "Developed a user registration and login system for WhatsApp using the MERN stack."
      ]
    }
  ];

  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experienceData.map((data) => (
          <div
            key={data.id}
            className="ex-items text-center my-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="left">
              {/* <img src={`/assets/${data.imageSrc}`} alt={data.role} /> */}
            </div>
            <div className="right">
              <h2>{data.role}</h2>
              <h4>
                <span style={{ color: "yellowgreen" }}>
                  {data.startDate} - {data.endDate}{" "}
                </span>
                <span style={{ color: "yellow" }}>{data.location}</span>
              </h4>
              {data.experiences.map((exp, index) => (
                <h5 key={index} style={{ color: "yellow" }}>
                  {exp}
                </h5>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
