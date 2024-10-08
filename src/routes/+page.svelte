<div class="flex justify-center mt-10">
	<article class="w-full max-w-4xl rounded-lg border p-8 m-2">
		<h1 class="text-4xl font-bold mb-4">Présentation du test</h1>
  
		<section class="mb-8">
		  <h2 class="text-2xl font-semibold  mb-4">1. CRUD pour les Directeurs, Agences et Produits</h2>
		  <p class=" mb-4">
			Ce projet vise à gérer une base de données MongoDB contenant des informations sur des directeurs, des agences, et des produits, en utilisant Prisma comme ORM pour simplifier les opérations CRUD (Create, Read, Update, Delete). Le projet inclut les modèles <strong>Director</strong>, <strong>Agence</strong>, et <strong>Product</strong>, ainsi que leurs relations.
		  </p>
		  
		  <div class="ml-4 mb-4">
			<h3 class="text-xl font-semibold  mb-2">Directeur</h3>
			<p class="">
			  Le modèle <strong>Director</strong> représente les directeurs d'agences. Chaque directeur a un identifiant unique, un nom, un email, un âge, une date de création, et un statut d'activité. Le directeur peut être associé à plusieurs agences.
			</p>
		  </div>
		  
		  <div class="ml-4 mb-4">
			<h3 class="text-xl font-semibold  mb-2">Agence</h3>
			<p class="">
			  Le modèle <strong>Agence</strong> représente les agences associées à un directeur. Chaque agence possède une adresse complète (rue, ville, état, code postal, pays), une date de création, et une relation avec un directeur. Les agences peuvent également être associées à plusieurs produits.
			</p>
		  </div>
		  
		  <div class="ml-4 mb-4">
			<h3 class="text-xl font-semibold  mb-2">Produit</h3>
			<p class="">
			  Le modèle <strong>Product</strong> représente les produits disponibles dans une agence. Chaque produit a un nom, un stock, un prix, une date de création, et une relation avec une agence.
			</p>
		  </div>
		</section>
	  
		<section class="mb-8">
		  <h2 class="text-2xl font-semibold  mb-4">2. Relations entre les modèles</h2>
		  <p class=" mb-4">
			- Un <strong>Directeur</strong> peut avoir plusieurs <strong>Agences</strong> (relation un-à-plusieurs).<br>
			- Une <strong>Agence</strong> peut avoir plusieurs <strong>Produits</strong> (relation un-à-plusieurs).<br>
			- Une <strong>Agence</strong> est liée à un seul <strong>Directeur</strong> (relation plusieurs-à-un).<br>
			- Un <strong>Produit</strong> est lié à une seule <strong>Agence</strong> (relation plusieurs-à-un).
		  </p>
		</section>
	  
		<section class="mb-8">
		  <h2 class="text-2xl font-semibold  mb-4">3. Visualisation des Stocks et Agences avec ApexCharts</h2>
		  <p class="">
			Une des fonctionnalités clés du projet inclura l'utilisation d'<strong>ApexCharts</strong> pour visualiser les données liées aux stocks de produits dans les différentes agences. Cela permettra de générer des graphiques dynamiques montrant, par exemple :
		  </p>
		  <ul class="list-disc list-inside  ml-4">
			<li>La répartition des stocks de produits par agence.</li>
			<li>L'évolution du stock de produits dans le temps.</li>
		  </ul>
		  <p class=" mt-4">
			Ces visualisations aideront à comprendre rapidement la distribution des produits et à prendre des décisions informées.
		  </p>
		</section>
	  
		<section class="mb-8">
		  <h2 class="text-2xl font-semibold  mb-4">4. API pour requêtes d'adresses avec OpenCage Data</h2>
		  <p class="">
			Le projet inclura également une API qui permet de récupérer des informations géographiques basées sur les adresses des agences. Cette API utilisera le service <strong>OpenCage Data</strong> pour obtenir des informations comme les coordonnées géographiques, ou d'autres détails géolocalisés. Cette fonctionnalité peut être utilisée pour améliorer la précision des données d'adresse, ou pour des analyses géographiques avancées des agences.
		  </p>
		</section>
	  
		<footer>
		  <p class="">
			Le projet met en place une gestion efficace des directeurs, agences, et produits avec des relations bien définies et des outils de visualisation et d'intégration de données externes puissants. L'usage de Prisma pour MongoDB simplifie le travail avec la base de données, tandis que l'intégration de l'API OpenCage Data et ApexCharts enrichit l'expérience utilisateur en offrant des fonctionnalités supplémentaires pour l'analyse et la visualisation des données.
		  </p>
		</footer>

		<div class="flex flex-col items-center p-8">
			<div class="bg-white border border-gray-300 p-4 rounded-lg shadow-md mb-8">
			  <h2 class="text-lg font-semibold text-gray-700 mb-4 text-center">Director</h2>
			  <ul class="list-disc list-inside text-black">
				<li>id (String)</li>
				<li>name (String)</li>
				<li>email (String)</li>
				<li>age (Int)</li>
				<li>createdAt (DateTime)</li>
				<li>isActive (Boolean)</li>
			  </ul>
			</div>
		  
			<!-- Relation Line -->
			<div class="w-1 h-16 bg-gray-500 mb-8"></div>
		  
			<div class="flex space-x-8">
			  <div class="bg-white border border-gray-300 p-4 rounded-lg shadow-md">
				<h2 class="text-lg font-semibold text-gray-700 mb-4 text-center">Agence</h2>
				<ul class="list-disc list-inside text-black">
				  <li>id (String)</li>
				  <li>street (String)</li>
				  <li>city (String)</li>
				  <li>state (String)</li>
				  <li>zip (String)</li>
				  <li>country (String)</li>
				  <li>createdAt (DateTime)</li>
				  <li>directorId (String)</li>
				</ul>
			  </div>
		  
			  <!-- Relation Line -->
			  <div class="flex flex-col items-center">
				<div class="w-16 h-1 bg-gray-500"></div>
				<div class="w-1 h-16 bg-gray-500 mt-8"></div>
			  </div>
		  
			  <div class="bg-white border border-gray-300 p-4 rounded-lg shadow-md">
				<h2 class="text-lg font-semibold text-gray-700 mb-4 text-center">Product</h2>
				<ul class="list-disc list-inside text-black">
				  <li>id (String)</li>
				  <li>name (String)</li>
				  <li>stock (Int)</li>
				  <li>price (Float)</li>
				  <li>createdAt (DateTime)</li>
				  <li>agenceId (String)</li>
				</ul>
			  </div>
			</div>
		  </div>
	</article>

	<article class="w-full max-w-4xl rounded-lg border p-8 m-2">
		<h1 class="text-4xl font-bold mb-4">Test</h1>
		<p class="mb-6">
			<span class="inline-block mr-2 px-2 py-1 rounded bg-blue-500 text-white font-bold text-sm"
				>version 0.0.1</span
			>
			<span class="inline-block mr-2 px-2 py-1 rounded bg-green-500 text-white font-bold text-sm"
				>license MIT</span
			>
			<span class="inline-block mr-2 px-2 py-1 rounded bg-green-600 text-white font-bold text-sm"
				>PRs welcome</span
			>
		</p>

		<h2 class="text-2xl font-semibold mb-3">Description</h2>
		<p class="text-lg leading-relaxed mb-6">
			<strong>Test</strong> est un projet web moderne qui combine les meilleures
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
				> : Un outil puissant pour les tests End-to-End (E2E), simulant les actions des Directors à travers
				différents navigateurs pour garantir la fiabilité de l'application.
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
			<li class="text-lg">
				<a
					href="https://shadcn.dev/"
					class="text-blue-600 hover:underline"
					target="_blank"
					rel="noopener noreferrer">Shadcn UI</a
				> : Une collection de composants préconçus construits avec Tailwind CSS et Radix, qui permet
				de rapidement intégrer des composants accessibles et stylisés dans vos projets.
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
				divtenabilité du code.
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
				<code class="px-2 py-1 rounded border">npm run dev</code> : Lance le serveur de développement.
			</li>
			<li class="text-lg">
				<code class="px-2 py-1 rounded border">npm run build</code> : Génére les fichiers de production
				après avoir généré le client Prisma.
			</li>
			<li class="text-lg">
				<code class="px-2 py-1 rounded border">npm run preview</code> : Lance une prévisualisation de
				l'application en mode production.
			</li>
			<li class="text-lg">
				<code class="px-2 py-1 rounded border">npm run test</code> : Exécute les tests d'intégration
				et les tests unitaires.
			</li>
			<li class="text-lg">
				<code class="px-2 py-1 rounded border">npm run lint</code> : Vérifie la qualité du code avec
				Prettier et ESLint.
			</li>
			<li class="text-lg">
				<code class="px-2 py-1 rounded border">npm run format</code> : Formate tout le code du projet
				avec Prettier.
			</li>
			<li class="text-lg">
				<code class="px-2 py-1 rounded border">npm run sampleData</code> : Exécute un script pour injecter
				des données d'exemple dans la base de données.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold mb-3">Installation et Lancement</h2>
		<p class="text-lg leading-relaxed">
			Pour installer les dépendances et lancer l'application en mode développement :
		</p>
		<pre class="border p-4 rounded"><code
				>npm install
