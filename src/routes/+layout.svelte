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
				href="/directors"
				class={`text-sm font-medium ${$page.url.pathname === '/directors' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}
			>
				Directors
			</a>
			<a
				href="/agencies"
				class={`text-sm font-medium ${$page.url.pathname === '/agencies' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}
			>
				Agencies
			</a>
			<a
				href="/products"
				class={`text-sm font-medium ${$page.url.pathname === '/products' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}
			>
				Products
			</a>
			<a
			href="/stats"
			class={`text-sm font-medium ${$page.url.pathname === '/stats' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}
			>
					statistical
			</a>
			<a
			href="/snippet"
			class={`text-sm font-medium ${$page.url.pathname === '/snippet' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}
			>
					Snippet
			</a>
		</nav>
	</div>

	<main>
		{@render children()}
	</main>

	<Toaster />
{/if}
