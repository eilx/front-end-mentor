import { useEffect } from "react"

import { logo, favicon } from "./assets/images"

import { useArticles } from "./hooks"
import { Navigation } from "./components"
import css from "./index.module.css"

export default function Page() {
	// Emulate an api hook
	const articles = useArticles()

	// Set the title and favicon to the current page
	useEffect(() => {
		document.title = "News Homepage"
		const icon = document.querySelector(
			"link[rel='icon']"
		) as HTMLLinkElement
		icon.href = favicon
	})

	return (
		<>
			<header className={css.header}>
				<img src={logo} alt="Website logo" />

				<Navigation>
					<a href="#">Home</a>
					<a href="#">New</a>
					<a href="#">Popular</a>
					<a href="#">Trending</a>
					<a href="#">Categories</a>
				</Navigation>
			</header>

			<main className={css.main}>
				<article className={css.mainArticle}>
					<picture>
						<source
							media="(max-width: 1024px)"
							srcSet={articles.main.image.mobile}
						/>
						<img alt="" src={articles.main.image.desktop} />
					</picture>

					<h1>{articles.main.title}</h1>
					<div className={css.mainArticleBody}>
						<p>{articles.main.snippet}</p>
						<button>READ MORE</button>
					</div>
				</article>

				<section className={css.newArticles}>
					<h2>New</h2>

					{articles.new.map((article, i) => (
						<article key={i}>
							<a href="#">
								<h3>{article.title}</h3>
								<p>{article.snippet}</p>
							</a>
						</article>
					))}
				</section>

				<section className={css.topArticles}>
					{articles.top.map((article, i) => (
						<article key={i}>
							<img src={article.image} alt="article image" />
							<a href="#">
								<span>{String(i + 1).padStart(2, "0")}</span>
								<h3>{article.title}</h3>
								<p>{article.snippet}</p>
							</a>
						</article>
					))}
				</section>
			</main>
		</>
	)
}
