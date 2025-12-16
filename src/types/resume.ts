// Header
export interface Header {
  nameKo: string;
  nameEn: string;
  title: string;
  email: string;
  phone?: string;
  githubUrl: string;
  linkedinUrl?: string;
  totalExperience: string;
  updatedAt: string;
}

// Introduce (상세 자기소개)
export interface Introduce {
  paragraphs: string[];
}

// Skills / Core Competencies
export type SkillCategory = "Back-end" | "Database" | "DevOps" | "Front-end";

export interface Skill {
  name: string;
  level?: 1 | 2 | 3; // 1=기초, 2=중급, 3=고급
}

export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}

// Project (프로젝트 상세)
export interface ProjectAchievement {
  text: string;
  isHighlight?: boolean; // 체크마크 강조
}

export interface Project {
  id: string;
  name: string;
  company: string;
  companyEn?: string;
  startDate: string;
  endDate?: string;
  category: string;
  descriptions: string[];
  achievements?: ProjectAchievement[];
  technologies?: string[];
}

// Experience
export interface Experience {
  id: string;
  company: string;
  companyEn?: string;
  position: string;
  department?: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  duration: string;
  companyInfo?: string;
  highlights: string[];
  skillKeywords: string[];
  isPlaceholder?: boolean; // 42dot placeholder
}

// ETC (기타 정보)
export interface EtcItem {
  id: string;
  date: string;
  title: string;
  description?: string;
  organization?: string;
}

// Publications
export type PublicationType = "blog" | "conference" | "article";

export interface Publication {
  id: string;
  title: string;
  type: PublicationType;
  publisher: string;
  date: string;
  url: string;
  description?: string;
  highlights?: string[];
}

// Open Source
export interface OpenSourceProject {
  id: string;
  name: string;
  description: string;
  url: string;
  language: string;
  features: string[];
}

// Certifications
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

// Education
export interface Education {
  id: string;
  institution: string;
  degree?: string;
  field?: string;
  startDate: string;
  endDate: string;
  status: string;
}

// Complete Resume
export interface Resume {
  header: Header;
  introduce: Introduce;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  publications: Publication[];
  openSource: OpenSourceProject[];
  certifications: Certification[];
  etc: EtcItem[];
  education: Education[];
}
