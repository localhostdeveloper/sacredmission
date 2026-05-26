import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImage } from "@/types";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

export async function getBlogPosts() {
  return sanityClient.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id, title, slug, excerpt, mainImage, categories, publishedAt,
      author->{ name, role, photo }
    }`
  );
}

export async function getBlogPost(slug: string) {
  return sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, slug, excerpt, mainImage, categories, publishedAt, body,
      author->{ name, role, photo }
    }`,
    { slug }
  );
}

export async function getProjects() {
  return sanityClient.fetch(
    `*[_type == "project"] | order(_createdAt asc) {
      _id, title, slug, category, status, description, mainImage, stats
    }`
  );
}

export async function getProject(slug: string) {
  return sanityClient.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id, title, slug, category, status, description, mainImage, gallery, stats, body
    }`,
    { slug }
  );
}

export async function getImpactStats() {
  return sanityClient.fetch(
    `*[_type == "impactStat"] | order(order asc) {
      _id, value, label, subLabel, icon
    }`
  );
}

export async function getTeam() {
  return sanityClient.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id, name, role, bio, photo, isCeo
    }`
  );
}

export async function getSiteSettings() {
  return sanityClient.fetch(
    `*[_type == "siteSettings"][0] {
      siteTitle, siteDescription, logo, donateUrl, socialLinks, footerText
    }`
  );
}
