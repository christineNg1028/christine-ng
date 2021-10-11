import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "465yo57o",
  dataset: "production",
  useCdn: true,
});
