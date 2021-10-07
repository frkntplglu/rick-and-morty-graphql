import React from 'react'
import { Link } from 'react-router-dom'
import "./pagination.scss"

function Pagination() {
    return (
        <div className="pagination">
            {
                Array(34).fill().map((_item, index) => {
                    return <Link key={index} to={`/characters/${index + 1}`}>{index + 1}</Link>
                })
            }
            
        </div>
    )
}

export default Pagination
