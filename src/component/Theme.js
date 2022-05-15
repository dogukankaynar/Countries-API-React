import React from 'react'

function Theme({theme,setTheme}) {
    const changeTheme=()=>{
        setTheme(theme==='light'?'dark':'light')
    }
  return (
    <div><button onClick={changeTheme}>Change Theme</button></div>
  )
}

export default Theme