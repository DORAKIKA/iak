import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../config';

export async function get(context) {
	const posts = await getCollection('posts');
	return rss({
		title: site.name,
		description: site.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			pubDate: post.data.date,
			link: `/post/${post.slug}`,
		})),
	});
}
