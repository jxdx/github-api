export const getRepositories = async (searchText) => {
  const res = await fetch(`https://api.github.com/orgs/${searchText}/repos`)
  return res.json()
  // I don't know why .then doesn't work
  // return fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
  //   res.json()
  // )
}
