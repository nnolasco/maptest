# Making changes to the existing app
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(After you've cloned from the repo)
1. Check which branch you're in with:
    ```sh
    git branch
    ```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(If you're already in `dev` branch skip to step 3)

2. We want to be in dev branch, we can get there by
    ```sh
    git checkout dev
    ```

3. From here we'll create a new branch with
    ```sh
    git checkout -b [branch_name]
    ```

## Saving changes
1. Get everything ready to commit, use this command to add everything that's been changed:
    ```sh
    git add .
    ```

2. Commit changes:

    ***Important Notes:***
        * Please be descriptive with the commit message as to why this change was made. There's no need to reference files or repeat the description of the issue as we can see that from the commit and Jira.
        * When committing please follow the following format:
    ```sh
    git commit -m "branch_name # Enter update here"
    ```

    ### Git Commits

    * Make sure commits are related to a single issue and that all changes committed are related to just the issue on question. Git offers several ways of committing just specific changes even within the next file. You can always ping me with questions.

    * Branching strategy remains the almost identical as before: merge out of Dev into features and fix branches as needed. The only change is that we will use the Jira ticket number to name the branch. For features you can use a descriptive name after the ticket number: e.g., feature/SRA-300-this-is-myfeature. Fixes and hotfixes just get the Jira Ticket number.

    * We may run into situations when a hot-fix against the current version is needed. In this case merge out of master as a hot-fix/JIRA-ticket. After going through QA and validating we will merge this fix to dev and master, do a regression test on master and release a new version if everything checks out.

    ##### Bad example:
        SRA-300 #updates
        SRA-300 #changes to index.html

    ##### Good example:
        SRA-300 #timer variable was not being reset after restarting the challenge.

## Pushing Remotely
1. Try pushing remotely with:
    ```sh
    git push
    ```
  * If your remote isn't setup you'll have to set an upstream in order to push remotely, you can do this using:
    ```sh
    git push --set-upstream origin [Enter_Name_of_the_branch]
    ```
