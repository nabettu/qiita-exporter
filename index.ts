var fs = require("fs");
import { fetchCurrentUserAllItems } from "./lib/client";

const main = async () => {
  if (process.argv.length < 3) {
    return console.warn(
      "コマンドの引数に token outputFileName(省略可) をいれてください。"
    );
  }

  const items = await fetchCurrentUserAllItems();
  // console.log(items.length);

  const fileName = process.argv[3] || "posts";
  fs.writeFileSync(
    `./${fileName}.json`,
    JSON.stringify(items, null, "    "),
    err => {
      console.warn(err);
    }
  );
};

main();
