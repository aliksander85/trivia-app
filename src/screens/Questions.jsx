import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Question from '../components/Question';
import { getQuestions } from '../proxies/getQuestions';

function Questions() {
	const [questionsData, setQuestionsData] = useState([]);
	const limit = useSelector((state) => state.requestParams.limit);
	const difficulty = useSelector((state) => state.requestParams.difficulty);
	const categoryKey = useSelector((state) => state.requestParams.categoryKey);

	useEffect(() => {
		getQuestions({ limit, difficulty, categoryKey }).then((data) => {
			// TODO: works twice, need to reduce
			console.log('data', data);
			setQuestionsData(data);
		});
	}, [limit, difficulty, categoryKey]);

	return (
		<>
			<h2>Questions</h2>
			{questionsData.map((question) => (
				<Question question={question} key={question.id} />
			))}
		</>
	);
}

export default Questions;
