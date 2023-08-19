
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
        <h1 class="home-title">Home Page</h1>
        <input type="text" class="post-box" placeholder="Type something here">
        <button class="post-button">POST</button>
    </section>

    <section class="search">
        <h1 class="search-title">Search</h1>
        <input type="search" class="search-bar">
        <button class="search-button">Search</button>
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
    }

    .post-button {
        display: inline-block;
        position: relative;
        margin: 0;
    }


    .search {
        position: absolute;
        top: 0;
        left: 50px;
        margin-left: 800px;
        width: 300px;
        height: 100%;
        background-color: pink;
    }

    .search-title {
        position: relative;
        margin: 0;
        margin-top: 10px;
        margin-left: 10px;
    }

    .search-bar {
        position: relative;
        margin: 0;
        margin-top: 10px;
        margin-left: 10px;
        width: 200px;
        height: 30px;
        border: 1px solid black;
        border-radius: 10px;
        box-shadow: 1px 1px black;
    }

</style>
