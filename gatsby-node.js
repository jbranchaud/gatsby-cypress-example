/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const pokemon = [
    {
      id: 1,
      name: 'Bulbasaur',
    },
    {
      id: 4,
      name: 'Charmander',
    },
    {
      id: 7,
      name: 'Squirtle',
    },
  ];

  const pokemonTemplate = path.resolve(`src/templates/pokemon-show.js`);
  return pokemon.forEach(p => {
    const path = `/pokemon/${p.id}`;
    createPage({
      path,
      component: pokemonTemplate,
      layout: `index`,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        path,
        pokemonData: p,
      },
    });
  });

  // return new Promise((resolve, reject) => {
  //   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  //   // Query for markdown nodes to use in creating pages.
  //   resolve(
  //     graphql(
  //       `
  //         {
  //           allMarkdownRemark(limit: 1000) {
  //             edges {
  //               node {
  //                 frontmatter {
  //                   path
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       `
  //     ).then(result => {
  //       if (result.errors) {
  //         reject(result.errors);
  //       }

  //       // Create pages for each markdown file.
  //       result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //         const path = node.frontmatter.path;
  //         createPage({
  //           path,
  //           component: blogPostTemplate,
  //           // If you have a layout component at src/layouts/blog-layout.js
  //           layout: `blog-layout`,
  //           // In your blog post template's graphql query, you can use path
  //           // as a GraphQL variable to query for data from the markdown file.
  //           context: {
  //             path,
  //           },
  //         });
  //       });
  //     })
  //   );
  // });
};
