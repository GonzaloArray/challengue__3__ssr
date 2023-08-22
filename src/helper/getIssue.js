export const getIssue = (search) => {
  const data = search.split('/')
  const findIssue = data[data.indexOf('issue') + 1]

  return findIssue || search
}
