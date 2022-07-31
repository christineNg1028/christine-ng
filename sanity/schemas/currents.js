const promptAnswer = [
  {
    title: "Prompt",
    name: "prompt",
    type: "string",
  },
  {
    title: "Answer",
    name: "answer",
    type: "string",
  },
];

const currents = {
  title: "Currents",
  name: "currents",
  type: "document",
  fields: [
    {
      title: "Currents",
      name: "currents",
      type: "array",
      of: [
        {
          type: "object",
          fields: promptAnswer,
        },
      ],
    },
  ],
};

export default currents;
