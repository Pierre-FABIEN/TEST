<script lang="ts">
	import * as HoverCard from "$lib/components/ui/hover-card";
	import { Badge } from "$lib/components/ui/badge/index.js";

    let { location }: { location: { street: string, city: string, state: string, zip: string, country: string } } = $props();
    
	const getZipPrefix = (zip: string) => zip.slice(0, 2);
</script>

<HoverCard.Root>
	<HoverCard.Trigger>
		<Badge>{getZipPrefix(location.zip)}</Badge>
	</HoverCard.Trigger>
	<HoverCard.Content>
		<p><strong>Street:</strong> {location.street}</p>
		<p><strong>City:</strong> {location.city}</p>
		<p><strong>State:</strong> {location.state}</p>
		<p><strong>Zip:</strong> {location.zip}</p>
		<p><strong>Country:</strong> {location.country}</p>
	</HoverCard.Content>
</HoverCard.Root>