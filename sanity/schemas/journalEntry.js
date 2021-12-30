const journalEntry = {
  title: "Journal Entry",
  name: "journalEntry",
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
      title: "Thought Bubble",
      name: "thoughtBubble",
      type: "image",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default journalEntry;
