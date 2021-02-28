// Developers create a new branch every time they start work on a new feature.
  // Feature branches should have descriptive names, like animated-menu-items or issue-#1061.
  // The idea is to give a clear, highly - focused purpose to each branch.
// In addition, feature branches can (and should) be pushed to the central repository.
  // This makes it possible to share a feature with other developers without touching any official code.

// 1. Start with the master branch
      // All feature branches are created off the latest code state of a project
      git checkout master
      git fetch origin
      git reset --hard origin/master

// 2. Create a new-branch
      // Use a separate branch for each feature or issue you work on.
      // After creating a branch, check it out locally so that any changes you make will be on that branch.
      git checkout -b newFeature

//3. Update, add, commit, and push changes
      // On this branch, edit, stage, and commit changes in the usual fashion
      // Building up the feature with as many commits as necessary.
      // Work on the feature and make commits like you would any time you use Git.
      // When ready, push your commits, updating the feature branch on Bitbucket.
      git status
      git add //< some - file >
      git commit

//4. Push feature branch to remote
      // It’s a good idea to push the feature branch up to the central repository.
      git push -u origin newFeature

//5. Resolve feedback
      // Now teammates comment and approve the pushed commits.

//6. Merge your pull request
    // Before you merge, you may have to resolve merge conflicts if others have made changes to the repo.
    // When your pull request is approved and conflict-free, you can add your code to the master branch.
    // Merge from the pull request in Bitbucket.