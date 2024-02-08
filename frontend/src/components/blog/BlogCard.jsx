import React from 'react'

export default function BlogCard({ title, desc }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}
