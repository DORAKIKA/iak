import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.string().or(z.date()).transform((date: string | Date) => typeof date === 'string' ? new Date(date) : date),
		description: z.string().or(z.undefined()),
		tags: z.array(z.string()).or(z.undefined()),
		category: z.string().or(z.undefined()),
		cover: z.any(),
		star: z.number().or(z.undefined()),
	}),
});

export const collections = { posts };
