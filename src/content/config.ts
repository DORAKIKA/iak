import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	schema: z.object({
		// title：文章标题，必填
		title: z.string(),
		// date：文章发布时间，必填
		date: z.string().or(z.date()).transform((date: string | Date) => typeof date === 'string' ? new Date(date) : date),
		// description：文章描述，选填
		description: z.string().or(z.undefined()),
		// tags：文章标签，选填
		tags: z.array(z.string()).or(z.undefined()),
		// category：文章分类，选填
		category: z.string().or(z.undefined()),
		// cover：文章封面，选填
		cover: z.string().or(z.undefined()),
		// star：是否为星标文章（将按数值从小到大展示在首页），选填
		star: z.number().or(z.undefined()),
		// author：文章作者，选填
		author: z.string().or(z.undefined()),
	}),
});

export const collections = { posts };
