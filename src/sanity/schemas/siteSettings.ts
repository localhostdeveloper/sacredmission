import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site Title", type: "string" }),
    defineField({ name: "siteDescription", title: "Site Description", type: "text", rows: 3 }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "donateUrl", title: "Donation URL Override", type: "url" }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "platform", type: "string", title: "Platform" },
          { name: "url", type: "url", title: "URL" },
        ],
      }],
    }),
    defineField({ name: "footerText", title: "Footer Text", type: "text", rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
