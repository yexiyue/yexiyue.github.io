import fse from "fs-extra";

fse.copySync("blogs/", "docs/blogs", {
  filter: (src, dest) => !/.md$/.test(src),
});
