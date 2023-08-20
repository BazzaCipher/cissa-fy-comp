<script>
    
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">


<div class="grey-cover">

</div>

<section class="login">
    <h3 class="login-title">LOGIN</h3>
    <input class="username" placeholder="Username or email">
        <input class="password" placeholder="Password">
    <button class="login-button">LOGIN</button>

</section>


<style>

    .grey-cover {
        position: fixed;
        z: 9;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: grey;
        opacity: 0.2;
    }

    .login {
        position: absolute;
        z: 90;
        margin-top: 70px;
        margin-left: 430px;
        width: 400px;
        height: 380px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 1px 1px grey;
        font-family: 'Roboto', sans-serif;
    }

    .login-title {
        margin-top: 40px;
        margin-bottom: 20px;
        margin-left: 153px;
        font-size: 30px;
    }

    .username {
        margin-top: 20px;
        margin-bottom: 10px;
        margin-left: 45px;
        width: 300px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid grey;
    }

    .password {
        margin-top: 20px;
        margin-bottom: 10px;
        margin-left: 45px;
        width: 300px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid grey;
    }

    .login-button {
        margin-top: 20px;
        margin-left: 157px;
        background-color: purple;
        width: 80px;
        height: 35px;
        border: none;
        border-radius: 5px;
        color: white;
    }

</style>