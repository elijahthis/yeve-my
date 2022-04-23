import tw, { css } from 'twin.macro'
import { weddingSection } from '../../Regular/styles'
import QuestionCard from '../Components/QuestionCard'

const QandA = () => {
  const questionList = [
    {
      question: 'When is the RSVP Deadline?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mag',
    },
    {
      question: 'Can I Bring a Date?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing    ',
    },
    {
      question: 'What will the weather be like?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mag      ',
    },
  ]
  return (
    <section css={weddingSection}>
      <h4>YOU MIGHT WANT TO KNOW</h4>
      <h2>Q & A</h2>
      <p className="text-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magna ut
        lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. A mag
      </p>
      <QuestionCard questionList={questionList} />
    </section>
  )
}

export default QandA
