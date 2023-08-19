<script>
    import Button from "./button.svelte"


    let likes = 45;
    let retweets = 100;
    let comments = 5;

</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

<nav class="nav">
    <div class="nav-link">
        <Button class="primary sm" >
            <a href="./home/home-page.svelte">Home</a>
        </Button>
    </div>
    <div class="nav-link">
        <Button class="primary sm" >
            Search
        </Button>
    </div>
    <div class="nav-link">
        <Button class="primary sm" >
            <a href="/notifications">Notifications</a>
        </Button>
    </div>
    <div class="nav-link">
        <Button class="primary sm" >
            <a href="/messages">Messages</a>
        </Button>
    </div>
    <div class="nav-link"><Button class="primary sm" >
        <a href="/profile">Profile</a>
    </Button>
    </div>
    <div class="nav-link">
        <Button class="primary sm" >
            <a href="/settings">Settings</a>
        </Button>
    </div>
</nav>

    <section class="home-page">

        <h1 class="home-title">Home Page</h1>
        
        <input type="text" class="post-box" placeholder="Type something here">
        <button class="post-button">POST</button>

        <article class="tweet">
            
            <div class="tweet-head">
                <div class="profile-pic">

                </div>
            
                <div class="tweet-user">
                username
                </div>
            </div>

            <div class="tweet-mid">
                <div class="tweet-box">
                    hello
                </div>
            </div>

            <div class="tweet-end">
                
                <div class="tweet-icon">
                
                </div>
                <div class="tweet-num">
                    {likes}
                </div>
                
                <div class="tweet-icon">
                
                </div>
                <div class="tweet-num">
                    {comments}
                </div>

                <div class="tweet-icon">
                
                </div>
                <div class="tweet-num">
                    {retweets}
                </div>
            </div>

        </article>
        
    
    </section>

<section class="search">
        <h1 class="search-title">Search</h1>
        <input type="search" class="search-bar">
        <button class="search-button">Search</button>
</section>

<style>
    
    a {
        text-decoration: none;

    }
    
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding-left: 0px;
        width: 150px;
        height: 100%;
        background-color: #D7BBF5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nav-link {
        position: relative;
    }

    .home-page {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 200px;
        width: 900px;
        height: 100%;
        border-left: 5px solid black;
        border-right: 2px solid black;
        font-family: 'Roboto', sans-serif;
    }

    .search {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 2000px;
        width: 300px;
        height: 100%;
        background-color: #FFCEFE;
    }
    .home-title {
        position: relative;
        margin: 0;
        margin-top: 10px;
        margin-left: 10px;
    }

    .post-box {
        display: inline-block;
        position: relative;
        margin-top: 20px;
        margin-left: 20px;
        width: 500px;
        height: 100px;
        border-radius: 15px;
        line-height: 1px;
    }

    .post-box::placeholder {
        line-height: 90px;
    }

    .post-button {
        display: inline-block;
        position: relative;
        margin: 0;
    }



    .tweet {
        position: absolute;
        margin-top: 15px;
        margin-bottom: 10px;
        margin-left: 25px;
        width: 500px;
        height: 225px;
        border: 1px solid black;
        border-radius: 5px;
    }

    .tweet-head {
        display: flex;
        position: absolute;
        width: 500px;
        height: 50px;
    }

    .profile-pic {
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

    }

    .tweet-mid {
        margin-top: 50px;
        position: absolute;
        display: block;
        width: 500px;
        border-bottom: 1px solid black;
    }

    .tweet-box {
        position: relative;
        margin-top: 10px;
        margin-bottom: 5px;
        margin-left: 10px;
        margin-right: 15px;
        width: 480px;
        height: 100px;
    }

    .tweet-end {
        position: absolute;
        display: flex;
        margin-top: 170px;
        padding-left: 5px;
    }

    .tweet-icon {
        position: relative;
        background-color: yellow;
        width: 30px;
        height: 30px;
        margin: 10px 5px;
    }

    .tweet-num {
        position: relative;
        width: 30px;
        height: 30px;
        margin-right: 10px;
        margin-top: 5px;
        padding-top: 10px;
        text-align: center;
    }

    .tweet-comments {
        background-color: grey;
    }

    .tweet-retweets {
        background-color: grey;
    }


    .search {
        position: absolute;
        top: 0;
        margin-left: 850px;
        width: 300px;
        height: 100%;
        background-color: light-grey;
    }


    .search-title {
        position: relative;
        margin: 0;
        margin-top: 10px;
        margin-left: 10px;
        font-family: 'Roboto', sans-serif;
    }

    .search-bar {
        position: relative;
        margin: 0;
        margin-top: 10px;
        margin-left: 10px;
        width: 200px;
        height: 30px;
        border: 2px solid #6528F7;
        border-radius: 10px;
        box-shadow: 0 2px 1px rgba(217, 36, 253, 0.5);
    }

</style>