import { useEffect, useState } from 'react';
import useShuffle from '../utils/useShuffle';

function Question(props) {
	const [answers, setAnswers] = useState([]);
	const shuffled = useShuffle(
		props.question.incorrectAnswers,
		props.question.correctAnswer
	);
	useEffect(() => {
		setAnswers(shuffled);
	}, [shuffled]);

	return (
		<div className="question">
			<p>Q: {props.question.question}</p>
			{answers.map((answer, i) => (
				<p key={answer + i}>{answer}</p>
			))}
		</div>
	);
}

export default Question;
