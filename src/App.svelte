<script>
    import { onMount } from 'svelte'
    import strtotime from 'locutus/php/datetime/strtotime'

    let resultDate = null
    const now = Math.floor(Date.now() / 1000)

    function updateResultDate(string) {
        resultDate = strtotime(string, now)
        resultDate = resultDate ? new Date(resultDate * 1000) : null
    }

    onMount(() => {
        updateResultDate('')
    })
</script>

<main>
    <div class="container"></div>
    <div class="container p-6">
        <h1 class="title is-3">strtotime</h1>
        <p class="subtitle is-6">
            A sandbox for the <a href="https://www.php.net/manual/en/function.strtotime.php"
                                 target="_blank">strtotime()</a>
            function in PHP, using <a href="https://github.com/locutusjs/locutus/" target="_blank"><i
                class="fab fa-github"></i> Locutus</a>.
        </p>
        <div class="form">
            <div class="field">
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Date string"
                           on:keyup={ev => updateResultDate(ev.target.value)}>
                    <span class="icon is-small is-left">
                        <i class="fas fa-font"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Now timestamp" value="{ now }">
                    <span class="icon is-small is-left">
                        <i class="fas fa-clock"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="container is-fluid p-6">
            {#if resultDate}
                <div class="has-text-centered">
                    <p>{ resultDate }</p>
                </div>
            {/if}
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    h1 {
        font-family: "Arial", sans-serif;
        letter-spacing: 0.05rem;
    }
</style>
