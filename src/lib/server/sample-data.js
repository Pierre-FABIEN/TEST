import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function sampleData() {
	const users = await prisma.$transaction(async (txn) => {
		await txn.user.deleteMany();
		return await txn.user.createManyAndReturn({
			data: [{ name: 'Alice' }, { name: 'Bob' }]
		});
	});

	console.log(`Created users: ${JSON.stringify(users)}`);
}

sampleData().finally(async () => {
	await prisma.$disconnect();
});