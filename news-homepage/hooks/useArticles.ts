import * as images from "../assets/images"

interface Article {
	title: string
	snippet: string
}

interface ImageArticle extends Article {
	image: string
}

interface MainArticle extends Article {
	image: { mobile: string; desktop: string }
}

const articles: {
	main: MainArticle
	new: [Article, Article, Article]
	top: [ImageArticle, ImageArticle, ImageArticle]
} = {
	main: {
		title: "The Bright Future of Web 3.0?",
		image: { mobile: images.webMobile, desktop: images.webDesktop },
		snippet:
			"We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
	},
	new: [
		{
			title: "Hydrogen VS Electric Cars",
			snippet: "Will hydrogen-fueled cars ever catch up to EVs?",
		},
		{
			title: "The Downsides of AI Artistry",
			snippet:
				"What are the possible adverse effects of on-demand AI image generation?",
		},
		{
			title: "Is VC Funding Drying Up?",
			snippet:
				"Private funding by VC firms is down 50% YOY. We take a look at what that means.",
		},
	],
	top: [
		{
			title: "Reviving Retro PCs",
			image: images.retroPCs,
			snippet: "What happens when old PCs are given modern upgrades?",
		},
		{
			title: "Top 10 Laptops of 2022",
			image: images.topLaptops,
			snippet: "Our best picks for various needs and budgets.",
		},
		{
			title: "The Growth of Gaming",
			image: images.gamingGrowth,
			snippet: "How the pandemic has sparked fresh opportunities.",
		},
	],
}

export const useArticles = () => articles
