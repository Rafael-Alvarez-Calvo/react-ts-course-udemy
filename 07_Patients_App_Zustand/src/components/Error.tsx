import React from 'react'

export const Error = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className='mt-2 text-red-500 font-semibold'>{children}</p>
    )
}
