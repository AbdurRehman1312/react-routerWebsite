import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Linkedin = () => {
    const data = useLoaderData()
    return (
        <div className='text-center m-4  text-black p-4 text-3xl'>LinkedIn followers: 600+
        <img src={data.avatar_url} alt="Git picture" width={200} className='rounded-full mx-auto my-3' />
        </div>
      )
}

export default Linkedin