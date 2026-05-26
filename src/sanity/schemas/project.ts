import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["education", "water", "environment", "women", "health", "other"], layout: "radio" } }),
    defineField({ name: "status", title: "Status", type: "string", options: { list: ["active", "completed", "upcoming"], layout: "radio" }, initialValue: "active" }),
    defineField({ name: "description", title: "Short Description", type: "text", rows: 3 }),
    defineField({ name: "mainImage", title: "Main Image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })] }),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "stats", title: "Stats", type: "array", of: [{ type: "object", fields: [{ name: "label", type: "string", title: "Label" }, { name: "value", type: "string", title: "Value" }] }] }),
    defineField({ name: "body", title: "Full Description", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "mainImage" } },
});
