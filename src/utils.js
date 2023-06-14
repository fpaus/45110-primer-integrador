import jwt from "jsonwebtoken";
import { dirname } from "path";
import { fileURLToPath } from "url";
import config from "./env.js";
const { JWT_TOKEN } = config;

export default function fileDirName(meta) {
  const __filename = fileURLToPath(meta.url);

  const __dirname = dirname(__filename);

  return { __dirname, __filename };
}

export function generateToken(user) {
  return jwt.sign(user, JWT_TOKEN, {
    expiresIn: "24h",
  });
}
export function verifyToken(token) {
  return jwt.verify(token, JWT_TOKEN);
}
