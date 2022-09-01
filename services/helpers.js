export const getToken = () => {
  return localStorage.getItem('yeve:token')
}

export const setAuthToken = token => {
  localStorage.setItem('yeve:token', token)
}

export const getRefreshToken = () => {
  return localStorage.getItem('yeve:refresh:token')
}

export const setRefreshToken = token => {
  localStorage.setItem('yeve:refresh:token', token)
}

export const setLocationHistory = location => {
  sessionStorage.setItem('yeve:redirect:location', JSON.stringify(location))
}

export const setType = type => {
  localStorage.setItem('yeve:user:role', type)
}

export const getType = () => {
  let type = localStorage.getItem('yeve:user:role')
  // console.log(type)
  return type
}

export const inputFunc = (evt, formDataObj, setFormDataObj) => {
  const name = evt.target.name
  const newValue = evt.target.value
  setFormDataObj({ ...formDataObj, [name]: newValue })
}
