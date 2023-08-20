<script>
    import TweetComponent from "./tweetComponent.svelte"
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

    <section class="home-section">

        <h1 class="home-title">Home Page</h1>
        
        <div class="new-post">
            <input type="text" class="post-text" placeholder="Type something here">
            <button class="post-button">POST</button>
        </div>

        <TweetComponent />
        
    </section>

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
        margin-top: 20px;
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

</style>