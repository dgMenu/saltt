import category from "./category";
import item from "./item";

export default {
  name: "subCategory",
  type: "document",
  title: "Sub Category",
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
      type: "reference",
      name: "category",
      title: "Category",
      to: [{ type: "category" }],
    },
    {
      type: "array",
      name: "items",
      title: "Items",
      of: [item],
    },
  ],
  initialValue: {
    available: true,
  },
};
