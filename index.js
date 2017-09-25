// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => res.json()).then(json => console.log(json));


function getIssues() {
  const repo = 'volpja46/javascript-fetch-lab'
 fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }}).then(res => res.json()).then(json => console.log(json));
  }

function showIssues(json) {
}

function createIssue() {
   const repo = 'volpja46/javascript-fetch-lab'
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}


function showResults(json) {
}


  function forkRepo() {
    const repo = 'learn-co-curriculum/javascript-fetch-lab-web-080717'
   fetch(`https://api.github.com/repos/${repo}/fork`, {headers: {
       Authorization: `token ${token}`
     },
      method: "post"
    }).then(res => res.json())
   .then(json => console.log(json));
    }




function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  return ''
}
