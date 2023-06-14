import config from "../../env.js";
export default function getPersitence({ file, mongo }) {
  const persitence = config.PERSISTENCE;
  switch (persitence) {
    case "FILE":
      return file();
    case "MONGO":
      return mongo();
    default:
      throw new Error("Invalid Persistence");
  }
}
