import Projects from "./Projects";
import c1 from "../../assets/kafiimages/c1.png"
import c2 from "../../assets/kafiimages/c2.png"
import c3 from "../../assets/kafiimages/c3.png"
import c4 from "../../assets/kafiimages/c4.png"
import c5 from "../../assets/kafiimages/c5.png"
import c6 from "../../assets/kafiimages/c6.png"




const projectData = [
  {
    id: 1,
    image: c1,
    category: "UI-UX DESIGN",
    title: "Clothing E-Commerce",
    description:
      "I focus on building seamless, responsive e-commerce experiences for Ddong BD, where modern design meets real-world usability",
    link: "https://www.ddongbd.com/",
  },
  {
    id: 2,
    image: c2,
    category: "UI-UX DESIGN",
    title: "Clothing E-Commerce",
    description:
      "I focus on building seamless, responsive e-commerce experiences for Meek ",
    link: "https://meek.com.bd/",
  },
  {
    id: 3,
    image: c3,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
    link: "https://themewagon.github.io/aurora-free/",
  },
  {
    id: 4,
    image: c4,
    category: "UI-UX DESIGN",
    title: "Watch E-commerce",
    description:
      "Discover a premium collection of watches designed to match every style and moment. Our e-commerce platform offers a seamless shopping experience with modern design, smooth navigation, and secure checkout",
    link: "https://watch-demo-ten.vercel.app/",
  },
  {
    id: 5,
    image: c5,
    category: "UI-UX DESIGN",
    title: "Shoe E-commerce",
    description:
      "Explore a stylish collection of shoes crafted for comfort, performance, and everyday wear. Our e-commerce platform delivers a smooth shopping experience with clean design",
    link: "https://shoe-demo-six.vercel.app/",
  },
  {
    id: 6,
    image: c6,
    category: "UI-UX DESIGN",
    title: "Grocry store E-commerce",
    description:
      "Shop daily essentials with ease from our modern grocery store platform. From fresh produce to household items, everything is just a few clicks away",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
           Explore my recent work, where I create user-focused, visually engaging, and functional digital experiences with clean design, usability, and smooth performance.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
  
    </div>
  );
};

export default Portfolio;
