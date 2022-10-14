import { useEffect, useState } from 'react';
import Score from '../components/Score';
import Question from './Question';

function QuestionCard({ question, setQuestion, questionsLength, number }) {
	const [answers, setAnswers] = useState([]);
	const [score, setScore] = useState(0);
	const [isFinish, setIsFinish] = useState(false);

	useEffect(() => {
		if (!question) {
			return;
		}
		setAnswers(
			[...question.incorrectAnswers, question.correctAnswer].sort(
				() => Math.random() - 0.5
			)
		);
	}, [question]);

	return (
		<>
			{question && (
				<div className="question-card">
					{isFinish ? (
						<Score
							score={score}
							questionsLength={questionsLength}
						/>
					) : (
						<Question
							setIsFinish={setIsFinish}
							answers={answers}
							setScore={setScore}
							number={number}
							setQuestion={setQuestion}
							questionsLength={questionsLength}
							question={question}
						/>
					)}
				</div>
			)}
		</>
	);
}

export default QuestionCard;
