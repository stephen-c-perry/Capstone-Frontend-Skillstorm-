# Employee Timekeeping App Frontend

This repository holds the Angular application built by the 20240311 Java CGI Apprenticeship Cohort for their project 4 Employee Timekeeping App. See cgi-java-proj4-api for the corresponding backend.

## Contributing

To contribute to the application, follow the below instructions.

### Setup

To get started, clone the repository to your local computer using

```
git clone https://github.com/skillstorm-congo/cgi-java-proj4-api.git
```

Open a New Window in VS Code. In the new VS Code window select `Open Folder` and navigate to the root directory of the project. 

To make sure all of the npm dependencies are installed, run `npm install`

### Editing Code

Before starting to edit the code, create a new branch and checkout the new branch using:

```
git checkout -b <branch-name>
```
Or if you already have a branch created

```
git checkout <branch-name>
```

#### Branching Strategy

**main** - The main branch is for the production version of the code which has been approved and tested.

> [!WARNING]
> Do not work or push directly to **main**. Branch protection rules will not allow work directly on main.
> Code must be pushed to a feature branch. Then, you must open a pull request to start a code review before the code is added to the main branch.

All other branches should use the naming strategy: `feature-<something>-<your-initials>` or
```
bugfix-<something>-<your-initials>
```

For example: `feature-login-eh` or `bugfix-routeguard-eh`

### Merging Code

Make a pull request on GitHub.com choosing `main <-- feature-your-branch-eh` 

> [!WARNING]
> Do not continue to work or push to the feature branch you are asking to be merged. This will modify the code in the pull request. 
> Instead, create a new feature branch to work on while the pull request is open. 
