import React from 'react'

const Layout = ({children}) => {
  return (
    <main className='flex min-h-screen w-full items-center justify-center'>
        <h1>Layout</h1>
        {children}
    </main>
  )
}

export default Layout