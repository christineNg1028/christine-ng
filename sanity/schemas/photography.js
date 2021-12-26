const photography = {
  title: "Photography",
  name: "photography",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Date",
      name: "date",
      type: "date",
    },
    {
      title: "Location",
      name: "location",
      type: "geopoint",
    },
    {
      title: "Photos",
      name: "photos",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      title: "Notes",
      name: "notes",
      type: "text",
    },
  ],
};

export default photography;
