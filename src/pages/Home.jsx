import introData from "../data/intro.json";
import projectsData from "../data/projects.json";
import aboutData from "../data/about.json";
import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";
import ImageContentBlock from "../components/ImageContentBlock/ImageContentBlock";

function Home() {
  return (
    <>
      <Banner data={introData} />
      <Projects data={projectsData} />
      <ImageContentBlock data={aboutData} />
    </>
  );
}

export default Home;
