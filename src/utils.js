import sanityClient from "./client.js";
import imageUrlBuilder from "@sanity/image-url";

const PROJECT_ID = "465yo57o";
const DATASET = "production";

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source);
};

export const getFileUrl = (ref) => {
  const [_file, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/${PROJECT_ID}/${DATASET}/${id}.${extension}`;
};
