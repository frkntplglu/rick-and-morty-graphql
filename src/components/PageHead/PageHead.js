import React from 'react'
import Header from '../Header/Header'
import PropTypes from 'prop-types'; // ES6
import "./pagehead.scss"

function PageHead({title}) {
    return (
        <section className="page-head">
            <Header />
            <h1>{title}</h1>
        </section>
    )
}

export default PageHead


PageHead.propTypes = {
    title: PropTypes.string.isRequired
}

PageHead.defaultProps = {
    title: "Rick and Morty GraphQL API"
}