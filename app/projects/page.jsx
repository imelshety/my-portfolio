"use client";
import { useState } from "react";
import { projects } from "@/public/data/projects";
import styles from "./page.module.css";
import NotFound from "./components/notfound/NotFound";
import ProjectCard from "./components/projectCard/ProjectCard";
import PageHeading from "../components/pageHeading/PageHeading";

function ProjectPage() {
  const [filteredList, setFilteredList] = useState(projects);
  return (
    <main className={styles.projectPage}>
      <PageHeading secondaryTitle="my work" primaryTitle="my portfolio" />
      {filteredList.length > 0 ? (
        <div className={styles.projectContainer}>
          {filteredList.map(project => <ProjectCard project={project} key={project.id} />)}
        </div>
      ) : <NotFound message="No Projects Found , please try again!" />
      }
    </main>
  );
}
export default ProjectPage;
