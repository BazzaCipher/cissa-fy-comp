
<script>
	import Button from "./button.svelte"
   
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<body>
    
    <nav class="nav">
        
    <button class="btn"><a href="/"><i class="fa fa-home"></i></a></button>
    <button class="btn"><a href="/notifications"><i class="fa fa-bell-o"></i></a></button>
    <button class="btn"><a href="/profile"><i class="fa fa-user-circle-o"></i></a></button>
    <button class="btn"><a href="/settings"><i class="fa fa-cog"></i></a></button>
    <button class="btn"><a href="/messages"><i class="fa fa-comments"></i></a></button>
    <button class="btn"><i class="fa fa-search"></i></button>
     
        
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
