import inquirer from "inquirer";

let port: number;
let canEdit: boolean;

const askPort = async () => {
  const userPort = await inquirer.prompt({
    name: "portnumber",
    type: "input",
    message: "What port do you want to use?",
    default() {
      return 4000;
    },
  });
};

const askCanEdit = async (): Promise<void> => {
  const userCanEdit = await inquirer.prompt({
    name: "can-edit",
    type: "confirm",
    message: "Would you like the user to be able to create, delete or modify?",
    default() {
      return true;
    },
  });
};

await askPort();
await askCanEdit();
