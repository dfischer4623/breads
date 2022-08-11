const React = require('react')
const Default = require('./layouts/Default')

function Show({ error }) {
    return (
        <Default>
            <h3>{error} Not Found!!</h3>
            <li><a href="/breads">Go home</a></li>
        </Default>
    )
}

module.exports = Show