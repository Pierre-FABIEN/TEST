# **Silver-Smok-Test**

![Project Badge](https://img.shields.io/badge/version-0.0.1-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

## **Description**

**Silver-Smok-Test** est un projet web moderne qui combine les meilleures technologies pour développer une application web performante et évolutive. Il repose sur **SvelteKit** pour le front-end, **Prisma** et **MongoDB** pour la gestion des données, ainsi que **Playwright** pour les tests E2E. Ce projet met également l'accent sur une configuration complète pour un développement efficace et sécurisé.

## **Technologies Utilisées**

### 🚀 **Front-End**

- **[SvelteKit](https://kit.svelte.dev/)** : Un framework moderne pour construire des applications web dynamiques et réactives avec une optimisation du rendu côté serveur (SSR).

### 🗄️ **Back-End & ORM**

- **[Prisma](https://www.prisma.io/)** : Un ORM moderne qui facilite les interactions avec la base de données, ici utilisée avec MongoDB, offrant un typage strict et des opérations CRUD simplifiées.

- **[MongoDB](https://www.mongodb.com/)** : Une base de données NoSQL flexible, idéale pour les applications évolutives nécessitant une grande flexibilité dans la structure des données.

### 🔍 **Validation & Gestion des Formulaires**

- **[Zod](https://zod.dev/)** : Une bibliothèque TypeScript-first pour la validation de schémas, assurant la sécurité et la cohérence des données manipulées.

- **[Superforms](https://github.com/codediodeio/superforms)** : Une solution pour gérer les formulaires dans SvelteKit, offrant des fonctionnalités avancées comme la validation côté client et serveur, en synergie avec Zod.

### 🛠️ **Tests**

- **[Playwright](https://playwright.dev/)** : Un outil puissant pour les tests End-to-End (E2E), simulant les actions des utilisateurs à travers différents navigateurs pour garantir la fiabilité de l'application.

- **[Vitest](https://vitest.dev/)** : Un framework de tests unitaires rapide et léger, basé sur Vite, pour s'assurer que chaque composant fonctionne correctement de manière isolée.

### 🎨 **Styling**

- **[Tailwind CSS](https://tailwindcss.com/)** : Un framework CSS utilitaire qui permet de construire des interfaces utilisateur rapidement avec une grande flexibilité dans le style.
- **[Shadcn UI](https://shadcn.dev/)** : Une collection de composants UI préconçus et stylisés avec Tailwind CSS et Radix, offrant des solutions prêtes à l'emploi pour des interfaces utilisateur accessibles et élégantes.


### 💻 **Langage & Typage**

- **[TypeScript](https://www.typescriptlang.org/)** : Un sur-ensemble de JavaScript qui ajoute le typage statique, améliorant la qualité et la maintenabilité du code.

### 🔧 **Linting & Formatage**

- **[ESLint](https://eslint.org/)** : Un outil d'analyse statique qui identifie et corrige les problèmes dans le code JavaScript et TypeScript.
- **[Prettier](https://prettier.io/)** : Un formateur de code qui garantit un style de code cohérent et propre à travers l'ensemble du projet.

## **Scripts**

Voici les principaux scripts inclus dans le projet :

- **`npm run dev`** : Lance le serveur de développement.
- **`npm run build`** : Génére les fichiers de production après avoir généré le client Prisma.
- **`npm run preview`** : Lance une prévisualisation de l'application en mode production.
- **`npm run test`** : Exécute les tests d'intégration et les tests unitaires.
- **`npm run lint`** : Vérifie la qualité du code avec Prettier et ESLint.
- **`npm run format`** : Formate tout le code du projet avec Prettier.
- **`npm run sampleData`** : Exécute un script pour injecter des données d'exemple dans la base de données.

## **Installation et Lancement**

Pour installer les dépendances et lancer l'application en mode développement :

```bash
npm install
npm run dev
```
