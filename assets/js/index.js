// Basic Configuration
const cache_period = 10;
const cache_format = "YYYY-MM-DD";
const api_username = "amattu2";
const api_params = "type=owner&sort=updated&direction=desc&per_page=15";
const api_endpoints = {
  github_repos: `https://api.github.com/users/${api_username}/repos?${api_params}`,
  github_gists: `https://api.github.com/users/${api_username}/gists?${api_params}`
};

// Set Age
const age = new Date().getFullYear() - 1999;
document.getElementById('about-age').textContent = age;

// load Repositories

// load gists
/*
When a repo was created less than 6mo ago, add a NEW badge like google did for the "Share" file on google drive in shared workspaces
*/

function fetchGitHubGists() {

}

/**
 * Fetch GitHub Repos
 * Cache Period: 10d
 *
 * @return {Object} Repository Object
 * @throws None
 * @author Alec M. <https://amattu.com>
 * @date 2021-03-16T20:00:43-040
 */
function fetchGitHubRepos() {
  // Check Cache Validity
  let cache = localStorage.getItem('github_repo_cache') || null;
  cache = cache ? JSON.parse(cache) : null;
  let created = cache && typeof(cache) === "object" ? moment(cache.Created, cache_format, true) : null;
  if (cache && typeof(cache) === "object" && cache.Repositories && created && created.isValid() && moment().diff(created, "days") > cache_period) {
    buildGitHubRepos(cache.Repositories);
    return true;
  }

  // Fetch Repositories
  cache = {Repositories: [], Created: moment().format(cache_format)};
  get(api_endpoints.github_repos).then(repos => {
    cache.Repositories = repos;
    localStorage.setItem('github_repo_cache', JSON.stringify(cache));
    buildGitHubRepos(repos);
  });
}

function buildGitHubRepos(repos = []) {

}

/**
 * Perform GET request on URL
 *
 * @param {String} Relative URL
 * @param {Object} Options
 * @return {Promise} XMLHttpRequest.responseText
 * @author Alec M. <https://amattu.com>
 * @date 2020-01-15T18:01:22-050
 */
async function get(url) {
  return new Promise(function(resolve) {
    // Variables
    let request = new XMLHttpRequest();
    let data;

    // Checks
    if (!url) {
      resolve(null);
      return false;
    }

    // Response
    request.onreadystatechange = function() {
      // Checks
      if (request.readyState !== 4) { return false; }
      if (request.status !== 200) {
        resolve(null);
        return false;
      }
      if (["application/json; charset=utf-8", "application/json"].includes(request.getResponseHeader('content-type'))) {
        data = JSON.parse(request.responseText);
      } else {
        data = request.responseText;
      }

      // Return
      resolve(data);
    };

    // Request
    request.open('GET', url, true);
    request.send();
  });
}
