<script>
    import NavBar from "../navBar.svelte"
    import HomePage from "./home.svelte"
    import LoggedOutPage from "./loggedOutPage.svelte"
    import ExplorePage from "./explorePage.svelte"

    const loggedOut = true;

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">


<div class="home-page">

    <NavBar />
    <HomePage />
    <ExplorePage/>

    {#if loggedOut}
        <LoggedOutPage />
    {/if}
    
</div>