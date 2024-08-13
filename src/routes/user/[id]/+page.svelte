<script lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { updateUserSchema } from '$lib/schema/userSchema';
  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
  import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';

  let { data } = $props();

  const updateUserForm = superForm(data.updateUser, {
    validators: zodClient(updateUserSchema),
    id: 'updateUserForm'
  });

  const {
    form: updateUserData,
    enhance: updateUserEnhance,
    message: updateUserMessage,
  } = updateUserForm;

  $effect(() => {
    if ($updateUserMessage === 'User updated successfully') {
      toast.success($updateUserMessage);
      setTimeout(() => goto('/user'), 0);
    }
  })

</script>

<div class="max-w-lg mx-auto mt-8">
  <h1 class="text-2xl font-bold mb-4">Update User</h1>


  <form method="POST" action="?/update" use:updateUserEnhance>
    <div class="mb-4">
      <Form.Field name="name"  form={updateUserForm}>
        <Form.Control let:attrs>
          <Form.Label>Name</Form.Label>
          <Input {...attrs} type="text" bind:value={$updateUserData.name} required />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>

    <div class="mb-4">
      <Form.Field name="email" form={updateUserForm}>
        <Form.Control let:attrs>
          <Form.Label>Email</Form.Label>
          <Input {...attrs} type="email" bind:value={$updateUserData.email} required />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>

    <div class="mb-4">
      <Form.Field name="age" form={updateUserForm}>
        <Form.Control let:attrs>
          <Form.Label>Age</Form.Label>
          <Input {...attrs} type="number" bind:value={$updateUserData.age} required />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>

    <div class="mb-4">
      <Form.Field name="isActive" form={updateUserForm}>
        <Form.Control let:attrs>
          <Form.Label>Active</Form.Label>
          <Checkbox {...attrs} bind:checked={$updateUserData.isActive} />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>

    <input hidden name="id" value={data.updateUser.data.id} />
    <input hidden name="createdAt" value={data.updateUser.data.createdAt} />
    <input hidden name="isActive" value={$updateUserData.isActive} />

    <div class="mt-6">
      <Button type="submit">Update User</Button>
    </div>
  </form>
</div>
