import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site, description } from '../config';

export async function get(context) {
	const posts = await getCollection('posts');
	return rss({
		title: site,
		description: description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/posts/${post.slug}/`,
		})),
	});
}
