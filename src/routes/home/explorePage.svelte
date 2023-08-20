<script>
    const trendingData = {
        topic: '#' + 'Elon Musk'
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

    <div class="explore">

        <h1 class="search-title">Search</h1>
        <section class="search">

            <input type="search" class="search-bar" placeholder="What are you looking for?">
            <button class="search-button"></button>
        </section>


        <div class="trending">
            <h1 class="trending-title">Trending</h1>

            <section class="trending-box">
                <article class="trending-topic">
                    {trendingData.topic}
                </article>
                <article class="trending-topic">
                    {trendingData.topic}
                </article>
                <article class="trending-topic">
                    {trendingData.topic}
                </article>
                <article class="trending-topic">
                    {trendingData.topic}
                </article>
                <article class="trending-topic">
                    {trendingData.topic}
                </article>
            </section>

        </div>
    </div>

<style>
    .explore {
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 10px;
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
        margin-left: 15px;
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
        margin-left: 15px;
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