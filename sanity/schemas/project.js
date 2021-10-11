const project = {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Image",
      name: "img",
      type: "image",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Date",
      name: "date",
      type: "date",
    },
    {
      title: "Category",
      name: "category",
      type: "string",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Link",
      name: "link",
      type: "url",
    },
    {
      title: "Sub Projects",
      name: "subProjects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Image",
              name: "img",
              type: "image",
            },
            {
              title: "Video",
              name: "video",
              type: "url",
            },
            {
              title: "Description",
              name: "description",
              type: "text",
            },
            {
              title: "Key Features",
              name: "keyFeatures",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              title: "Highlights",
              name: "highlights",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              title: "Link",
              name: "link",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      title: "Other",
      name: "other",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default project;
