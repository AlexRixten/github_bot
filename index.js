import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const FILE_PATH = "./data.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  const x = random.int(17, 18);
  const y = random.int(0, 6);
  const DATE = moment("2023-03-24")
    // .subtract(20, "d")
    .add(n, "d")
    // .add(x, "w")
    // .add(y, "d")
    .format();
  const data = { date: DATE };
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n));
  });
  console.log("DATE", DATE);
};

makeCommit(65);
