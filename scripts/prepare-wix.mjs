import { access, cp, readFile, rm } from "node:fs/promises";
import { basename } from "node:path";
import { fileURLToPath } from "node:url";

const output = new URL("../out/", import.meta.url);
const destination = new URL("../wix-deploy/public/", import.meta.url);
const homepage = new URL("index.html", output);

// Fail before clearing generated files if the Next.js export is unavailable.
await access(homepage);
const html = await readFile(homepage, "utf8");
if (!html.includes("hireMe.tsx")) {
  throw new Error("The export does not contain the portfolio homepage.");
}

await rm(destination, { recursive: true, force: true });
await cp(output, destination, {
  recursive: true,
  // The résumé download uses its permanent Wix media URL.
  filter: (source) => basename(source) !== "travisBurnsResume.docx",
});

console.log(`Prepared Wix frontend in ${fileURLToPath(destination)}`);
console.log("Deploy by merging into main; see wix-deploy/CI-CD.md for the one-time setup.");
