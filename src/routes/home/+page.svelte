<script>
    import NavBar from "../navBar.svelte"
    import HomePage from "./home.svelte"
    import ExplorePage from "./explorePage.svelte"

    import TweetData from "./tweetData.svelte"

    const trendingData = {
        topic: '#' + 'Elon Musk'
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">


<div class="home-page">

    <NavBar />
    <HomePage />
    <ExplorePage/>
    
</div>