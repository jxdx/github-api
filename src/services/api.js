export const getRepositories = async (searchText) => {
  const res = await fetch(`https://api.github.com/orgs/${searchText}/repos`)
  return res.json()
  // TODO: I don't know why .then doesn't work
  // return fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
  //   res.json()
  // )
}

export const getCommits = async (org, repo) => {
  // const [url, setUrl] = useState('https://api.github.com/repos/netflix/astyanax/commits');
  const res = await fetch(`https://api.github.com/repos/${org}/${repo}/commits`)
  return res.json()
}