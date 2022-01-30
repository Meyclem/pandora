# Commands

## Settings

Command used to setup Pandora on the computer.

```bash
-i  --init 				# intializes the cli on the computer
-s  --show				# shows the settings so they can be edited
```

On the `pandora -i` command, the CLI will ask some questions:
- A Github Personal Access Token that will be needed to act on behalf of the user to manage repositories.
- A password to encrypt / decrypt secrets data.

It will also create:
- A `~/.config/pandora/config.json` file with:
```ts
type Config = {
	ghithubAccessToken: string; // PAT from Github settings
	templateRepositories: string[]; // Array of git urls
	secretsGitUrl: string; // Git url of the secrets' repository
}
```
- A private GH repository to store secrets in, under this format:
```ts
type Secrets = {
	{
	  name: string; // name of the repository
	  gitUrl: string;
	  secrets: {
     filePath: string;
     content: string;
	  }[]
	}
}
```
