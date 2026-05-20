import { 
  Camera, 
  Video, 
  BookOpen, 
  Code, 
  Briefcase, 
  type LucideIcon 
} from "lucide-react";

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: LucideIcon;
}

export const dummyLinks: LinkItem[] = [
  {
    id: "link-1",
    title: "인스타그램",
    url: "https://instagram.com/",
    icon: Camera,
  },
  {
    id: "link-2",
    title: "유튜브",
    url: "https://youtube.com/",
    icon: Video,
  },
  {
    id: "link-3",
    title: "블로그",
    url: "https://velog.io/",
    icon: BookOpen,
  },
  {
    id: "link-4",
    title: "Github",
    url: "https://github.com/",
    icon: Code,
  },
  {
    id: "link-5",
    title: "포트폴리오",
    url: "https://notion.so/",
    icon: Briefcase,
  },
];
