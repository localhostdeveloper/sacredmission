import { defineField, defineType } from "sanity";

export const impactStat = defineType({
  name: "impactStat",
  title: "Impact Stat",
  type: "document",
  fields: [
    defineField({ name: "value", title: "Value (e.g. 24,560+)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "label", title: "Label (e.g. Lives Impacted)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "subLabel", title: "Sub Label (e.g. Across 15 Countries)", type: "string" }),
    defineField({ name: "icon", title: "Icon Name (lucide)", type: "string", description: "Lucide icon name e.g. Users, GraduationCap, Heart, Globe" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  preview: { select: { title: "label", subtitle: "value" } },
});
