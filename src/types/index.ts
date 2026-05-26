export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  body: PortableTextBlock[];
  mainImage?: SanityImage;
  author?: TeamMember;
  categories?: string[];
  publishedAt: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  category: "education" | "water" | "environment" | "women" | "health" | "other";
  description: string;
  body: PortableTextBlock[];
  mainImage?: SanityImage;
  gallery?: SanityImage[];
  stats?: { label: string; value: string }[];
  status: "active" | "completed" | "upcoming";
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  photo?: SanityImage;
  isCeo?: boolean;
}

export interface ImpactStat {
  _id: string;
  value: string;
  label: string;
  subLabel?: string;
  icon?: string;
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  logo?: SanityImage;
  socialLinks?: { platform: string; url: string }[];
  donateUrl?: string;
}

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  alt?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PortableTextBlock = any;
