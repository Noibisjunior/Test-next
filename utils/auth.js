const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {}

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
    if (!isBrowser) return false
    const usernameLogin = username.toLowerCase()

    console.log(`Logging in...`)
    if (usernameLogin === `nomando` && password === `nomando4259`) {
      console.log(`Credentials match! Setting the active user.`)
      return setUser({
        name: `Nomando`,
        email: `admin@example.com`,
      })
    } 
    if (usernameLogin === `vuddy` && password === `vuddy4259`) {
      console.log(`Credentials match! Setting the active user.`)
      return setUser({
        name: `Vuddy`,
        email: `admin@example.com`,
      })
    } 

    if (usernameLogin === `consilium` && password === `consilium4259`) {
      console.log(`Credentials match! Setting the active user.`)
      return setUser({
        name: `Consilium`,
        email: `admin@example.com`,
      })
    } 
  
    return false
}
  
export const isLoggedIn = () => {
    if (!isBrowser) return false

    const user = getUser()
    return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
    if (!isBrowser) return

    console.log(`Ensuring the \`gatsbyUser\` property exists.`)
    setUser({})
    callback()
}
  
