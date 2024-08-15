<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { createProductSchema } from '$lib/schema/productsSchema';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';

	let { data } = $props();	

	const createProductForm = superForm(data.form, {
		validators: zodClient(createProductSchema),
		id: 'createProductForm'
	});

	const {
		form: createProductData,
		enhance: createProductEnhance,
		message: createProductMessage
	} = createProductForm;

	$effect(() => {
		if ($createProductMessage === 'Product created successfully') {
			toast.success($createProductMessage);
			setTimeout(() => goto('/products'), 0);
		}
	});

	let selectedAgenceName = $state('Select an agency');

	const selectAgence = (agence: any) => {
		selectedAgenceName = `${agence.street}, ${agence.city}`;
		$createProductData.agenceId = agence.id;
	};
</script>

<div class="max-w-lg mx-auto mt-8">
	<h1 class="text-2xl font-bold mb-4">Create a New Product</h1>

	<form method="POST" action="?/create" use:createProductEnhance>
		<div class="mb-4">
			<Form.Field name="name" form={createProductForm}>
				<Form.Control let:attrs>
					<Form.Label>Name</Form.Label>
					<Input {...attrs} type="text" bind:value={$createProductData.name} required />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<div class="mb-4">
			<Form.Field name="stock" form={createProductForm}>
				<Form.Control let:attrs>
					<Form.Label>Stock</Form.Label>
					<Input {...attrs} type="number" bind:value={$createProductData.stock} required />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<div class="mb-4">
			<Form.Field name="price" form={createProductForm}>
				<Form.Control let:attrs>
					<Form.Label>Price</Form.Label>
					<Input {...attrs} type="number" step="0.01" bind:value={$createProductData.price} required />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<!-- Dropdown Menu for Agence Selection -->
		<div class="mb-4">
			<Form.Field name="agenceId" form={createProductForm}>
				<Form.Control let:attrs>
					<Form.Label>Agence</Form.Label>
					<Popover.Root>
						<Popover.Trigger class="border rounded px-4 py-2">
							{selectedAgenceName}
						</Popover.Trigger>
						<Popover.Content>
                            <div class="flex flex-col space-y-4">
                                {#each data.agencies as agence}
                                    <button
                                        class="p-4 bg-white rounded shadow-md border cursor-pointer"
                                        onclick={() => selectAgence(agence)}
                                    >
                                        <h2 class="text-sm font-semibold text-left">{agence.street}, {agence.city}</h2>
                                        <hr class="my-2" />
                                        <div class="text-sm text-left">
                                            <p><strong>State:</strong> {agence.state}</p>
                                            <p><strong>ZIP Code:</strong> {agence.zip}</p>
                                            <p><strong>Country:</strong> {agence.country}</p>                                  
                                        </div>
                                    </button>
                                {/each}
                            </div>
						</Popover.Content>
					</Popover.Root>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<input hidden name="agenceId" bind:value={$createProductData.agenceId} />

		<div class="mt-6">
			<Button type="submit">Create Product</Button>
		</div>
	</form>
</div>
