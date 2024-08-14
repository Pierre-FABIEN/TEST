<div class="flex justify-center mt-10">
	<main class="w-full max-w-4xl rounded-lg border p-8">
		<h1 class="text-4xl font-bold mb-4">Silver-Smok-Test</h1>
		<p class="mb-6">
			<span class="badge badge-blue">version 0.0.1</span>
			<span class="badge badge-green">license MIT</span>
			<span class="badge badge-brightgreen">PRs welcome</span>
		</p>

		<h2 class="text-2xl font-semibold mb-3">Description</h2>
		<p class="text-lg leading-relaxed mb-6">
			<strong>Silver-Smok-Test</strong> est un projet web moderne qui combine les meilleures
			technologies pour développer une application web performante et évolutive. Il repose sur
			<strong>SvelteKit</strong>
			pour le front-end, <strong>Prisma</strong> et <strong>MongoDB</strong> pour la gestion des
			données, ainsi que <strong>Playwright</strong> pour les tests E2E. Ce projet met également l'accent
			sur une configuration complète pour un développement efficace et sécurisé.
		</p>

		<h2 class="text-2xl font-semibold mb-3">Technologies Utilisées</h2>

		<h3 class="text-xl font-medium mt-4 mb-2">🚀 Front-End</h3>
		<ul class="list-none space-y-2">
			<li class="text-lg">
				<a
					href="https://kit.svelte.dev/"
					class="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">SvelteKit</a
				> : Un framework moderne pour construire des applications web dynamiques et réactives avec une
				optimisation du rendu côté serveur (SSR).
			</li>
		</ul>

		<h3 class="text-xl font-medium mt-4 mb-2">🗄️ Back-End & ORM</h3>
		<ul class="list-none space-y-2">
			<li class="text-lg">
				<a
					href="https://www.prisma.io/"
					class="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">Prisma</a
				> : Un ORM moderne qui facilite les interactions avec la base de données, ici utilisée avec MongoDB,
				offrant un typage strict et des opérations CRUD simplifiées.
			</li>
			<li class="text-lg">
				<a
					href="https://www.mongodb.com/"
					class="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">MongoDB</a
				> : Une base de données NoSQL flexible, idéale pour les applications évolutives nécessitant une
				grande flexibilité dans la structure des données.
			</li>
		</ul>

		<h3 class="text-xl font-medium mt-4 mb-2">🔍 Validation & Gestion des Formulaires</h3>
		<ul class="list-none space-y-2">
			<li class="text-lg">
				<a
					href="https://zod.dev/"
					class="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">Zod</a
				> : Une bibliothèque TypeScript-first pour la validation de schémas, assurant la sécurité et
				la cohérence des données manipulées.
			</li>
			<li class="text-lg">
				<a
					href="https://github.com/codediodeio/superforms"
					class="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">Superforms</a
				> : Une solution pour gérer les formulaires dans SvelteKit, offrant des fonctionnalités avancées
				comme la validation côté client et serveur, en synergie avec Zod.
			</li>
		</ul>

		<h3 class="text-xl font-medium mt-4 mb-2">🛠️ Tests</h3>
		<ul class="list-none space-y-2">
			<li class="text-lg">
				<a
					href="https://playwright.dev/"
					class="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">Playwright</a
				> : Un outil puissant pour les tests End-to-End (E2E), simulant les actions des utilisateurs
				à travers différents navigateurs pour garantir la fiabilité de l'application.
			</li>
			<li class="text-lg">
				<a
					href="https://vitest.dev/"
					class="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">Vitest</a
				> : Un framework de tests unitaires rapide et léger, basé sur Vite, pour s'assurer que chaque
				composant fonctionne correctement de manière isolée.
			</li>
		</ul>

		<h3 class="text-xl font-medium mt-4 mb-2">🎨 Styling</h3>
		<ul class="list-none space-y-2">
			<li class="text-lg">
				<a
					href="https://tailwindcss.com/"
					class="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">Tailwind CSS</a
				> : Un framework CSS utilitaire qui permet de construire des interfaces utilisateur rapidement
				avec une grande flexibilité dans le style.
			</li>
		</ul>

		<h3 class="text-xl font-medium mt-4 mb-2">💻 Langage & Typage</h3>
		<ul class="list-none space-y-2">
			<li class="text-lg">
				<a
					href="https://www.typescriptlang.org/"
					class="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">TypeScript</a
				> : Un sur-ensemble de JavaScript qui ajoute le typage statique, améliorant la qualité et la
				maintenabilité du code.
			</li>
		</ul>

		<h3 class="text-xl font-medium mt-4 mb-2">🔧 Linting & Formatage</h3>
		<ul class="list-none space-y-2">
			<li class="text-lg">
				<a
					href="https://eslint.org/"
					class="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">ESLint</a
				> : Un outil d'analyse statique qui identifie et corrige les problèmes dans le code JavaScript
				et TypeScript.
			</li>
			<li class="text-lg">
				<a
					href="https://prettier.io/"
					class="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">Prettier</a
				> : Un formateur de code qui garantit un style de code cohérent et propre à travers l'ensemble
				du projet.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold mb-3">Scripts</h2>
		<p class="text-lg leading-relaxed mb-4">Voici les principaux scripts inclus dans le projet :</p>
		<ul class="list-none space-y-2">
			<li class="text-lg">
				<code class="px-2 py-1 rounded">npm run dev</code> : Lance le serveur de développement.
			</li>
			<li class="text-lg">
				<code class="px-2 py-1 rounded">npm run build</code> : Génére les fichiers de production après
				avoir généré le client Prisma.
			</li>
			<li class="text-lg">
				<code class="px-2 py-1 rounded">npm run preview</code> : Lance une prévisualisation de l'application
				en mode production.
			</li>
			<li class="text-lg">
				<code class="px-2 py-1 rounded">npm run test</code> : Exécute les tests d'intégration et les
				tests unitaires.
			</li>
			<li class="text-lg">
				<code class="px-2 py-1 rounded">npm run lint</code> : Vérifie la qualité du code avec Prettier
				et ESLint.
			</li>
			<li class="text-lg">
				<code class="px-2 py-1 rounded">npm run format</code> : Formate tout le code du projet avec Prettier.
			</li>
			<li class="text-lg">
				<code class="px-2 py-1 rounded">npm run sampleData</code> : Exécute un script pour injecter des
				données d'exemple dans la base de données.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold mb-3">Installation et Lancement</h2>
		<p class="text-lg leading-relaxed">
			Pour installer les dépendances et lancer l'application en mode développement :
		</p>
		<pre class="-4 rounded"><code
				>npm install
npm run dev</code
			></pre>
	</main>
</div>

<style>
	/* Ajoute tes styles ici, ou utilise Tailwind CSS si déjà intégré */
	.badge {
		display: inline-block;
		margin-right: 8px;
		padding: 4px 8px;
		border-radius: 4px;
		font-size: 14px;
		font-weight: bold;
	}
	.badge-blue {
		background-color: #007bff;
		color: white;
	}
	.badge-green {
		background-color: #28a745;
		color: white;
	}
	.badge-brightgreen {
		background-color: #4caf50;
		color: white;
	}
	h2,
	h3 {
		margin-top: 16px;
		margin-bottom: 8px;
	}
	ul {
		list-style-type: none;
		padding-left: 0;
	}
	ul li::before {
		content: '🚀 ';
		margin-right: 8px;
	}
</style>
