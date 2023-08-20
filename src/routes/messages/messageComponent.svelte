<script>
    import MessageData from "./messageData.svelte"
</script>

<MessageData>
    <article slot="message" let:user let:content class="message">
    
        <div class="message-head">
            <div class="message-pic">

            </div>
        
            <div class="message-user">
            {user}
            </div>
        </div>

        <div class="message-mid">
            <div class="message-content">
                {content}
            </div>
        </div>

    </article>
</MessageData>

<style>
    .message {
        margin-top: 15px;
        margin-bottom: 10px;
        margin-left: 10px;
        width: 400px;
        height: 100px;
        background-color: white;
    }

    .message:hover {
        background-color: #e9e8ea;
        cursor: pointer;
    }

    .message-head {
        display: flex;
        position: absolute;
        width: 400px;
        height: 50px;
    }

    .message-pic {
        position: relative;
        background-color: green;
        margin-top: 10px;
        margin-left: 10px;
        width: 35px;
        height: 35px;
        border-radius: 20px;
    }

    .message-user {
        position: relative;
        padding-top: 17px;
        margin-left: 10px;
        color: #47464a;
    }

    .message-mid {
        margin-top: 50px;
        position: absolute;
        display: block;
        width: 550px;
    }

    .message-content {
        position: relative;
        margin-top: 10px;
        margin-bottom: 5px;
        margin-left: 12px;
        margin-right: 15px;
        width: 400px;
        height: 100px;
        color: #47464a;
        font-size: 14px;
    }

</style>