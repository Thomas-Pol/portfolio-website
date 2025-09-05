// actions/Projects.ts
import type { Payload } from "payload";
import type { Project } from "@/types/projects";

export async function getProjects(payload: Payload): Promise<Project[]> {
  const projects = await payload.find({
    // @ts-expect-error - Collection type will be available after payload types generation
    collection: 'projects' as const,
    depth: 2, // This will populate the image field with the full Media object
  });

  return projects.docs as Project[];
}

// export async function getProject(payload: Payload, slug: string) {
//   const project = await payload.find({
//     collection: "projects",
//     where: {
//       slug: {
//         equals: slug,
//       },
//     },
//     limit: 1,
//   });

//   return project;
// }