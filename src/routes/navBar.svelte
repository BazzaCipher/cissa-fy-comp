<script>
    import Button from "./button.svelte"
</script>

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
</style>