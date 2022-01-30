import { Command, flags } from "@oclif/command";
// import cli from "cli-ux";
import * as execa from "execa";
import * as Listr from "listr";

export default class Init extends Command {
  static description = "describe the command here";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  async run(): Promise<void> {
    // start the spinner
    // cli.action.start("starting a process");
    // setTimeout(() => {
    //   cli.action.stop("✅"); // shows 'starting a process... done'

    //   // show on stdout instead of stderr
    //   cli.action.start("starting a process", "initializing", { stdout: true });
    //   // do some action...
    //   // stop the spinner with a custom message
    //   cli.action.stop("custom message"); // shows 'starting a process... custom message'
    // }, 5000);
    // do some action...
    // stop the spinner

    const tasks = new Listr([
      {
        title: "Git",
        task: () => {
          return new Listr(
            [
              {
                title: "Checking git status",
                task: async () => {
                  const { stdout } = await execa("git", ["status"], {
                    stdio: "inherit",
                  });
                  return stdout;
                },
              },
              {
                title: "Checking git status again",
                task: async () =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve("✅");
                    }, 3000);
                  }),
              },
            ],
            { concurrent: true },
          );
        },
      },
      {
        title: "Install package dependencies with Yarn",
        task: (ctx, task) =>
          execa("yarn", ["install"])
            .then((result) => console.log(result.stdout))
            .catch(() => {
              ctx.yarn = false;

              task.skip(
                "Yarn not available, install it via `npm install -g yarn`",
              );
            }),
      },
    ]);

    tasks.run().catch((err) => {
      console.error(err);
    });
  }
}
