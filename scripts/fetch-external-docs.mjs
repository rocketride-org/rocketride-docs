import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const BASE_URL =
  "https://raw.githubusercontent.com/rocketride-org/rocketride-server/develop/docs/";

const manifest = [
  {
    url: `${BASE_URL}README-typescript-client.md`,
    dest: "docs-data-toolchain/sdk/node-sdk.md",
    frontmatter: [
      "---",
      "sidebar_position: 2",
      "id: node-sdk",
      "title: Node",
      "---",
      "",
      "<head>",
      "  <title>Node SDK - RocketRide Documentation</title>",
      "</head>",
    ].join("\n"),
  },
  {
    url: `${BASE_URL}README-python-client.md`,
    dest: "docs-data-toolchain/sdk/python-sdk.md",
    frontmatter: [
      "---",
      "id: python-sdk",
      "title: Python",
      "---",
      "",
      "<head>",
      "  <title>Python SDK - RocketRide Documentation</title>",
      "</head>",
    ].join("\n"),
  },
  {
    url: `${BASE_URL}README-mcp-client.md`,
    dest: "docs-data-toolchain/mcp_server/rocketride-mcp-server/rocketride-mcp-server.md",
    frontmatter: [
      "---",
      'title: "MCP Server"',
      "---",
      "",
      "<head>",
      "  <title>RocketRide MCP Server - RocketRide Documentation</title>",
      "</head>",
    ].join("\n"),
  },
  {
    url: `${BASE_URL}README-vscode.md`,
    dest: "docs-data-toolchain/vscode-extension/overview.md",
    frontmatter: [
      "---",
      "title: Overview",
      "sidebar_position: 1",
      "---",
      "",
      "<head>",
      "  <title>VS Code Extension - RocketRide Documentation</title>",
      "</head>",
    ].join("\n"),
  },
];

async function fetchDoc({ url, dest, frontmatter }) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }

  let body = await res.text();

  // Strip the top-level heading (first # line) — the frontmatter title handles it
  body = body.replace(/^#\s+.+\n+/, "");

  const content = `${frontmatter}\n\n${body}`;
  const outPath = resolve(ROOT, dest);

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, content, "utf-8");
  console.log(`  OK  ${dest}`);
}

async function main() {
  console.log("Fetching external docs...\n");

  const results = await Promise.allSettled(manifest.map(fetchDoc));

  const failures = results.filter((r) => r.status === "rejected");
  for (const f of failures) {
    console.error(`  FAIL  ${f.reason.message}`);
  }

  if (failures.length > 0) {
    console.error(`\n${failures.length} fetch(es) failed — aborting.`);
    process.exit(1);
  }

  console.log("\nAll external docs fetched successfully.");
}

main();
