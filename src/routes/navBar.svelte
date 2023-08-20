
<script>
	import Button from "./button.svelte"
   
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <nav class="nav">

        <button class="btn"><a href="/"><i class="fa fa-home"></i></a></button>
        <button class="btn"><a href="/notifications"><i class="fa fa-bell-o"></i></a></button>
        <button class="btn"><a href="/messages"><i class="fa fa-comments"></i></a></button>
        <button class="btn"><i class="fa fa-search"></i></button>
        <button class="btn"><a href="/profile"><i class="fa fa-user-circle-o"></i></a></button>
        <button class="btn"><a href="/settings"><i class="fa fa-cog"></i></a></button>
    
    </nav>

<style>
    nav {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 0;
        left: 0;
        width: 150px;
        height: 100%;
        background-color: #D7BBF5;
    }

    .btn {
        top: 0;
        margin-left: 75px;
        margin-top: 25px;
        margin-bottom: 5px;
        width: 60px;
        height: 60px;
        background-color: #D4E2D4;
    }
</style>