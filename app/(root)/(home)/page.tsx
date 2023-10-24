import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>home</h1>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default page