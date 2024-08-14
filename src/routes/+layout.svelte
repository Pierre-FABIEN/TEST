<script>
	import { page } from '$app/stores';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';

	import { Toaster } from '$lib/components/ui/sonner';

	let { children } = $props();

	let isClient = $state(false);

	$effect(() => {
		isClient = true;
	});
</script>

{#if isClient}
	<ModeWatcher />
{/if}

<div class="flex justify-center mt-5">
	<nav class="flex items-center border rounded space-x-4 lg:space-x-6 rcb w-[500px] p-3">
		<a
			href="/"
			class={`text-sm font-medium ${$page.url.pathname === '/' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}
		>
			Accueil
		</a>
		<a
			href="/user"
			class={`text-sm font-medium ${$page.url.pathname === '/user' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}
		>
			Utilisateurs
		</a>
		<a
			href="/location"
			class={`text-sm font-medium ${$page.url.pathname === '/location' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}
		>
			Location
		</a>
	</nav>
</div>

<main>
	{@render children()}
</main>

<Toaster />
