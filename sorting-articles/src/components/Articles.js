import React, { useState, useEffect } from 'react';

const filterByUpvotes = (articles) => {
	return [...articles.sort((a, b) => b.upvotes - a.upvotes)];
};

const filterByDate = (articles) => {
	return [
		...articles.sort((a, b) => {
			const articleA = new Date(a.date);
			const articleB = new Date(b.date);

			return articleB - articleA;
		}),
	];
};

function Articles({ articles, filterBy }) {
	const [filteredArticles, setArticles] = useState(filterByUpvotes(articles));

	useEffect(() => {
		if (filterBy === 'UPVOTES') {
			setArticles(filterByUpvotes(articles));
		} else if (filterBy === 'DATE') {
			setArticles(filterByDate(articles));
		}
	}, [filterBy]);

	return (
		<div className="card w-50 mx-auto">
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Upvotes</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{filteredArticles.map((article, i) => {
						return (
							<tr key={article.title} data-testid="article">
								<td data-testid="article-title">{article.title}</td>
								<td data-testid="article-upvotes">{article.upvotes}</td>
								<td data-testid="article-date">{article.date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Articles;
