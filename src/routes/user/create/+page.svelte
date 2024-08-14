<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';

	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { createUserSchema } from '$lib/schema/userSchema';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';

	let { data } = $props();

	const createUserForm = superForm(data.form, {
		validators: zodClient(createUserSchema),
		id: 'createUserForm'
	});

	const {
		form: createUserData,
		enhance: createUserEnhance,
		message: createUserMessage
	} = createUserForm;

	$effect(() => {
		if ($createUserMessage === 'User created successfully') {
			toast.success($createUserMessage);
			setTimeout(() => goto('/user'), 0);
		}
	});
</script>

<div class="max-w-lg mx-auto mt-8">
	<h1 class="text-2xl font-bold mb-4">Create a New User</h1>

	<form method="POST" action="?/create" use:createUserEnhance>
		<div class="mb-4">
			<Form.Field name="name" form={createUserForm}>
				<Form.Control let:attrs>
					<Form.Label>Name</Form.Label>
					<Input {...attrs} type="text" bind:value={$createUserData.name} required />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<div class="mb-4">
			<Form.Field name="email" form={createUserForm}>
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} type="email" bind:value={$createUserData.email} required />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<div class="mb-4">
			<Form.Field name="age" form={createUserForm}>
				<Form.Control let:attrs>
					<Form.Label>Age</Form.Label>
					<Input {...attrs} type="number" bind:value={$createUserData.age} required />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<div class="mb-4">
			<Form.Field name="isActive" form={createUserForm}>
				<Form.Control let:attrs>
					<Form.Label>Active</Form.Label>
					<Checkbox {...attrs} bind:checked={$createUserData.isActive} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<div class="mt-6">
			<Button type="submit">Create User</Button>
		</div>
	</form>
</div>
