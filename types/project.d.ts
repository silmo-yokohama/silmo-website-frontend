export interface Tag {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: Tag[];
}

export interface ProjectDetails extends SilmoProject {
  content: string;
}
