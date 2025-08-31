import React, { useState } from 'react';
import { Link } from "react-router-dom";
import novieta1 from "../../assets/projects/novieta1.webp";
import novieta2 from "../../assets/projects/novieta2.webp";
import novieta3 from "../../assets/projects/novieta3.webp";
import novieta4 from "../../assets/projects/novieta4.webp";
import trend1 from "../../assets/projects/trend1.webp";
import trend2 from "../../assets/projects/trend2.webp";
import trend3 from "../../assets/projects/trend3.webp";
import trend4 from "../../assets/projects/trend4.webp";
import thegiverconsulting1 from "../../assets/projects/thegiverconsulting1.webp";
import thegiverconsulting2 from "../../assets/projects/thegiverconsulting2.webp";
import thegiverconsulting3 from "../../assets/projects/thegiverconsulting3.webp";
import thegiverconsulting4 from "../../assets/projects/thegiverconsulting4.webp";
import bmx1 from "../../assets/projects/bmx1.webp";
import bmx2 from "../../assets/projects/bmx2.webp";
import bmx3 from "../../assets/projects/bmx3.webp";
import bmx4 from "../../assets/projects/bmx4.webp";
import glidesk1 from "../../assets/projects/glidesk1.webp";
import glidesk2 from "../../assets/projects/glidesk2.webp";
import glidesk3 from "../../assets/projects/glidesk3.webp";
import glidesk4 from "../../assets/projects/glidesk4.webp";
import figmaAi1 from "../../assets/projects/figmaAi1.webp";
import figmaAi2 from "../../assets/projects/figmaAi2.webp";
import figmaAi3 from "../../assets/projects/figmaAi3.webp";
import figmaAi4 from "../../assets/projects/figmaAi4.webp";
import logistic1 from "../../assets/projects/logistic1.webp";
import logistic2 from "../../assets/projects/logistic2.webp";
import logistic3 from "../../assets/projects/logistic3.webp";
import logistic4 from "../../assets/projects/logistic4.webp";
import deckohost1 from "../../assets/projects/deckohost1.webp";
import deckohost2 from "../../assets/projects/deckohost2.webp";
import deckohost3 from "../../assets/projects/deckohost3.webp";
import deckohost4 from "../../assets/projects/deckohost4.webp";
import ppsc1 from "../../assets/projects/ppsc1.webp";
import ppsc2 from "../../assets/projects/ppsc2.webp";
import ppsc3 from "../../assets/projects/ppsc3.webp";
import ppsc4 from "../../assets/projects/ppsc4.webp";
import overtime1 from "../../assets/projects/overtime1.webp";
import overtime2 from "../../assets/projects/overtime2.webp";
import overtime3 from "../../assets/projects/overtime3.webp";
import overtime4 from "../../assets/projects/overtime4.webp";
import softech1 from "../../assets/projects/softech1.webp";
import softech2 from "../../assets/projects/softech2.webp";
import softech3 from "../../assets/projects/softech3.webp";
import softech4 from "../../assets/projects/softech4.webp";
import nasateck1 from "../../assets/projects/nasateck1.webp";
import nasateck2 from "../../assets/projects/nasateck2.webp";
import nasateck3 from "../../assets/projects/nasateck3.webp";
import lundary1 from "../../assets/projects/lundary1.webp";
import lundary2 from "../../assets/projects/lundary2.webp";
import lundary3 from "../../assets/projects/lundary3.webp";
import lundary4 from "../../assets/projects/lundary4.webp";

