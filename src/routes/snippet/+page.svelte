<script lang="ts">
    
    interface Agency {
        id: string;
        street: string;
        city: string;
        state: string;
        zip: string;
        country: string;
    }

    interface Director {
        id: string;
        name: string;
        email: string;
        age: number;
        isActive: boolean;
        agencies: Agency[];
    }

    
    let { data } = $props();
    let directors: Director[] = data.directors;
</script>

{#snippet agencyDisplay(agency: Agency)}
    <div class="agency">
        <p><strong>ID :</strong> {agency.id}</p>
        <p><strong>Adresse :</strong> {agency.street}, {agency.city}, {agency.state}, {agency.zip}, {agency.country}</p>
    </div>
{/snippet}

{#snippet directorDisplay(director: Director)}
    <div class="director">
        <h2>{director.name}</h2>
        <p><strong>Email :</strong> {director.email}</p>
        <p><strong>Âge :</strong> {director.age}</p>
        <p><strong>Actif :</strong> {director.isActive ? 'Oui' : 'Non'}</p>
        <h3>Agences :</h3>
        <div class="agencies">
            {#if director.agencies.length > 0}
                {#each director.agencies as agency}
                    {@render agencyDisplay(agency)}
                {/each}
            {:else}
                <p>Aucune agence associée.</p>
            {/if}
        </div>
    </div>
{/snippet}

<main>
    <h1>Liste des directeurs</h1>
    {#each directors as director}
        {@render directorDisplay(director)}
    {/each}
</main>
