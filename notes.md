Git:

When you want to edit something but don’t want it to go to main website:
- make sure you are on main branch `git checkout main`
- pull latest changes `git pull`
- make new branch: `git checkout -b <branch-name>`
- make changes
- push to new branch:
    - `git add <paths>` to add files to staging area
    - `git status` will show you which files are in staging area
    - `git commit -m '<message>'` will commit your changes, and you should put a short message explaining changes
    - `git push --set-upstream origin <branch-name>` (first time pushing new branch) or `git push` after that
-  in the github, sign-in and 
    press the button that says "compare and pull request"
   - double check if changes are good, then "create pull request"
   - "merge pull request"
   - "confirm merge" 

Next JS:
- `npm run dev` to run locally, default http://localhost:3000