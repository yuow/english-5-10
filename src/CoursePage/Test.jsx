import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/checkbox.css';
const question = [
  {
    variants: ['I lost my keys last night.', "I've lost my keys last night"],
    correct: 'I lost my keys last night.',
  },
  {
    variants: [
      "I didn't meet with Claude yet.",
      "I haven't met with Claude yet.",
    ],
    correct: "I haven't met with Claude yet.",
  },
  {
    variants: [
      'All these tests this week have been ruining my mood!',
      'All these tests this week were ruining my mood!',
    ],
    correct: 'All these tests this week have been ruining my mood!',
  },
  {
    variants: ["I didn't sleep well today.", "I haven't slept well today."],
    correct: "I haven't slept well today.",
  },
  {
    variants: [
      'My son has nailed the exams last year.',
      'My son nailed the exams last year.',
    ],
    correct: 'My son has nailed the exams last year.',
  },
];

function Question({ question, answer, isComplete, isCorrect }) {
  return (
    <div>
      {question.variants.map((text, id) => (
        <label
          class="container-a"
          style={{
            color: isComplete ? (isCorrect ? 'green' : 'red') : 'white',
          }}
        >
          {text}
          <input
            type="radio"
            name={question.variants[0]}
            onChange={(e) => {
              answer(text);
            }}
          />
          <span class="checkmark"></span>
        </label>
      ))}
    </div>
  );
}

const getReturnValues = (countDown) => {
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [hours, minutes, seconds];
};

export function Test() {
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [countDownDate, setCountDown] = useState(0);
  const startTime = useRef(Date.now());

  useEffect(() => {
    if (isComplete) return;
    const interval = setInterval(() => {
      setCountDown(new Date().getTime() - startTime.current);
    }, 1000);

    return () => clearInterval(interval);
  }, [isComplete]);

  const count = () => {
    let newScore = 0;
    for (let i = 0; i < question.length; i++) {
      if (chosen[i] === question[i].correct) newScore++;
    }
    setScore(newScore);
  };

  const answer = (id) => (text) => {
    setChosen((chosen) => {
      chosen[id] = text;
      return chosen;
    });
  };

  return (
    <div
      className="posts"
      style={{
        display: 'flex',
        paddingInline: 86,
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Тест</h2>
        {question.map((question, idx) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'start',
            }}
          >
            <p>Выберите правильный вариант:</p>
            <Question
              question={question}
              answer={answer(idx)}
              isComplete={isComplete}
              isCorrect={chosen[idx] === question.correct}
            />
          </div>
        ))}

        <button
          onClick={() => {
            setIsComplete(true);
            count();
          }}
          id="next"
          type="submit"
        >
          {isComplete ? (
            <Link to="/" style={{ color: 'white' }}>
              Вернуться
            </Link>
          ) : (
            'Завершить'
          )}
        </button>
      </div>
      <div>
        <p>
          Время:
          {(() => {
            const arr = getReturnValues(countDownDate);
            return (
              ' ' +
              (arr[0] + '').padStart(2, '0') +
              ':' +
              (arr[1] + '').padStart(2, '0') +
              ':' +
              (arr[2] + '').padStart(2, '0')
            );
          })()}
        </p>
        <p>
          Счет: {score} / {question.length}
        </p>
      </div>
    </div>
  );
}
