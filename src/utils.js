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

export const getDateTimeText = (createdAt) => {
  // split date and time
  const splitDateTime = createdAt.split("T");
  // split date into year, month, and day
  const splitDate = splitDateTime[0].split("-");
  // split time into hours, minutes, and seconds
  const splitTime = splitDateTime[1].split(":");
  // utc to est time conversion
  const estHour = parseInt(splitTime[0]) - 5;
  // convert to 12-hour
  const is24Hour = estHour > 12 && estHour <= 24;
  const period = is24Hour ? "PM" : "AM";
  const convertedHour = is24Hour ? estHour - 12 : estHour;
  // form text
  return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]} | ${
    convertedHour < 10 ? "0" + convertedHour : convertedHour
  }:${splitTime[1]} ${period}`;
};
