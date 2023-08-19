
<script>
	import Button from "../button.svelte"
   
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<body>
    
    <nav class="nav">
        
    <button class="btn"> <a href="/"><i class="fa fa-home"></i></a></button>
    <button class="btn"><a href="/notifications"><i class="fa fa-bell-o"></i></a></button>
    <button class="btn"><a href="/profile"><i class="fa fa-user-circle-o"></i></a></button>
    <button class="btn"><a href="/settings"><i class="fa fa-cog"></i></a></button>
    <button class="btn"><i class="fa fa-search"></i></button>
     
        
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
        width: 200px;
        height: 100%;
        background-color: #FFCEFE;
    }

</style>
