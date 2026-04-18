/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  plugins: [require.resolve("prettier-plugin-go-template")],
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
  ],
}
