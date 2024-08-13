<script lang="ts">
  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  import * as Popover from "$lib/components/ui/popover";
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { createLocationSchema } from '$lib/schema/locationSchema';
  import { toast } from 'svelte-sonner';
  import { goto } from '$app/navigation';

  let { data } = $props();

  const createLocationForm = superForm(data.form, {
    validators: zodClient(createLocationSchema),
    id: 'createLocationForm'
  });

  const {
    form: createLocationData,
    enhance: createLocationEnhance,
    message: createLocationMessage,
  } = createLocationForm;

  $effect(() => {
    if ($createLocationMessage === 'Location created successfully') {
      toast.success($createLocationMessage);
      setTimeout(() => goto('/location'), 0);
    }    
  });

  let selectedUserName = $state('Select a user');

  function selectUser(user) {
    selectedUserName = user.name;
    $createLocationData.userId = user.id;
  }
</script>

<div class="max-w-lg mx-auto mt-8">
  <h1 class="text-2xl font-bold mb-4">Create a New Location</h1>
  
  <form method="POST" action="?/create" use:createLocationEnhance>
    <div class="mb-4">
      <Form.Field name="street" form={createLocationForm}>
        <Form.Control let:attrs>
          <Form.Label>Street</Form.Label>
          <Input {...attrs} type="text" bind:value={$createLocationData.street} required />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>

    <div class="mb-4">
      <Form.Field name="city" form={createLocationForm}>
        <Form.Control let:attrs>
          <Form.Label>City</Form.Label>
          <Input {...attrs} type="text" bind:value={$createLocationData.city} required />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>

    <div class="mb-4">
      <Form.Field name="state" form={createLocationForm}>
        <Form.Control let:attrs>
          <Form.Label>State</Form.Label>
          <Input {...attrs} type="text" bind:value={$createLocationData.state} required />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>

    <div class="mb-4">
      <Form.Field name="zip" form={createLocationForm}>
        <Form.Control let:attrs>
          <Form.Label>ZIP Code</Form.Label>
          <Input {...attrs} type="text" bind:value={$createLocationData.zip} required />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>

    <div class="mb-4">
      <Form.Field name="country" form={createLocationForm}>
        <Form.Control let:attrs>
          <Form.Label>Country</Form.Label>
          <Input {...attrs} type="text" bind:value={$createLocationData.country} required />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>

    <!-- Dropdown Menu for User Selection -->
    <div class="mb-4">
      <Form.Field name="userId" form={createLocationForm}>
        <Form.Control let:attrs>
          <Form.Label>User</Form.Label>
          <Popover.Root>
            <Popover.Trigger class="border rounded px-4 py-2">
              {selectedUserName}
            </Popover.Trigger>
            <Popover.Content>
              <div class="flex flex-col space-y-2">
                {#each data.users as user}
                  <button 
                    class="text-left hover:bg-gray-100 p-2 rounded"
                    on:click={() => selectUser(user)}
                  >
                    {user.name}
                  </button>
                {/each}
              </div>
            </Popover.Content>
          </Popover.Root>
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>
    
    <input hidden name="userId" bind:value={$createLocationData.userId} />

    <div class="mt-6">
      <Button type="submit">Create Location</Button>
    </div>
  </form>
</div>
