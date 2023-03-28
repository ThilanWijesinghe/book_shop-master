<!DOCTYPE html>

<html>

<head>

    <title>Log In|Furniture Island</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="resources/logo.svg" />

    <link rel="stylesheet" href="bootstrap.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css" />

</head>

<body>

    <?php
    require "header.php";
    ?>
    <img class="position-absolute" src="css/img/white-elegant-texture-background-style_23-2148432200.webp" alt="">
    <div class="container-fluid vh-100 d-flex justify-content-center">
        <div class="row align-content-center">

            <!-- header -->

            <div class="col-12">
                <div class="row">
                    <div class="col-12 logo"></div>
                    <div class="col-12">
                        <p class="text-center title01">Hi There Welcome to Bibliothek</p>
                    </div>
                </div>
            </div>

            <!-- header -->

            <!-- content1 -->

            <div class="col-12 p-3">
                <div class="row">


                    <div class="col-12 col-lg-6 offset-3 " id="signUpBox">
                        <div class="row g-2">

                            <div class="col-12">
                                <p class="title02">Create New Account</p>
                                <span class="text-danger" id="msg"></span>
                            </div>

                            <div class="col-6">
                                <input class="form-control" type="text" id="fname"  placeholder="First Name: *"/>
                            </div>

                            <div class="col-6">
                                <input class="form-control" type="text" id="lname"  placeholder="Last Name: *" />
                            </div>

                            <div class="col-12">
                                <input class="form-control" type="email" id="email"  placeholder="Email: *" />
                            </div>

                            <div class="col-12">
                                <input class="form-control" type="password" id="password"  placeholder="Password: *" />
                            </div>

                            <div class="col-6">
                                <input class="form-control" type="text" id="mobile" placeholder="Mobile: *" />
                            </div>

                            <div class="col-6">
                                <select class="form-select" id="gender"  placeholder="Gender: *">

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
                            </div>

                            <div class="col-12 col-lg-6 d-grid">
                                <button class="btn btn-primary" onclick="signUp();">Sign Up</button>
                            </div>

                            <div class="col-12 col-lg-6 d-grid">
                                <button class="btn btn-danger" onclick="changeView();">Already have an account? Sign In</button>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 col-lg-6 d-none offset-3" id="signInBox">
                        <div class="row g-2">
                            <div class="col-12">
                                <p class="title02">Sign In to your account</p>
                                <span class="text-danger" id="msg2"></span>
                            </div>

                            <?php

                            $email = "";
                            $password = "";

                            if (isset($_COOKIE["email"])) {
                                $email = $_COOKIE["email"];
                            }

                            if (isset($_COOKIE["password"])) {
                                $password = $_COOKIE["password"];
                            }

                            ?>

                            <div class="col-12 ">
                                <label class="form-label">Email</label>
                                <input class="form-control" type="email" id="email2" value="<?php echo $email; ?>" />
                            </div>

                            <div class="col-12">
                                <label class="form-label">Password</label>
                                <input class="form-control" type="password" id="password2" value="<?php echo $password; ?>" />
                            </div>

                            <div class="col-6">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="1" id="rememberMe">
                                    <label class="form-check-label">Remember Me</label>
                                </div>
                            </div>

                            <div class="col-6">
                                <a href="#" class="link-primary" onclick="forgotPassword();">Forgot Password?</a>
                            </div>

                            <div class="col-12 col-lg-6 d-grid">
                                <button class="btn btn-primary" onclick="signIn();">Sign In</button>
                            </div>

                            <div class="col-12 col-lg-6 d-grid">
                                <button class="btn btn-warning" onclick="changeView();">Are you New? Join Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- content1 -->

            <!-- model -->
            <div class="modal" tabindex="-1" id="fogotPasswordModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Reset Password</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="row g-3">

                                <div class="col-6">
                                    <label class="form-label">New Password</label>
                                    <div class="input-group mb-3">
                                        <input type="password" class="form-control" id="np" />
                                        <button class="btn btn-secondary" type="button" id="npb" onclick="showpassword1();"><i class="bi bi-eye-slash-fill"></i></button>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <label class="form-label">Re-type Password</label>
                                    <div class="input-group mb-3">
                                        <input type="password" class="form-control" id="rnp" />
                                        <button class="btn btn-secondary" type="button" id="rnpb" onclick="showpassword2();"><i class="bi bi-eye-slash-fill"></i></button>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <label class="form-label">Verification Code</label>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" id="vc" />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-warning" onclick="resetpassword();">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- model -->



        </div>
    </div>

    <?php 
require "footer.php";
?>

    <script src="script.js"></script>
    <script src="bootstrap.js"></script>

</body>

</html>