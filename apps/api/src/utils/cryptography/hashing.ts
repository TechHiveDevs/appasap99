/**
 *  This Module aimsto provide
 *  hashing functionality
 *  by crypto library ( node builtin module ) ,
 *  &  bcrypt library ( node package module )
 *
 * @author MarioMonir
 */

// ============================================================

import crypto from "crypto";
import bcrypt from "bcrypt";

/* Hashing with random salt */

// ============================================================

/**
 * Hash str by crypto ( built-in )
 * @param {*} str
 * @returns
 */
const hash0 = async (str: string) => {
  return new Promise((resolve, reject) => {
    try {
      const algorithm = "sha256"; // should be at env
      const hash = crypto.createHash(algorithm).update(str).digest("hex");
      resolve(hash);
    } catch (err) {
      reject(err);
    }
  });
};

// -----------------------------------------------

/**
 * Verify Hash by crypto ( built-in )
 * @param {*} str
 * @returns
 */
const verifyHash0 = async (str: string, hashedStr: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newHashed = await hash0(str);
      resolve(newHashed === hashedStr);
    } catch (err) {
      reject(err);
    }
  });
};

// ============================================================

/**
 * this hash function because of migration from flask
 * werkzeug generate hash password password
 * @param { password, salt, iterations, keylength, algorithm }
 * @returns hash of pbkdf2  sha256 of length 32
 */

export const hash = ({
  password,
  salt = crypto.randomBytes(4).toString("hex"),
  iterations = 150000,
  keylength = 32,
  algorithm = "sha256",
}: any) => {
  const hashed = crypto
    .pbkdf2Sync(password, salt, iterations, keylength, algorithm)
    .toString("hex");
  return `pbkdf2:${algorithm}:${iterations}$${salt}$${hashed}`;
};

// ============================================================

export const verifyHash = ({ password, hashed }: any) => {
  if (!hashed) return false;
  const [_, __, iterationsSaltHashedKey] = hashed?.split(":");
  if (!iterationsSaltHashedKey) return false;

  const [iterations, salt, hashedKey] = iterationsSaltHashedKey?.split("$");
  if (!iterations || !salt || !hashedKey) return false;

  const newHashedPassword = hash({ password, salt });
  return newHashedPassword === hashed;
};

// ============================================================

/**
 * bcrypt Hash string by bcrypt
 * @param {*} str
 * @returns
 */
export const bcryptHash = async (str: string) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(str, salt);
  return hash;
};

// -----------------------------------------------

/**
 * bcrypt Verify Hash
 * @param {*} str
 * @param {*} hash
 * @returns Promise returns true or false
 */
export const bcryptVerifyHash = async (str: string, hash: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(str, hash, (err, same) => {
      if (err) {
        return reject(err);
      }
      return resolve(same);
    });
  });
};

// ============================================================
