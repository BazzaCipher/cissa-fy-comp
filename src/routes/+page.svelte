
<script>
	import Button from "./button.svelte"
</script>





<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<body>
    <nav class="nav">
        <div class="nav-link">
            <Button class="primary sm" >
                <a href="/">Home</a>
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
        <h1>FEED</h1>
    </section>

    <section class="search">
        <h1>SEARCH</h1>
    </section>
</body>

<style>
    a {
        text-decoration: none;

    }
    
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        padding-left: 50px;
        width: 100px;
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

    .nav-hover {
        top: 0;
        left: 0;
        width: 100px;
        height: 100%;
        background-color: #D7BBF5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .navlink:hover {
        background-color: light-grey;
    }

    .home-page {
        position: absolute;
        top: 0;
        left: 50px;
        margin-left: 150px;
        width: 600px;
        height: 100%;
        background-color: blue;
    }

    .search {
        position: absolute;
        top: 0;
        left: 50px;
        margin-left: 750px;
        width: 300px;
        height: 100%;
        background-color: pink;
    }

</style>
