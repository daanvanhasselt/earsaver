/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({ actions }) => {
    const { createPage } = actions
    createPage({
        path: "/en",
        component: path.resolve(`./src/pages/index.js`),
        context: {
            lang: 'en'
        },
    })
}