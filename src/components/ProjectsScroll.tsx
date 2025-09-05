import ProjectsScrollClient from "./ProjectsScrollClient";
import { getProjects } from "../actions/Projects";
import config from "@/payload.config";
import { getPayload } from "payload";

export const dynamic = "force-dynamic";

export default async function ProjectsScroll() {
  const payload = await getPayload({ config });
  const projectsData = await getProjects(payload);

  return <ProjectsScrollClient projects={projectsData} />;
}
