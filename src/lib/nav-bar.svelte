
    <nav class="nav">
        <div class="nav-link">home</div>
        <div class="nav-link">search</div>
        <div class="nav-link">notifications</div>
        <div class="nav-link">messages</div>
        <div class="nav-link">profile</div>
        <div class="nav-link">house</div>
    </nav>

    <section class="home-page">
        <h1>FEED</h1>
    </section>

    <section class="search">
    <h1>SEARCH</h1>
    </section>

<style>
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
        background-color: pink;
        margin: 15px 0;
        padding: 20px 10px;
    }

    .nav-hover {
        top: 0;
        left: 0;
        right: 0;
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

    .home-page {
        position: absolute;
        top: 0;
        left: 50px;
        margin-left: 150px;
        width: 600px;
        height: 100%;
        background-color: blue;
        border-radius: 15px;
    }

    .search {
        position: absolute;
        top: 0;
        left: 50px;
        margin-left: 800px;
        width: 400px;
        height: 100%;
        background-color: pink;
        border-radius: 15px;
    }

</style>