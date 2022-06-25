import subCategory from "./subCategory";

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
      type: "array",
      name: "subCategory",
      title: "subCategory",
      of: [subCategory],
    },
  ],
  initialValue: {
    available: true,
  },
};
