<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover';
	import { toast } from 'svelte-sonner';

	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { createLocationSchema } from '$lib/schema/locationSchema';
	import { goto } from '$app/navigation';

	let { data } = $props();

	const createLocationForm = superForm(data.createLocation, {
		validators: zodClient(createLocationSchema),
		id: 'createLocationForm'
	});

	const {
		form: createLocationData,
		enhance: createLocationEnhance,
		message: createLocationMessage
	} = createLocationForm;

	let locationSuggestions: string[] = $state([]);
	let timeoutId: ReturnType<typeof setTimeout>;

	const fetchlocationSuggestions = async (query: string) => {
		if (query.length < 3) {
			locationSuggestions = [];
			return;
		}

		try {
			const response = await fetch(`/api/open-cage-data?q=${encodeURIComponent(query)}`);
			const data = await response.json();
			locationSuggestions = data;
		} catch (error) {
			console.error('Error fetching address suggestions:', error);
		}
	};

	const selectSuggestion = (suggestion: any) => {
		const { house_number, road, city, town, village, state, postcode, country } =
			suggestion.components;
		$createLocationData.street = `${house_number || ''} ${road || ''}`.trim();
		$createLocationData.city = city || town || village || '';
		$createLocationData.state = state || '';
		$createLocationData.zip = postcode || '';
		$createLocationData.country = country || '';
		locationSuggestions = [];
	};

	$effect(() => {
		if ($createLocationMessage === 'Location created successfully') {
			toast.success($createLocationMessage);
			setTimeout(() => goto('/location'), 0);
		}
	});

	let selectedDirectorName = $state('Select a directors');

	const selectDirector = (directors: any) => {
		selectedDirectorName = directors.name;
		$createLocationData.directorId = directors.id;
	};

	const handleInput = (event: Event) => {
		const input = event.target as HTMLInputElement;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fetchlocationSuggestions(input.value);
		}, 1000);
	};
</script>

<div class="max-w-lg mx-auto mt-8">
	<h1 class="text-2xl font-bold mb-4">Create a New Location</h1>

	{#if locationSuggestions}
		<h2>Suggestions:</h2>
		<ul class="rounded border p-2">
			{#each locationSuggestions.results as suggestion}
				<li>
					<button
						class="cursor-pointer"
						onclick={() => selectSuggestion(suggestion)}
						onkeydown={(event) => event.code === 'Enter' && selectSuggestion(suggestion)}
					>
						{suggestion.formatted}
					</button>
				</li>
			{/each}
		</ul>
	{/if}

	<form method="POST" action="?/create" use:createLocationEnhance>
		<div class="mb-4">
			<Form.Field name="street" form={createLocationForm}>
				<Form.Control let:attrs>
					<Form.Label>Street</Form.Label>
					<Input
						oninput={handleInput}
						{...attrs}
						type="text"
						bind:value={$createLocationData.street}
						required
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<div class="mb-4">
			<Form.Field name="city" form={createLocationForm}>
				<Form.Control let:attrs>
					<Form.Label>City</Form.Label>
					<Input
						oninput={handleInput}
						{...attrs}
						type="text"
						bind:value={$createLocationData.city}
						required
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<div class="mb-4">
			<Form.Field name="state" form={createLocationForm}>
				<Form.Control let:attrs>
					<Form.Label>State</Form.Label>
					<Input
						oninput={handleInput}
						{...attrs}
						type="text"
						bind:value={$createLocationData.state}
						required
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<div class="mb-4">
			<Form.Field name="zip" form={createLocationForm}>
				<Form.Control let:attrs>
					<Form.Label>ZIP Code</Form.Label>
					<Input
						oninput={handleInput}
						{...attrs}
						type="text"
						bind:value={$createLocationData.zip}
						required
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<div class="mb-4">
			<Form.Field name="country" form={createLocationForm}>
				<Form.Control let:attrs>
					<Form.Label>Country</Form.Label>
					<Input
						oninput={handleInput}
						{...attrs}
						type="text"
						bind:value={$createLocationData.country}
						required
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<!-- Dropdown Menu for Director Selection -->
		<div class="mb-4">
			<Form.Field name="directorId" form={createLocationForm}>
				<Form.Control let:attrs>
					<Form.Label>Director</Form.Label>
					<Popover.Root>
						<Popover.Trigger class="border rounded px-4 py-2">
							{selectedDirectorName}
						</Popover.Trigger>
						<Popover.Content>
							<div class="flex flex-col space-y-2">
								{#each data.directors as directors}
									<button
										class="text-left hover:bg-gray-100 p-2 rounded"
										onclick={() => selectDirector(directors)}
									>
										{directors.name}
									</button>
								{/each}
							</div>
						</Popover.Content>
					</Popover.Root>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<input hidden name="directorId" bind:value={$createLocationData.directorId} />

		<div class="mt-6">
			<Button type="submit">Create Location</Button>
		</div>
	</form>
</div>
