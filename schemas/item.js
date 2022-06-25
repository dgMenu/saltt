export default {
  name: "item",
  type: "document",
  title: "Item",
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
      type: "number",
      name: "price",
      title: "Price",
    },
    {
      type: "boolean",
      name: "available",
      title: "Available",
    },
  ],
  preview: {
    select: {
      title: "name",
      available: "available",
      price: "price",
    },
    prepare(selection) {
      const { title, available, price } = selection;
      return {
        title: title,
        subtitle: `${available ? "✅" : "❌"} ${price}`,
      };
    },
  },
  initialValue: {
    available: true,
  },
};
