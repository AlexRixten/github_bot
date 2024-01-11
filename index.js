import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const FILE_PATH = "./data.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  const DATE = moment("2023-12-02") //date start
    .add(n, "d")
    .format();
  const data = { date: DATE };
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n));
  });
  console.log("DATE", DATE);
};

makeCommit(1); // count commits
