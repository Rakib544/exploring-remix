/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: [".*"],
  serverDependenciesToBundle: [/^marked.*/, "@types/marked"],
};
