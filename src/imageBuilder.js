import sanityClient from "./client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
  return builder.image(source);
};

export default urlFor;
