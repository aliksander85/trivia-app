import { useState } from 'react';

function Question({
	setIsFinish,
	answers,
	setScore,
	number,
	setQuestion,
	questionsLength,
	question,
}) {
	const [currentAnswer, setCurrentAnswer] = useState('');

	const handleClickAnswer = (answer) => {
		setCurrentAnswer(answer);
	};

	const handleClickNext = () => {
		if (currentAnswer === question.correctAnswer) {
			setScore((prevScore) => prevScore + 1);
		}
		if (number < questionsLength - 1) {
			setQuestion((current) => current + 1);
		}
		if (number === questionsLength - 1) {
			setIsFinish(true);
		}
	};

	return (
		<>
			<h2 className="question-card__title">{question.question}</h2>
			<ul className="question-card__list answers">
				{answers.map((answer) => (
					<li
						className={
							'answers__item answer ' +
							(answer === currentAnswer ? 'selected' : '')
						}
						key={answer}
						onClick={() => handleClickAnswer(answer)}
					>
						{answer}
					</li>
				))}
			</ul>
			<p>
				Question {number + 1}/{questionsLength}
			</p>
			<button onClick={handleClickNext}>
				{number >= questionsLength - 1 ? 'Finish' : 'Next'}
			</button>
		</>
	);
}

export default Question;
