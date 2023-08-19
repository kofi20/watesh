// Import images
import WebImage1 from "../images/landing.jpg";
import WebImage2 from "../images/me.jpg";
import MobileImage1 from "../images/mobile-project-1.jpg";
import MobileImage0 from "../images/h1.jpg";
import MobileImage2 from "../images/wallet.gif";
import UIImage1 from "../images/movie.jpg";
import UIImage2 from "../images/next.jpg";
import Nocode1 from "../images/tb.jpg";
import Nocode2 from "../images/an.jpg";

export const projectsData = [
  {
    id: 1,
    title: "My Portfolio",
    category: "Web Application",
    img: WebImage2,
    linkTo: "#",
    ProjectHeader: {
      title: "Project Management UI - From Context",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
  },
  {
    id: 2,
    title: "Crypto App",
    category: "Mobile Application",
    img: MobileImage2,
    linkTo: "https://github.com/kofi20/landing_page",
  },
  {
    id: 3,
    title: "Movie Streaming Website UI",
    category: "UI/UX Design",
    img: UIImage1,
    linkTo:
      "https://www.figma.com/file/bmBvWvsvGMXDvlqU87YiQT/Video-Streaming-Website---Responsive-web-app-prototype-(Community)?type=design&node-id=2%3A1293&mode=design&t=jAxzcOmYVf9iAORG-1",
  },
  {
    id: 4,
    title: "Next Media Dashboard UI",
    category: "UI/UX Design",
    img: UIImage2,
    linkTo:
      "https://www.figma.com/file/nTZmrewx5FYZP5T4qhr8KP/MediaCp-UI?type=design&node-id=35%3A3&mode=design&t=rBpj7mLEV2prkijs-1",
  },
  {
    id: 5,
    title: "Price Forecasting",
    category: "Data Science & ML",
    img: MobileImage1,
    linkTo: "https://github.com/kofi20/price-forecasting",
  },
  {
    id: 6,
    title: "Landing Page",
    category: "Web Application",
    img: WebImage1,
    linkTo: "",
  },
  {
    id: 7,
    title: "Taban Pal",
    category: "No Code",
    img: Nocode1,
    linkTo: "https://tabanpal.webflow.io/",
  },
  {
    id: 8,
    title: "Notion Template",
    category: "No Code",
    img: Nocode2,
    linkTo:
      "https://rainy-bosworth-094.notion.site/Anaan-ee10f214a98f4157b8abbc83cf949ba9?pvs=4",
  },
  {
    id: 9,
    title: "Movie Recommendation System",
    category: "Data Science & ML",
    img: MobileImage0,
    linkTo: "https://github.com/kofi20/movie-recommendation-system",
  },
];
