import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>List Examinations</h1>
  
    <ul>
      {data.allStrapiExam.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.name}</Link>
          </h2>
          <p>{document.node.description}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiExam {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`