<script>
	import { page } from '$app/stores';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';

	let { children } = $props();
</script>

<ModeWatcher />

<div class="flex justify-center mt-5">
	<nav class="flex items-center border rounded space-x-4 lg:space-x-6 rcb w-[500px] p-3">
		<a
			href="/"
			class={`text-sm font-medium ${$page.url.pathname === '/dashboard' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}
		>
			Accueil
		</a>
		<a
			href="/user"
			class={`text-sm font-medium ${$page.url.pathname === '/dashboard/users' ? 'text-primary' : 'text-muted-foreground'} transition-colors hover:text-primary`}
		>
			Utilisateurs
		</a>
	</nav>
</div>

<main>
	{@render children()}
</main>


