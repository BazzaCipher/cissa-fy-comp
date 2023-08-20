<script>
    import TweetData from "./tweetData.svelte"
</script>

<TweetData>
    <article slot="tweet" let:user let:content let:likes let:comments let:retweets class="tweet">
    
        <div class="tweet-head">
            <div class="tweet-pic">

            </div>
        
            <div class="tweet-user">
            {user}
            </div>
        </div>

        <div class="tweet-mid">
            <div class="tweet-content">
                {content}
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
</TweetData>

<style>
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
        color: #47464a;
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
        color: #47464a;
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
        color: #47464a;
    }
</style>