import React from 'react'
import {Helmet} from "react-helmet";

// const SEO = ({title, description, meta = [], url }) => (
//   // <Helmet>
//   //     <meta charSet="utf-8" />
//   //     <title>{title}</title>
//   //     <meta name="description" content={description} />
//   //     <link rel="canonical" href={url} />
//   // </Helmet>
// //    <Helmet title = {title}
// //    htmlAttributes={{ lang: "en" }}
// //    meta={[
// //     {
// //       charSet:"utf-8" ,
// //       name: `description`,
// //       content: description,
// //     },
// // ]}
// // />
// )

// import {useStaticQuery, graphql} from 'gatsby'
import PropTypes from 'prop-types'
// import SchemaOrg from './schema-org'
import defaultMetaImage from '../img/OGimg.png'
import defaultMetaLogo from '../img/favicon.png'

const config={'siteTitle':'#FunnyPetDreamChallenge'}
function SEO({
  siteMetadata: seo,
  postData,
  metaImage,
  isBlogPost,
  frontmatter: postMeta = postData.childMarkdownRemark.frontmatter || {},
  title = postMeta.title || config.siteTitle,
  description = postMeta.plainTextDescription ||
    postMeta.description ||
    seo.description,
  image = metaImage?.startsWith('http:') || metaImage?.startsWith('https:')
    ? metaImage
    : `${seo.canonicalUrl}${metaImage || defaultMetaImage}`,
  url = postMeta.slug
    ? `${seo.canonicalUrl}${postMeta.slug}`
    : seo.canonicalUrl,
  datePublished = isBlogPost ? postMeta.datePublished : false,
}) {
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={seo.social.fbAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      {/* <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        canonicalUrl={seo.canonicalUrl}
        author={seo.author}
        organization={seo.organization}
        defaultTitle={seo.title}
      /> */}
    </>
  )
}
function SEOWithQuery(props) {
  const {
    site: {siteMetadata},
  } = 
    {
      site :{
        siteMetadata :{
          title:'title',
          description:'#FunnyPetDreamChallenge',
          canonicalUrl:'#FunnyPetDreamChallenge',
          image:defaultMetaImage,
          author :{
            name:'#FunnyPetDreamChallenge',
          },
          organization :{
            name:'#FunnyPetDreamChallenge',
            url:'#FunnyPetDreamChallenge',
            logo:defaultMetaLogo,
          },
          social :{
            twitter:'#FunnyPetDreamChallenge',
            fbAppID:'#FunnyPetDreamChallenge',
          },
        }
      }
    }
  return <SEO siteMetadata={siteMetadata} {...props} />
}

// function SEOWithQuery(props) {
//   const {
//     site: {siteMetadata},
//   } = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//           description
//           canonicalUrl
//           image
//           author {
//             name
//           }
//           organization {
//             name
//             url
//             logo
//           }
//           social {
//             twitter
//             fbAppID
//           }
//         }
//       }
//     }
//   `)
//   return <SEO siteMetadata={siteMetadata} {...props} />
// }

SEOWithQuery.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  metaImage: PropTypes.string,
}

SEOWithQuery.defaultProps = {
  isBlogPost: false,
  postData: {childMarkdownRemark: {}},
  metaImage: null,
}

export default SEOWithQuery
// export default SEO