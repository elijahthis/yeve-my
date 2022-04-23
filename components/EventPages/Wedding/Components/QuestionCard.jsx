import tw, { css } from 'twin.macro'

const QuestionCard = ({ questionList }) => {
  return (
    <div
      css={css`
        max-width: 612px;
        background: #ffffff;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        padding: 26px 141px 32px 40px;

        .card {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 1rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e5e5e5;
        }
        > :last-child {
          border-bottom: 0;
        }

        .q {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
          color: #1a1a1a;
        }

        .question {
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
          color: #343434;
          margin-bottom: 12px;
        }
        .answer {
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          color: #343434;
        }
      `}
    >
      {questionList.map((question, ind) => (
        <div className="card">
          <div>
            <span className="q">Q.</span>
          </div>
          <div>
            <p className="question">{question.question}</p>
            <p className="answer">{question.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default QuestionCard
