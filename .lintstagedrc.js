module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "pnpm tsc --noEmit",

  // This will lint and format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `pnpm eslint --fix ${filenames.join(" ")}`,
    `pnpm prettier --write ${filenames.join(" ")}`,
  ],

  // Prettify only Markdown and JSON files
  "**/*.(md|json)": (filenames) =>
    `pnpm prettier --write ${filenames.join(" ")}`,
}
