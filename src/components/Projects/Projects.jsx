import globalStyles from "../../styles/global.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

const Projects = ({ data }) => {
  return (
    <section>
      <div className={globalStyles.container}>
        <div className={styles.heading}>
          <h2 className={`${globalStyles.reveal} ${globalStyles.revealUp}`}>
            {data.title}
          </h2>
          <p
            className={`${globalStyles.reveal} ${globalStyles.revealUp} ${globalStyles.delay2}`}
          >
            {data.description}
          </p>
        </div>
        <div className={styles.grid}>
          {data.items.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
