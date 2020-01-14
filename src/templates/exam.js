import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout' 

const ExamTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiExam.name}</h1>
    <p>{data.strapiExam.description}</p>
    {/* <p>by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p> */}
    {/* <Img fixed={data.strapiArticle.image.childImageSharp.fixed}/> */}
    <ol>
      {data.strapiExam.questions.map(document => (
        <li key={document.id}>
          <b>{document.Question}</b><br></br>
          <input type="radio" name={document.id} value="A"></input>A. {document.CorrectAnswer}<br></br>
          <input type="radio" name={document.id} value="B"></input>B. {document.WrongAnswer1}<br></br>
          <input type="radio" name={document.id} value="C"></input>C. {document.WrongAnswer2}<br></br>
          <input type="radio" name={document.id} value="D"></input>D. {document.WrongAnswer3}<br></br>
        </li>
      ))}
    </ol>
    <button type="submit">Submit</button>
  </Layout>
)

export default ExamTemplate

export const query = graphql`
  query ExamTemplate($id: String!) {
    strapiExam(id: {eq: $id}) {
      name
      description
      questions {
        id
        Question
        CorrectAnswer
        WrongAnswer1
        WrongAnswer2
        WrongAnswer3
      }
    }
  }
`