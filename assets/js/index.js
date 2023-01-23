/*
 * Produced: Mon Jan 23 2023
 * Author: Alec M.
 * GitHub: https://amattu.com/links/github
 * Copyright: (C) 2023 Alec M.
 * License: License GNU Affero General Public License v3.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * GitHub API Cache Period (Days)
 *
 * @type {Number}
 */
const cachePeriodDays = 10;

/**
 * LocalStorage Cache Date Format
 *
 * @type {String}
 */
const cacheDateFormat = "YYYY-MM-DD";

/**
 * GitHub Username
 *
 * @type {String}
 */
const githubUsername = "amattu2";

/**
 * GitHub API Parameters
 *
 * @type {String}
 */
const githubApiParams = "type=owner&sort=updated&direction=desc&per_page=15";

// Build UI
(async function() {
  // Fetch API Data or Cache
  const [repositories, gists] = (await Promise.allSettled([
    fetchGitHubRepos(),
    fetchGitHubGists(),
  ])).map(p => p.status === "fulfilled" ? p.value : null);

  // Build Repositories Section
  if (repositories && (repositories instanceof Array) && repositories.length > 0) {
    const fragment = document.createDocumentFragment();

    // Variables
    repositories.forEach(repo => {
      // Checks
      if (!repo.name || !repo.description || !repo.url || repo.archived) {
        return false;
      }

      // Variables
      const name = repo.name.length > 23 ? repo.name.substr(0, 23) + "..." : repo.name;
      const description = repo.description.length > 65 ? repo.description.substr(0, 65) + "..." : repo.description;
      const updated = moment(repo.updated_at);
      const url = repo.html_url;
      const div = document.createElement('div');
      const img_element = "<img src='assets/images/GitHub-Mark-120px-plus.png' alt='GitHub Logo' />";
      const new_badge = moment().diff(moment(repo.created_at), "months") < 6 ? "<span class='card-new-badge'>New</span>" : "";

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

  // Build Gists Section
  if (gists && (gists instanceof Array) && gists.length > 0) {
    // Variables
    const fragment = document.createDocumentFragment();

    // Variables
    gists.forEach(gist => {
      // Checks
      if (!gist.html_url || !gist.files || !Object.keys(gist.files)[0]) {
        return false;
      }

      // Variables
      let first_file_name = gist.files[Object.keys(gist.files)[0]].filename || "No Name";
      let url = gist.html_url;
      let div = document.createElement('div');

      // Attributes
      div.classList.add('single-item-card');
      div.innerHTML = `<span class="material-icons">source</span><a target="_blank" rel="noreferrer" href='${url}'>${first_file_name}</a>`;
      div.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.open(url);
      };

      // Append
      fragment.appendChild(div);
    });

    // Append
    document.getElementById('github-gists').appendChild(fragment);
  }
})();

/**
 * Fetch GitHub Gists
 * See: cachePeriodDays
 *
 * @throws None
 * @author Alec M. <https://amattu.com>
 * @date 2021-03-17T09:36:04-040
 */
async function fetchGitHubGists() {
  // Check Cache Validity
  const localStorageCache = localStorage.getItem('github_gist_cache') || null;
  let cache = localStorageCache ? JSON.parse(localStorageCache) : null;
  const created = cache && typeof(cache) === "object" ? moment(cache.Created, cacheDateFormat, true) : null;
  if (cache && typeof(cache) === "object" && cache.Gists && created && created.isValid() && moment().diff(created, "days") < cachePeriodDays) {
    return cache.Gists;
  }

  // Fetch Gists
  cache = {Gists: [], Created: moment().format(cacheDateFormat)};
  const gists = await get(`https://api.github.com/users/${githubUsername}/gists?${githubApiParams}`);
  cache.Gists = gists;
  localStorage.setItem('github_gist_cache', JSON.stringify(cache));
  return gists;
}

/**
 * Fetch GitHub Repos
 * See: cachePeriodDays
 *
 * @throws None
 * @author Alec M. <https://amattu.com>
 * @date 2021-03-16T20:00:43-040
 */
async function fetchGitHubRepos() {
  // Check Cache Validity
  const localStorageCache = localStorage.getItem('github_repo_cache') || null;
  let cache = localStorageCache ? JSON.parse(localStorageCache) : null;
  const created = cache && typeof(cache) === "object" ? moment(cache.Created, cacheDateFormat, true) : null;
  if (cache && typeof(cache) === "object" && cache.Repositories && created && created.isValid() && moment().diff(created, "days") < cachePeriodDays) {
    return cache.Repositories;
  }

  // Fetch Repositories
  cache = {Repositories: [], Created: moment().format(cacheDateFormat)};
  const repos = await get(`https://api.github.com/users/${githubUsername}/repos?${githubApiParams}`);
  cache.Repositories = repos;
  localStorage.setItem('github_repo_cache', JSON.stringify(cache));
  return repos;
}

/**
 * Perform GET request on URL
 *
 * @param {String} url
 * @return {Promise} XMLHttpRequest.responseText
 * @author Alec M. <https://amattu.com>
 * @date 2020-01-15T18:01:22-050
 */
async function get(url) {
  return new Promise((resolve, reject) => {
    // Variables
    const request = new XMLHttpRequest();
    let data;

    // Checks
    if (!url) {
      resolve(null);
      return false;
    }

    // Response
    request.onreadystatechange = () => {
      // Checks
      if (request.readyState !== 4) { return false; }
      if (request.status !== 200) {
        resolve(null);
        return null;
      }
      if (["application/json; charset=utf-8", "application/json"].includes(request.getResponseHeader('content-type'))) {
        data = JSON.parse(request.responseText);
      } else {
        data = request.responseText;
      }

      resolve(data);
    };

    // Request
    request.open('GET', url, true);
    request.send();
  });
}
