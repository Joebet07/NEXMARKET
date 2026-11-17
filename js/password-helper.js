/* OPTIONAL ADVANCED HELPER — you do not need to edit this for the basic project.
 * The browser provides the password hashing algorithm. Keeping this separate
 * lets you study forms, arrays and storage first without storing plain passwords.
 * Still demo-only: browser users can modify all local account data.
 */
const passwordBytesToHex = (bytes) =>
  Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
async function passwordHash(password, salt) {
  if (!globalThis.crypto?.subtle)
    throw Error(
      "Open the project with Live Server on localhost to use demo accounts.",
    );
  const material = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: new TextEncoder().encode(salt),
      iterations: 100000,
      hash: "SHA-256",
    },
    material,
    256,
  );
  return passwordBytesToHex(new Uint8Array(bits));
}
