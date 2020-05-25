const path = require("path");
const execSync = require("child_process").execSync;

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const cwd = process.cwd();

["daily-harvest-dom-product-portal"].forEach((packageName) => {
  process.chdir(
    path.resolve(
      __dirname,
      "../../daily-harvest-monorepo/packages/" + packageName
    )
  );
  exec("yarn link");
  process.chdir(cwd);
  exec(`yarn link ${packageName}`);
  console.log(`Sucessfully linked ${packageName}`);
});
