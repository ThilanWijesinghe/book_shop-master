<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bibliothek | Sign Up</title>
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
                <h2 class="text-center f4txt">Create an account</h2>
                <p class="f4txt">This page is password protected. If you have created account, please type your username and password below.</p>
                <hr>
                <input type="text" class="form-control" id="fname" placeholder="Enter Your First Name">
                <br>
                <input type="text" class="form-control" id="lname" placeholder="Enter Your Last Name">
                <br>
                <input type="text" class="form-control" id="email" placeholder="Enter Your Email">
                <br>
                <input type="password" class="form-control" id="password" placeholder="Enter Your Password">
                <br>
                <input type="text" class="form-control" id="mobile" placeholder="Enter Your Mobile">
                <br>
                <select id="gender" class="form-control">

                    <?php

                    require "connection.php";

                    $resultset = Database::search("SELECT * FROM `gender`");
                    $n = $resultset->num_rows;

                    for ($x = 0; $x < $n; $x++) {
                        $f = $resultset->fetch_assoc();

                    ?>

                        <option value="<?php echo $f["id"]; ?>"><?php echo $f["gender"]; ?></option>

                    <?php

                    }

                    ?>
                </select>


                <br>
                <a href="" class="btn5" onclick="signUp();">Create An Account</a>
                <br>
            </div>
        </div>
    </div>
    <?php
    require "footer.php";
    ?>
</body>

    <script src="script.js"></script>


</html>