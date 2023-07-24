import { site } from 'src/config';
import { default_assets } from './../config';
import { defineCollection, z, reference } from 'astro:content';

// 定义文章集合
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
		cover: z.string().default(default_assets.cover),
		// star：是否为星标文章（将按数值从小到大展示在首页），选填
		star: z.number().or(z.undefined()),
		// author：文章作者，选填
		author: z.string().default(site.author),
	}),
});

// 定义记忆碎片集合
const memories = defineCollection({
	schema: z.object({
		// 标题：爱写啥写啥
		title: z.string().default(''),
		// 记忆碎片日期,必填好吧！
		date: z.date().or(z.string()).transform((date: string | Date) => typeof date === 'string' ? new Date(date) : date),
		// 一些标签，方便分类
		tags: z.array(z.string()).or(z.undefined()),
		emoji: z.string().default('🤖'),
		card: z.boolean().default(false),
	})
})

const cards = defineCollection({
	schema: z.object({
		title: z.string().default(''),
		related: z.array(reference('cards')).or(reference('cards')).optional(),
		color: z.enum(['red','orange','yellow','green','blue','cyan','purple','pink','gray','black','white']).optional()
	})
})

export const collections = { posts, memories, cards };
