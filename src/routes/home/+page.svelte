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

<style>
    .home-section {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 200px;
        margin-bottom: 20px;
        width: 600px;
        background-color: #fdfbfe;
        font-family: 'Roboto', sans-serif;
    }

    .home-title {
        position: relative;
        margin: 0;
        margin-top: 10px;
        margin-left: 20px;
    }

    .new-post {
        display: block;
        height: 130px;
    }
    
    .post-text {
        position: absolute;
        margin-top: 20px;
        margin-left: 20px;
        width: 545px;
        height: 100px;
        border: 1.5px solid #232223;
        border-radius: 7px;
        box-shadow: 0 2px 1px #ebe7e7;
    }

    .post-text::placeholder {
        line-height: 5px;
        font-size: 14px;
    }

    .post-button {
        display: inline-block;
        position: relative;
        margin-left: 500px;
        margin-top: 90px;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        box-shadow: 0 2px 1px #ebe7e7;
        background-color: #9946e0;
        color: white;
    }

    .post-button:hover {
        cursor: pointer;
        background-color: #8f34dd;
        color: white;
    }


    .tweet {
        margin-top: 15px;
        margin-bottom: 10px;
        margin-left: 20px;
        width: 550px;
        height: 210px;
        border: 1.5px solid #a7a8a4;
        border-radius: 5px;
        box-shadow: 0 2px 1px #ebe7e7;
        background-color: white;
    }

    .tweet-head {
        display: flex;
        position: absolute;
        width: 500px;
        height: 50px;
    }

    .tweet-pic {
        position: relative;
        background-color: green;
        margin-top: 10px;
        margin-left: 10px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
    }

    .tweet-user {
        position: relative;
        padding-top: 20px;
        margin-left: 10px;
        color: #403938;
    }

    .tweet-mid {
        margin-top: 50px;
        position: absolute;
        display: block;
        width: 550px;
        border-bottom: 1px solid #a7a8a4;
    }

    .tweet-content {
        position: relative;
        margin-top: 10px;
        margin-bottom: 5px;
        margin-left: 12px;
        margin-right: 15px;
        width: 500px;
        height: 100px;
        color: #403938;
        font-size: 15px;
    }

    .tweet-end {
        position: absolute;
        display: flex;
        margin-top: 170px;
        padding-left: 10px;
    }

    .tweet-icon {
        position: relative;
        background-color: yellow;
        width: 30px;
        height: 30px;
        margin-top: 2.5px;
    }

    .tweet-icon:hover {
        cursor: pointer;
    }

    .tweet-num {
        position: relative;
        width: 30px;
        height: 25px;
        margin-right: 10px;
        margin-top: 5px;
        padding-top: 3px;
        text-align: center;
        font-size: 14px;
        color: #403938;
    }


    .explore {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 850px;
        width: 350px;
        font-family: 'Roboto', sans serif;
    }

    .search {
        position: absolute;
        display: flex;
        width: 350px;
        height: 100px;
    }

    .search-title {
        position: relative;
        margin: 0;
        margin-top: 10px;
        margin-left: 10px;
        font-size: 24px;
    }

    .search-bar {
        position: relative;
        margin-top: 15px;
        margin-left: 15px;
        width: 260px;
        height: 40px;
        border: 1px solid #232223;
        border-radius: 5px;
        box-shadow: 0 2px 1px #ebe7e7;
    }

    .search-button {
        margin-top: 15px;
        margin-left: 5px;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 5px;
        box-shadow: 0 2px 1px #ebe7e7;
        background-color: #9946e0;
        
    }

    .search-button:hover {
        cursor: pointer;
        background-color: #8f34dd;
    }

    .trending-title {
        position: relative;
        margin-top: 10px;
        margin-left: 10px;
        font-size: 24px;
    }
    
    .trending {
        position: absolute;
        margin-top: 100px;
        width: 350px;
        height: 500px;
    }

    .trending-box {
        position: absolute;
        margin-top: 5px;
        margin-bottom: 20px;
        margin-left: 15px;
        width: 315px;
        height: 300px;
        border-radius: 15px;
        background-color: grey;
        opacity: 0.25;
    }

    .trending-topic {
        position: relative;
        margin-top: 17px;
        padding-top: 10px;
        padding-left: 10px;
        height: 30px;
        color: white;
        opacity: 1;
    }

    .trending-topic:hover {
        background-color: #60595d;
        opacity: 1;
        cursor: pointer;
    }


</style>