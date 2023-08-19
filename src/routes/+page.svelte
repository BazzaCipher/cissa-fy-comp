<script>
	import Button from "./button.svelte"
   
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


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

<style>
    a {
        text-decoration: none;

    }
    
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        padding-left: 0px;
        width: 50px;
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
        left: 50px;
        margin-left: 50px;
        width: 900px;
        height: 100%;
        background-color: #D4E2D4;
    }

    .search {
        position: absolute;
        top: 0;
        left: 50px;
        margin-left: 1000px;
        width: 300px;
        height: 100%;
        background-color: #FFCEFE;
    }

</style>