// import subCategory from "./subCategory";

export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      type: "string",
      name: "description",
      title: "Description",
    },
    {
      type: "boolean",
      name: "available",
      title: "Available",
    },
    {
      type: "number",
      name: "index",
      title: "Index",
    },

  ],
  initialValue: {
    available: true,
  },
};