const data = [
  { image: lundary1, title: "Akoya Deluxe Cleaning", description: "User-friendly, modern design showcasing top resources for managing overtime.", category: "uiux", image1: lundary1, image2: lundary2, image3: lundary3, image4: lundary4, navigation_link: "https://lundary.vercel.app/home" },
  { image: novieta1, title: 'Multi-Service Creative Agency', description: 'A fully responsive online store with cart, payment gateway, and admin panel.', category: "web", image1: novieta1, image2: novieta2, image3: novieta3, image4: novieta4, navigation_link: "https://novietaaplus.com/" },
  { image: trend1, title: 'Trend Car Care', description: 'A fully responsive online store with cart, payment gateway, and admin panel.', category: "web", image1: trend1, image2: trend2, image3: trend3, image4: trend4, navigation_link: "https://trendcarcare.com/" },
  { image: thegiverconsulting1, title: 'The Givers Consulting', description: 'A versatile and forward-thinking company offering a comprehensive suite of services.', category: "web", image1: thegiverconsulting1, image2: thegiverconsulting2, image3: thegiverconsulting3, image4: thegiverconsulting4, navigation_link: "https://thegiversconsulting.com/" },
  { image: bmx1, title: 'Cash rewards game', description: 'Become part of a thriving global community today and unlock thousands of dollars in earnings.', category: "web", image1: bmx1, image2: bmx2, image3: bmx3, image4: bmx4, navigation_link: "https://thegiversconsulting.com/" },
  { image: glidesk1, title: 'Innovative Workforce Management Solutions', description: 'Innovative Workforce Management Solutions streamline employee scheduling, attendance tracking, and productivity monitoring using advanced technologies.', category: "web", image1: glidesk1, image2: glidesk2, image3: glidesk3, image4: glidesk4, navigation_link: "https://glidesk.com/" },
  { image: softech1, title: "Softech Business Solutions", description: "Softech Business Solutions is a forward-thinking company specializing in delivering innovative software and technology services to businesses of all sizes.", category: "web", image1: softech1, image2: softech2, image3: softech3, image4: softech4, navigation_link: "https://www.softechbusinessservices.com/" },
  { image: nasateck1, title: "Nasa Teck Innovations It Services", description: "NASA Teck Innovations IT Services is a technology company based in Bahawalpur, Pakistan, operating under the name Sky Innovations IT Services L.L.C.", category: "web", image1: nasateck1, image2: nasateck2, image3: nasateck3, navigation_link: "https://nasateck.com/" },
  { image: novieta1, title: 'Figma Design Ai Dashboard', description: 'Sleek, data-driven interface for monitoring AI performance with interactive charts and real-time analytics.', category: "uiux", image1: figmaAi1, image2: figmaAi2, image3: figmaAi3, image4: figmaAi4, navigation_link: "https://www.figma.com/design/0yCACDwyDkyN0EqgEsdYiO/Dash-board-ai?node-id=0-1&p=f" },
  { image: trend1, title: 'Figma Design Transpohub $ Logistics Provide Word', description: 'Modern and dynamic design showcasing Transpohub logistics solutions with clear service highlights and visuals.', category: "uiux", image1: logistic1, image2: logistic2, image3: logistic3, image4: logistic4, navigation_link: "https://www.figma.com/design/Av2Ed3J1tlnSo8JA2D1PjR/Logistics?node-id=0-1&p=f" },
  { image: thegiverconsulting1, title: 'Figma Design Deckohost Service base website', description: 'Clean and professional layout highlighting Deckohost’s hosting services with intuitive navigation and visuals.', category: "uiux", image1: deckohost1, image2: deckohost2, image3: deckohost3, image4: deckohost4, navigation_link: "https://www.figma.com/design/kq0atK4yTRCbNkm7KJlZiG/Dekohost?node-id=0-1&p=f" },
  { image: bmx1, title: 'Figma design Best place to prepare for competitive Exams', description: 'User-friendly, modern design showcasing top resources for competitive exam preparation and success.', category: "uiux", image1: ppsc1, image2: ppsc2, image3: ppsc3, image4: ppsc4, navigation_link: "https://www.figma.com/design/kvDU7sk6epN4m7H2lXYYkU/SkillSphere?node-id=0-1&p=f" },
  { image: glidesk1, title: 'Overtime Management', description: 'User-friendly, modern design showcasing top resources for managing overtime.', category: "app", image1: overtime1, image2: overtime2, image3: overtime3, image4: overtime4, navigation_link: "https://codesthinker.com/projects" }
];

