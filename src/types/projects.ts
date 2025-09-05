// types/projects.ts
import type { Media } from "@/payload-types";

export interface Project {
  id: number;
  projectName: string;
  description: string;
  image?: Media; // When depth: 2 is used, this will be the full Media object
  linkGitHub: string;
  linkLive: string;
  updatedAt: string;
  createdAt: string;
}
