// Set Age
const age = new Date().getFullYear() - 1999;
document.getElementById('about-age').textContent = age;

// load Repositories

// load gists

/*
only list repos where I'm owner, sort by activity
show top 10 of each
https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
https://api.github.com/users/amattu2/repos
https://api.github.com/users/amattu2/gists
- When a repo was created less than 6mo ago, add a NEW badge like google did for the "Share" file on google drive in shared workspaces
*/
