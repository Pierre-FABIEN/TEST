<script lang="ts">
    import { superForm } from 'sveltekit-superforms';
    import { zodClient } from 'sveltekit-superforms/adapters';
    import { updateLocationSchema } from '$lib/schema/locationSchema';
    import * as Form from '$lib/components/ui/form';
    import { Input } from '$lib/components/ui/input';
    import { Button } from '$lib/components/ui/button';
    import { toast } from 'svelte-sonner';
      import { goto } from '$app/navigation';
  
    let { data } = $props();
  
    const updateLocationForm = superForm(data.updateLocation, {
      validators: zodClient(updateLocationSchema),
      id: 'updateLocationForm'
    });
  
    const {
      form: updateLocationData,
      enhance: updateLocationEnhance,
      message: updateLocationMessage,
    } = updateLocationForm;
  
    $effect(() => {
      if ($updateLocationMessage === 'Location updated successfully') {
        toast.success($updateLocationMessage);
        setTimeout(() => goto('/location'), 0);
      }
    })
  </script>
  
  <div class="max-w-lg mx-auto mt-8">
    <h1 class="text-2xl font-bold mb-4">Update Location</h1>
  
    <form method="POST" action="?/update" use:updateLocationEnhance>
      <div class="mb-4">
        <Form.Field name="street" form={updateLocationForm}>
          <Form.Control let:attrs>
            <Form.Label>Street</Form.Label>
            <Input {...attrs} type="text" bind:value={$updateLocationData.street} required />
          </Form.Control>
          <Form.FieldErrors />
        </Form.Field>
      </div>
  
      <div class="mb-4">
        <Form.Field name="city" form={updateLocationForm}>
          <Form.Control let:attrs>
            <Form.Label>City</Form.Label>
            <Input {...attrs} type="text" bind:value={$updateLocationData.city} required />
          </Form.Control>
          <Form.FieldErrors />
        </Form.Field>
      </div>
  
      <div class="mb-4">
        <Form.Field name="state" form={updateLocationForm}>
          <Form.Control let:attrs>
            <Form.Label>State</Form.Label>
            <Input {...attrs} type="text" bind:value={$updateLocationData.state} required />
          </Form.Control>
          <Form.FieldErrors />
        </Form.Field>
      </div>
  
      <div class="mb-4">
        <Form.Field name="zip" form={updateLocationForm}>
          <Form.Control let:attrs>
            <Form.Label>ZIP</Form.Label>
            <Input {...attrs} type="text" bind:value={$updateLocationData.zip} required />
          </Form.Control>
          <Form.FieldErrors />
        </Form.Field>
      </div>
  
      <div class="mb-4">
        <Form.Field name="country" form={updateLocationForm}>
          <Form.Control let:attrs>
            <Form.Label>Country</Form.Label>
            <Input {...attrs} type="text" bind:value={$updateLocationData.country} required />
          </Form.Control>
          <Form.FieldErrors />
        </Form.Field>
      </div>
  
      <input hidden name="id" value={data.updateLocation.data.id} />
      <input hidden name="userId" value={data.updateLocation.data.userId} />
  
      <div class="mt-6">
        <Button type="submit">Update Location</Button>
      </div>
    </form>
  </div>
  