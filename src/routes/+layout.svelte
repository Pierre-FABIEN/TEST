<script lang="ts">
	import { page } from '$app/stores';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import '../app.css';

	let { children } = $props();
	let isClient = $state(false);
	let loading = $state(true);
	let value = $state(0);

	// Réactivité automatique avec Svelte 5
	$effect(() => {
		isClient = true;
		const timer = setInterval(() => {
			if (value < 100) {
				value += 10;
			} else {
				clearInterval(timer);
				loading = false;
			}
		}, 100);
	});
</script>

{#if loading}
	<div class="w-[100vw] h-[100vh] flex justify-center items-center">
		<Progress {value} max={100} class="w-[50vw]" />
	</div>
{:else if isClient}
	<ModeWatcher />

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
{/if}
