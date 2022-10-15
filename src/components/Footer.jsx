import React from 'react';

function Footer() {
	return (
		<footer className="footer">
			<p className="footer__text">Alexander Potapov</p>
			<p className="footer__text">
				API by{' '}
				<a
					href="https://the-trivia-api.com/"
					title="Trivia API"
					target="_blank"
					rel="noreferrer"
				>
					the-trivia-api.com
				</a>
			</p>
		</footer>
	);
}

export default Footer;
