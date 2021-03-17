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

// Load Repositories
fetchGitHubRepos();

// Load Gists
fetchGitHubGists();

/**
 * Fetch GitHub Gists
 * See cache_period
 *
 * @return {Boolean} Cached value used
 * @throws None
 * @author Alec M. <https://amattu.com>
 * @date 2021-03-17T09:36:04-040
 */
function fetchGitHubGists() {
  // Check Cache Validity
  let cache = localStorage.getItem('github_gist_cache') || null;
  cache = cache ? JSON.parse(cache) : null;
  let created = cache && typeof(cache) === "object" ? moment(cache.Created, cache_format, true) : null;
  if (cache && typeof(cache) === "object" && cache.Gists && created && created.isValid() && moment().diff(created, "days") < cache_period) {
    buildGitHubGists(cache.Gists);
    return true;
  }

  // Fetch Repositories
  cache = {Gists: [], Created: moment().format(cache_format)};
  get(api_endpoints.github_gists).then(repos => {
    cache.Gists = repos;
    localStorage.setItem('github_gist_cache', JSON.stringify(cache));
    buildGitHubGists(repos);
  });

  // Default
  return false;
}

/**
 * Fetch GitHub Repos
 * Cache Period: 10d
 *
 * @return {Boolean} Cache value used
 * @throws None
 * @author Alec M. <https://amattu.com>
 * @date 2021-03-16T20:00:43-040
 */
function fetchGitHubRepos() {
  // Check Cache Validity
  let cache = localStorage.getItem('github_repo_cache') || null;
  cache = cache ? JSON.parse(cache) : null;
  let created = cache && typeof(cache) === "object" ? moment(cache.Created, cache_format, true) : null;
  if (cache && typeof(cache) === "object" && cache.Repositories && created && created.isValid() && moment().diff(created, "days") < cache_period) {
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

  // Default
  return false;
}

function buildGitHubRepos(repos = []) {
  // Check Data
  if (!repos || !(repos instanceof Array)) {
    return false;
  }

  // Variables
  let fragment = document.createDocumentFragment();

  // Variables
  repos.forEach(repo => {
    // Checks
    if (!repo.name || !repo.description || !repo.url) {
      return false;
    }

    // Variables
    let name = repo.name.length > 23 ? repo.name.substr(0, 23) + "..." : repo.name;
    description = repo.description.length > 65 ? repo.description.substr(0, 65) + "..." : repo.description;
    let updated = moment(repo.updated_at);
    let url = repo.html_url;
    let div = document.createElement('div');
    let img_element = "<img src='assets/images/GitHub-Mark-120px-plus.png' alt='GitHub Logo' />";
    let new_badge = moment().diff(moment(repo.created_at), "months") < 6 ? "<span class='card-new-badge'>New</span>" : "";

    // Attributes
    div.classList.add('triple-item-card');
    div.innerHTML = `<div class='card-image'>${img_element}</div><div class='card-content'><div class='card-title'>${name}${new_badge}</div><div class='card-description'>${description}</div><div class='card-footer'><div class='card-date'>${updated.fromNow()}</div></div></div>`;
    div.onclick = function() {
      window.open(url);
    };

    // Append
    fragment.appendChild(div);
  });

  // Append
  document.getElementById('github-repositories').appendChild(fragment);
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
