import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuestionCard from '../components/QuestionCard';
import { getQuestions } from '../proxies/getQuestions';
import { setQuestionsData } from '../store/questionsSlice';

function Questions() {
	const dispatch = useDispatch();
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const limit = useSelector((state) => state.requestParams.limit);
	const difficulty = useSelector((state) => state.requestParams.difficulty);
	const categoryKey = useSelector((state) => state.requestParams.categoryKey);

	useEffect(() => {
		getQuestions({ limit, difficulty, categoryKey }).then((data) => {
			// TODO: works twice, need to reduce
			console.log('data', data);
			setQuestions(data);
			dispatch(setQuestionsData({ questionsData: data }));
		});
	}, [limit, difficulty, categoryKey, dispatch]);

	return (
		<>
			<QuestionCard
				question={questions[currentQuestion]}
				setQuestion={setCurrentQuestion}
				questionsLength={questions.length}
				number={currentQuestion}
			/>
		</>
	);
}

export default Questions;