npm run dev</code
			></pre>
	</article>
</div>
<div class="flex justify-center mt-10">
	<article class="w-full max-w-4xl rounded-lg border p-8 m-2">
		<h1 class="text-4xl font-bold mb-4">Motivations</h1>
		<section class="mb-8">
			<h2 class="text-2xl font-semibold mb-4">Un an de focus sur SvelteKit</h2>
			<p class="m-4">
				Vous pouvez remarquer sur mon CV mon engouement pour SvelteKit et les technologies autour de cet écosystème. Cela fait plus d'un an que je m'intéresse à Svelte, en commençant par créer un ensemble d'outils pour le front-end.
			</p>

			<ul class="list-disc list-inside">
				<li>SmoothScroll</li>
				<li>Transition de page (pour le développement créatif afin d'assurer une navigation fluide)</li>
				<li>Mode sombre natif</li>
				<li>Gestion du préchargeur avec le store</li>
				<li>Gestion des états de ThreeJs avec le store</li>
				<li>PWA</li>
				<li>Et d'autres éléments qui ont pu enrichir mon expérience</li>
			</ul>

			<p class="m-4">
				C'est à partir de décembre 2023 que j'ai commencé mon apprentissage intensif de SvelteKit. J'ai commencé par créer un boilerplate avec un backend dissocié sur Node.js, réunissant tous les outils que j'avais préalablement développés sur Svelte. J'ai décidé de prendre en charge le fullstack afin de réaliser une expérience complète pour tous types de projets riches et complexes. J'ai mis un accent particulier sur l'authentification et la sécurité, en prenant en charge l'authentification de manière native. J'ai réalisé ce projet à partir d'une API RESTful, puis j'ai migré vers GraphQL. Le problème est que ce concept doit être déployé sur un serveur payant.
			</p>

			<ul class="list-disc list-inside">
				<li>Authentification</li>
				<li>Rôles et permissions</li>
				<li>Gestion avancée des tokens (tokens mis en liste noire)</li>
				<li>Sessions pour déconnecter ses comptes à distance</li>
				<li>Rate Limiter</li>
				<li>Gestion des emails</li>
			</ul>

			<h2 class="text-2xl font-semibold m-4">Inspiré par les Américains</h2>

			<p class="m-4">
				C'est en postulant pour une entreprise américaine que ma nouvelle stack est apparue. Le 20 juin, Careswitch m'a proposé de réaliser leur test technique. Leur stack, utilisée pour ce test, permet un déploiement sur Vercel. Leurs conseils se sont révélés très instructifs.
			</p>

			<a href="https://sveltejobs.com/jobs/careswitch-full-stack-engineer" target="_blank" rel="noopener noreferrer">Annonce</a>

			<ul class="list-disc list-inside">
				<li>Ne pas surcharger le loader afin d'optimiser le chargement des pages</li>
				<li>Créer une page pour chaque formulaire</li>
				<li>Ne pas utiliser la balise style, tout réaliser avec Tailwind et Shadcn</li>
				<li>Et bien d'autres conseils pour une application optimisée</li>
			</ul>

			<h2 class="text-2xl font-semibold m-4">Let's go pour un E-commerce & boilerplate pour SAAS</h2>

			<p class="m-4">	
				Suivant ces recommandations, je me suis lancé dans la création d'un E-commerce. Cela m'a permis d'avoir une solution disponible pour des clients rapidement.
			</p>	

			<p class="m-4">	
				En définitive, j'ai été un bourreau de travail sur SvelteKit cette année, et je souhaite tout faire pour l'utiliser dans un environnement professionnel.
			</p>	

			<h2 class="text-2xl font-semibold m-4">Si je travaille avec vous, mon objectif sera accompli. Vu votre projet et vos besoins, je vais énormément apprendre, et cela me fascine.</h2>
		</section>
	</article>
</div>
