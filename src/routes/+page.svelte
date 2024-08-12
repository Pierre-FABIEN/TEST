<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Table from '$lib/components/ui/table';

	import { deleteUserSchema } from '$lib/schema/userSchema.js';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	let { data } = $props();
	
	console.log(data);

	const deleteUserForm = superForm(data.deleteUser, {
		validators: zodClient(deleteUserSchema),
		id: 'deleteUserForm'
	});

	const { enhance: deleteUserEnhance, message: deleteUserMessage } = deleteUserForm;
	
	const formatDate = (dateString: string | Date) => {
		const date = new Date(dateString);
		return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleDateString();
	};
</script>

<div class="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
	<div class="space-y-6 rounded-md border p-4">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">ID</Table.Head>
					<Table.Head>Name</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Age</Table.Head>
					<Table.Head>Created At</Table.Head>
					<Table.Head>Active</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each data.users as user (user.id)}
					<Table.Row>
						<Table.Cell class="font-medium">{user.id}</Table.Cell>
						<Table.Cell>{user.name}</Table.Cell>
						<Table.Cell>{user.email}</Table.Cell>
						<Table.Cell>{user.age}</Table.Cell>
						<Table.Cell>{formatDate(user.createdAt)}</Table.Cell>
						<Table.Cell>{user.isActive ? 'Yes' : 'No'}</Table.Cell>
						<Table.Cell>
							<form method="POST" action="?/delete" use:deleteUserEnhance>
								<input type="hidden" name="id" value={user.id} />
								<Button type="submit" variant="outline">Supprimer</Button>
							</form>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</div>
