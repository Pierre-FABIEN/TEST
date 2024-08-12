import { prisma } from '$lib/server';

export const load = async () => {
	const users = await prisma.user.findMany();

	return { users };
};