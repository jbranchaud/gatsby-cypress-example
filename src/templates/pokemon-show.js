// pokemon-show.js
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';

class PokemonShow extends React.Component {
  render() {
    const { id, name } = this.props.pathContext.pokemonData;

    return (
      <div>
        <Helmet title={`${name}`} />
        <h1>
          {id}: {name}
        </h1>
        <Link data-testid="pokemon-index" to="/pokemon">
          Back to pokemon
        </Link>
      </div>
    );
  }
}

export default PokemonShow;

// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       id
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `;