const ProjectHeader = () => {
  const [filteredProjects, setFilteredProjects] = useState(data);
  const [showCount, setShowCount] = useState(5);
  const [mainImages, setMainImages] = useState(data.map(p => p.image));

  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredProjects(data);
      setMainImages(data.map(p => p.image));
    } else {
      const filtered = data.filter((project) => project.category === category);
      setFilteredProjects(filtered);
      setMainImages(filtered.map(p => p.image));
    }
    setShowCount(5);
  };

  const handleShowMore = () => {
    if (showCount < filteredProjects.length) {
      setShowCount(showCount + 5);
    }
  };

  const handleThumbnailClick = (projectIndex, img) => {
    const updatedMainImages = [...mainImages];
    updatedMainImages[projectIndex] = img;
    setMainImages(updatedMainImages);
  };

  return (
    <div className='w-full py-10 md:px-10'>
      <div className='w-full py-10 md:px-10 text-center' data-aos="fade-down">
        <h3 className='text-3xl font-sans font-bold mt-6'>Project Section</h3>
        <p className='font-semibold mt-3'>Explore a range of projects we’ve worked on across web, mobile, and design.</p>
      </div>

      {/* FILTER BUTTONS */}
      <div className='flex flex-wrap justify-center gap-4 md:gap-8 w-full mx-auto py-6 md:px-6' data-aos="fade-up">
        <button onClick={() => handleFilter("all")} className='bg-gradient-to-l from-[#070048] to-[#0E00A4] text-white py-2 px-4 md:py-3 md:px-6 rounded-[8px] font-semibold text-sm md:text-base'>All</button>
        <button onClick={() => handleFilter("web")} className='hover:bg-gradient-to-l from-[#070048] to-[#0E00A4] hover:text-white py-2 px-4 md:py-3 md:px-8 rounded-[8px] font-semibold text-sm md:text-base'>Website Development</button>
        <button onClick={() => handleFilter("uiux")} className='hover:bg-gradient-to-l from-[#070048] to-[#0E00A4] hover:text-white py-2 px-4 md:py-3 rounded-[8px] font-semibold text-sm md:text-base'>uiux</button>
        <button onClick={() => handleFilter("app")} className='hover:bg-gradient-to-l from-[#070048] to-[#0E00A4] hover:text-white py-2 px-4 md:py-3 md:px-6 rounded-[8px] font-semibold text-sm md:text-base'>App Development</button>
      </div>

      {/* PROJECT CARDS */}
      {filteredProjects.slice(0, showCount).map((project, index) => (
        <div key={index} className='w-[95%] md:w-[70%] mx-auto flex flex-col md:flex-row shadow-xl rounded-2xl mt-12'>
          {/* LEFT IMAGE */}
          <div className='w-full md:w-[45%] rounded-2xl' data-aos="fade-right">
            <img src={mainImages[index]} alt='main' className='w-full h-full min-h-[200px] max-h-[300px] object-cover rounded-2xl' />
          </div>
          
          {/* RIGHT CONTENT */}
          <div className='w-full md:w-[60%] py-4 md:px-8 px-4' data-aos="fade-left">
            <h1 className='md:text-2xl text-lg font-bold'>{project.title}</h1>
            <p className='text-gray-600 mt-2 text-sm md:text-base'>{project.description}</p>
            
            {/* THUMBNAILS */}
            <div className='flex flex-wrap md:flex-nowrap w-full gap-3 md:gap-5 mt-3'>
              {[project.image1, project.image2, project.image3, project.image4].map((thumb, tIndex) => (
                <img
                  key={tIndex}
                  src={thumb}
                  onClick={() => handleThumbnailClick(index, thumb)}
                  className='w-[22%] md:w-[20%] cursor-pointer border hover:border-2 hover:border-blue-700 rounded-2xl object-cover h-[80px] md:h-[100px]'
                  alt={`thumb-${tIndex}`}
                />
              ))}
            </div>

            {/* BUTTON */}
            <Link to={project.navigation_link} target='_blank'>
              <button className='bg-gradient-to-l from-[#080053] to-[#0D0097] hover:bg-gradient-to-r hover:from-[#080053] hover:to-[#0D0097] p-3 text-white rounded-full mt-5 text-sm md:text-base'>
                View Project
              </button>
            </Link>
          </div>
        </div>
      ))}

      {showCount < filteredProjects.length && (
        <div className='w-full flex mt-3 justify-center'>
          <button onClick={handleShowMore} className='bg-gradient-to-l px-4 md:px-6 from-[#080053] to-[#0D0097] hover:bg-gradient-to-r hover:from-[#080053] hover:to-[#0D0097] p-3 text-white rounded-full mt-5 text-sm md:text-base'>
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectHeader;
