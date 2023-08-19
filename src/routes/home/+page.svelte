<script>
    import Button from "../button.svelte"

    const postData = {
        user: 'itsme',
        date: '12/3/24',
        text: 'do i need text here',
    }

    const showPost = () => {
        console.log('hi')
    }

    let profilePicture;
    let username = '@' + 'username';
    let tweetContent = 'Mauris nibh arcu, ornare eget imperdiet auctor, convallis ut eros. Donec vitae massa ut velit iaculis malesuada. Proin non efficitur lacus. Phasellus vitae turpis urna. Curabitur vitae erat erat. Duis fermentum nulla id interdum viverra'
    let likes = 45;
    let comments = 5;
    let retweets = 100;

</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

<div class="home-page">
    <nav class="nav">
        <div class="nav-link">
            <Button class="primary sm" >
                <a href="/home">Home</a>
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

    <section class="home-section">

        <h1 class="home-title">Home Page</h1>
        
        <div class="new-post">
            <input type="text" class="post-text" placeholder="Type something here">
            <button class="post-button">POST</button>
        </div>

        <article class="tweet">
            
            <div class="tweet-head">
                <div class="tweet-pic">

                </div>
            
                <div class="tweet-user">
                {username}
                </div>
            </div>

            <div class="tweet-mid">
                <div class="tweet-content">
                    {tweetContent}
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

        <article class="tweet">
            
            <div class="tweet-head">
                <div class="tweet-pic">

                </div>
            
                <div class="tweet-user">
                {username}
                </div>
            </div>

            <div class="tweet-mid">
                <div class="tweet-content">
                    {tweetContent}
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
</div>

<style>

    .home-page {
        background-color: green;
    }
    
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

    .home-section {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 200px;
        margin-bottom: 20px;
        width: 600px;
        border-left: 1.5px solid #a7a8a4;
        border-right: 1.5px solid #a7a8a4;
        background-color: #faf5fc;
        font-family: 'Roboto', sans-serif;
    }

    .home-title {
        position: relative;
        margin: 0;
        margin-top: 10px;
        margin-left: 20px;
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

    .new-post {
        display: block;
    }
    
    .post-text {
        margin-top: 20px;
        margin-left: 20px;
        width: 545px;
        height: 100px;
        border: 1.5px solid black;
        border-radius: 10px;
        box-shadow: 0 2px 1px #ebe7e7;
    }

    .post-text::placeholder {
        line-height: 90px;
    }

    .post-button {
        display: inline-block;
        position: relative;
        margin: 0;
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


    .search {
        top: 0;
        margin-left: 850px;
        width: 300px;
        background-color: #faf5fc;
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