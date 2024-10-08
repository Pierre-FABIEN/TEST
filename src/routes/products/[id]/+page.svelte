<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover';
	import { toast } from 'svelte-sonner';

	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { updateProductSchema } from '$lib/schema/productsSchema';

	import { goto } from '$app/navigation';

	let { data } = $props();

	const updateProductForm = superForm(data.updateProduct, {
		validators: zodClient(updateProductSchema),
		id: 'updateProductForm'
	});

	const {
		form: updateProductData,
		enhance: updateProductEnhance,
		message: updateProductMessage
	} = updateProductForm;

	let selectedAgenceName = $state('Select an agency');

	$effect(() => {
		if ($updateProductMessage === 'Product updated successfully') {
			toast.success($updateProductMessage);
			setTimeout(() => goto('/products'), 0);
		}

		let agenceId = $updateProductData.agenceId;

		let selectedAgence = data.agencies.find((agence) => agence.id === agenceId);

		selectedAgenceName = selectedAgence ? `${selectedAgence.street}, ${selectedAgence.city}` : 'Agency not found';
        
	});

	const selectAgence = (agence: any) => {
		selectedAgenceName = `${agence.street}, ${agence.city}`;
		$updateProductData.agenceId = agence.id;
	};
</script>

<div class="max-w-lg mx-auto mt-8">
	<h1 class="text-2xl font-bold mb-4">Update Product</h1>

	<form method="POST" action="?/update" use:updateProductEnhance>
		<div class="mb-4">
			<Form.Field name="name" form={updateProductForm}>
				<Form.Control let:attrs>
					<Form.Label>Name</Form.Label>
					<Input {...attrs} type="text" bind:value={$updateProductData.name} required />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<div class="mb-4">
			<Form.Field name="stock" form={updateProductForm}>
				<Form.Control let:attrs>
					<Form.Label>Stock</Form.Label>
					<Input {...attrs} type="number" bind:value={$updateProductData.stock} required />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<div class="mb-4">
			<Form.Field name="price" form={updateProductForm}>
				<Form.Control let:attrs>
					<Form.Label>Price</Form.Label>
					<Input {...attrs} type="number" step="0.01" bind:value={$updateProductData.price} required />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<!-- Dropdown Menu for Agence Selection -->
		<div class="mb-4">
			<Form.Field name="agenceId" form={updateProductForm}>
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
                                        class="p-4 rounded shadow-md border cursor-pointer"
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
						</Popover.Content>
					</Popover.Root>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<!-- Hidden inputs to store the selected agence ID and product ID -->
		<input hidden name="agenceId" bind:value={$updateProductData.agenceId} />
		<input hidden name="id" bind:value={$updateProductData.id} />

		<div class="mt-6">
			<Button type="submit">Update Product</Button>
		</div>
	</form>
</div>
