import { useEffect, useState } from 'react';

export default function useShuffle(oldArray, item) {
	const [array, setArray] = useState([]);

	useEffect(() => {
		if (!oldArray) {
			return;
		}
		setArray([...oldArray, item]);
	}, [oldArray, item]);

	useEffect(() => {
		setArray((prevArray) => {
			let currentIndex = prevArray.length,
				randomIndex;

			// While there remain elements to shuffle.
			while (currentIndex !== 0) {
				// Pick a remaining element.
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex--;

				// And swap it with the current element.
				[prevArray[currentIndex], prevArray[randomIndex]] = [
					prevArray[randomIndex],
					prevArray[currentIndex],
				];
			}

			return prevArray;
		});
	}, [array]);

	return array;
}
