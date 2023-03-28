<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bibliothek | Admin</title>
    <link rel="icon" href="resorces/icons/2.png">
    <link rel="stylesheet" href="resorces/css/bootstrap.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="resorces/css/style.css">
</head>
<body>
<?php
require "header.php";
?>
    <div class="container sicon">
        <div class="row p-5">
            <div class="offset-3 col-6 d-grid justify-content-center card p-5">
                <h2 class="text-center f4txt">Admin Log In</h2>
                <p class="f4txt">This page is password protected. If you have created account, please type your username and password below.</p>
                <hr>
                <input type="text" class="form-control" placeholder="Enter Your Username">
                <br>
                <input type="password" class="form-control" placeholder="Enter Your Password">            
                <span class="mt-2"><input type="checkbox"> Remember Me</span>                
                <a href="" class="navbar-brand text-danger mt-1 fs-5">Forgot Password</a>                        
                <a href="" class="btn3 mt-2">Sign In</a>                                    
            </div>
        </div>
    </div>
    <?php
    require "footer.php";
    ?>
</body>
</html>