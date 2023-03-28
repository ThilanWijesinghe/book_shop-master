var jsscript = document.createElement('script');
jsscript.setAttribute("type", "text/javascript");
jsscript.setAttribute("src", "js/sweetalert.min.js");

function changeView() {

    var signUpBox = document.getElementById("signUpBox");
    var signInBox = document.getElementById("signInBox");

    signInBox.classList.toggle("d-none");
    signUpBox.classList.toggle("d-none");
}

function adminchangeView() {

    var signUpBox = document.getElementById("signUpBox");
    var signInBox = document.getElementById("signInBox");

    signInBox.classList.toggle("d-none");
    signUpBox.classList.toggle("d-none");
}

function signUp() {

    var f = document.getElementById("fname");
    var l = document.getElementById("lname");
    var e = document.getElementById("email");
    var p = document.getElementById("password");
    var m = document.getElementById("mobile");
    var g = document.getElementById("gender");

    var form = new FormData();
    form.append("f", f.value);
    form.append("l", l.value);
    form.append("e", e.value);
    form.append("p", p.value);
    form.append("m", m.value);
    form.append("g", g.value);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;

            if (text == "success") {

                f.value = "";
                l.value = "";
                e.value = "";
                p.value = "";
                m.value = "";


                document.getElementById("msg").innerHTML = "";
                changeView();


            } else {
                document.getElementById("msg").innerHTML = text;
            }

        }
    }

    r.open("POST", "signUpProcess.php", true);
    r.send(form);

}

function signIn() {
    var email = document.getElementById("email2");
    var password = document.getElementById("password2");
    var rememberme = document.getElementById("rememberMe");

    var form = new FormData();
    form.append("e", email.value);
    form.append("p", password.value);
    form.append("rm", rememberme.checked);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "success") {
                window.location = "index.php";
            } else {
                document.getElementById("msg2").innerHTML = t;
            }

        }
    }

    r.open("POST", "signInProcess.php", true);
    r.send(form);
}



function adminsignIn() {
    var email = document.getElementById("email2");
    var password = document.getElementById("password2");
    var rememberme = document.getElementById("rememberMe");

    var form = new FormData();
    form.append("e", email.value);
    form.append("p", password.value);
    form.append("rm", rememberme.checked);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "success") {
                window.location = "admindashbord.php";
            } else {
                document.getElementById("msg2").innerHTML = t;
            }

        }
    }

    r.open("POST", "adminsignInProcess.php", true);
    r.send(form);
}


var bm;

function forgotPassword() {
    var email = document.getElementById("email2");

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "Success") {

                alert("Verification Code has sent to your email. Please check inbox.");
                var m = document.getElementById("fogotPasswordModal");
                bm = new bootstrap.Modal(m);
                bm.show();


            } else {
                alert(t);
            }

        }
    }

    r.open("GET", "forgotPasswordProcess.php?e=" + email.value, true);
    r.send();

}

function showpassword1() {

    var np = document.getElementById("np");
    var npb = document.getElementById("npb");

    if (np.type == "password") {

        np.type = "text";
        npb.innerHTML = "<i class='bi bi-eye-fill'></i>";

    } else {

        np.type = "password";
        npb.innerHTML = "<i class='bi bi-eye-slash-fill'></i>";

    }

}

function showpassword2() {

    var rnp = document.getElementById("rnp");
    var rnpb = document.getElementById("rnpb");

    if (rnp.type == "password") {

        rnp.type = "text";
        rnpb.innerHTML = "<i class='bi bi-eye-fill'></i>";

    } else {

        rnp.type = "password";
        rnpb.innerHTML = "<i class='bi bi-eye-slash-fill'></i>";

    }

}

function resetpassword() {

    var e = document.getElementById("email2");
    var np = document.getElementById("np");
    var rnp = document.getElementById("rnp");
    var vc = document.getElementById("vc");

    var form = new FormData();
    form.append("e", e.value);
    form.append("np", np.value);
    form.append("rnp", rnp.value);
    form.append("vc", vc.value);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "success") {

                alert("Password reset success.");
                bm.hide();

            } else {
                alert(t);
            }

        }
    }

    r.open("POST", "resetPassword.php", true);
    r.send(form);

}

function signout() {

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "success") {
                window.location = "home.php";
            }
        }
    }

    r.open("GET", "signoutprocess.php", true);
    r.send();

}

function viewpw() {
    var pwtxt = document.getElementById("pwtxt");
    var pwbtn = document.getElementById("viewpassword");

    if (pwtxt.type == "text") {

        pwtxt.type = "password";
        pwbtn.innerHTML = "<i class='bi bi-eye-fill'></i>";

    } else {

        pwtxt.type = "text";
        pwbtn.innerHTML = "<i class='bi bi-eye-slash-fill'></i>";

    }

}

function changeImage() {

    var view = document.getElementById("viewimg"); //image tag
    var file = document.getElementById("profileimg"); //file chooser

    file.onchange = function() {

        var file1 = this.files[0];
        var url1 = window.URL.createObjectURL(file1);
        view.src = url1;

    }

}

function update_profile() {

    var fname = document.getElementById("fn");
    var lname = document.getElementById("ln");
    var mobile = document.getElementById("mo");
    var line1 = document.getElementById("l1");
    var line2 = document.getElementById("l2");
    var province = document.getElementById("pr");
    var district = document.getElementById("dr");
    var city = document.getElementById("ci");
    var postal_code = document.getElementById("pc");
    var image = document.getElementById("profileimg");

    var form = new FormData();
    form.append("fn", fname.value);
    form.append("ln", lname.value);
    form.append("m", mobile.value);
    form.append("li1", line1.value);
    form.append("li2", line2.value);
    form.append("pr", province.value);
    form.append("di", district.value);
    form.append("ci", city.value);
    form.append("pc", postal_code.value);

    if (image.files.length == 0) {

        var confirmAction = confirm("Are you sure you don't want to update your profile picture?");

        if (confirmAction) {

            alert("You have not selected any image.");

        } else {}

    } else {

        form.append("image", image.files[0]);

    }



    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "Please Log In to your account first.") {

                alert(t);
                window.location = "index.php";

            } else if (t == "success") {

                window.location = "userprofile.php";

            } else {

                alert(t);

            }
        }
    }

    r.open("POST", "updateProfileProcess.php", true);
    r.send(form);

}

function changeProductImage() {

    var image = document.getElementById("imageuploader");

    image.onchange = function() {

        var img_count = image.files.length;

        for (var x = 0; x < img_count; x++) {

            var file = this.files[x];
            var url = window.URL.createObjectURL(file);

            document.getElementById("preview" + x).src = url;

        }

    }

}

function addproduct() {

    var category = document.getElementById("category");
    var brand = document.getElementById("brand");
    var model = document.getElementById("model");
    var title = document.getElementById("title");

    var condition = 0;

    if (document.getElementById("bn").checked) {
        condition = 1;
    } else if (document.getElementById("us").checked) {
        condition = 2;
    }

    var color = 0;

    if (document.getElementById("clr1").checked) {
        color = 1;
    } else if (document.getElementById("clr2").checked) {
        color = 2;
    } else if (document.getElementById("clr3").checked) {
        color = 3;
    } else if (document.getElementById("clr4").checked) {
        color = 4;
    } else if (document.getElementById("clr5").checked) {
        color = 5;
    } else if (document.getElementById("clr6").checked) {
        color = 6;
    }

    var qty = document.getElementById("qty");
    var price = document.getElementById("cost");
    var delivery_within_colombo = document.getElementById("dwc");
    var delivery_outof_colombo = document.getElementById("doc");
    var description = document.getElementById("description");
    var image = document.getElementById("imageuploader");

    var f = new FormData();
    f.append("c", category.value);
    f.append("b", brand.value);
    f.append("m", model.value);
    f.append("t", title.value);
    f.append("co", condition);
    f.append("col", color);
    f.append("qty", qty.value);
    f.append("p", price.value);
    f.append("dwc", delivery_within_colombo.value);
    f.append("doc", delivery_outof_colombo.value);
    f.append("desc", description.value);
    f.append("img", image.files[0]);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText;

            swal({
                title: "Product Add Sucsess !",
                text: "Done",
                icon: "success",
            });


        }
    }

    r.open("POST", "addproductprocess.php", true);
    r.send(f);

}

function changeStatus(id) {

    var product_id = id;
    var switch_btn = document.getElementById("flexSwitchCheckDefault" + id);
    var switch_lbl = document.getElementById("switchlbl" + id);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "deactivated") {

                alert("Product has been Deactivated");
                window.location = "myproducts.php";

            } else if (t == "activated") {

                alert("Product has been Activated");
                window.location = "myproducts.php";

            } else {
                alert(t);
            }

        }
    }

    r.open("GET", "statusChangeProcess.php?id=" + product_id, true);
    r.send();

}

function sortFunction() {

    var search = document.getElementById("s");
    var time;

    if (document.getElementById("n").checked) {
        time = "1";
    } else if (document.getElementById("o").checked) {
        time = "2";
    }

    var qty;
    if (document.getElementById("l").checked) {
        qty = "1";
    } else if (document.getElementById("h").checked) {
        qty = "2";
    }

    var condition;
    if (document.getElementById("b").checked) {
        condition = "1";
    } else if (document.getElementById("u").checked) {
        condition = "2";
    }

    var f = new FormData();
    f.append("s", search.value);
    f.append("t", time);
    f.append("q", qty);
    f.append("c", condition);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            document.getElementById("sort").innerHTML = t;
        }
    }

    r.open("POST", "sortProcess.php", true);
    r.send(f);

}

function clearSort() {
    window.location = "myproducts.php";
}

function sendId(id) {

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "success") {

                window.location = "updateproduct.php";

            } else {
                alert(t);
            }

        }
    }

    r.open("GET", "sendProductIdProcess.php?id=" + id, true);
    r.send();

}

function updateProduct() {
    var title = document.getElementById("ti");
    var qty = document.getElementById("qty");
    var delivery_within_colombo = document.getElementById("dwc");
    var delivery_outof_colombo = document.getElementById("doc");
    var description = document.getElementById("desc");
    var image = document.getElementById("imageuploader");

    var f = new FormData();
    f.append("t", title.value);
    f.append("q", qty.value);
    f.append("dwc", delivery_within_colombo.value);
    f.append("doc", delivery_outof_colombo.value);
    f.append("d", description.value);
    f.append("i", image.files[0]);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            alert(t);
        }
    }

    r.open("POST", "updateProcess.php", true);
    r.send(f);

}

function basicSearch(x) {

    var txt = document.getElementById("basic_search_txt");
    var select = document.getElementById("basic_search_select");

    var f = new FormData();
    f.append("t", txt.value);
    f.append("s", select.value);
    f.append("page", x);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            document.getElementById("basicSearchResult").innerHTML = t;
        }
    }

    r.open("POST", "basicSearchProcess.php", true);
    r.send(f);

}

function advancedSearch(x) {

    var search_txt = document.getElementById("s1");
    var category = document.getElementById("c1");
    var brand = document.getElementById("b1");
    var model = document.getElementById("m1");
    var condition = document.getElementById("con");
    var color = document.getElementById("col");
    var price_from_txt = document.getElementById("pf");
    var price_to_txt = document.getElementById("pt");
    var sort = document.getElementById("sort");

    var form = new FormData();
    form.append("page", x);
    form.append("s", search_txt.value);
    form.append("c", category.value);
    form.append("b", brand.value);
    form.append("m", model.value);
    form.append("c1", condition.value);
    form.append("c2", color.value);
    form.append("p1", price_from_txt.value);
    form.append("p2", price_to_txt.value);
    form.append("s1", sort.value);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            document.getElementById("view_area").innerHTML = t;
        }
    }

    r.open("POST", "advancedSearchProcess.php", true);
    r.send(form);

}

function loadMainImg(id) {

    var sample_img = document.getElementById("productImg" + id).src;
    var main_img = document.getElementById("mainImg");

    main_img.style.backgroundImage = "url(" + sample_img + ")";

}

function check_value(qty) {

    var input = document.getElementById("qtyInput");

    if (input.value <= 0) {
        alert("Product quantity must be greater than 1.");
        input.value = 1;
    } else if (input.value > qty) {
        alert("Insufficient Quantity.");
        input.value = qty;
    }

}

function qty_inc(qty) {

    var input = document.getElementById("qtyInput");

    if (input.value < qty) {
        var newValue = parseInt(input.value) + 1;
        input.value = newValue.toString();
    } else {
        alert("Maximum quantity has achieved.");
    }

}

function qty_dec() {

    var input = document.getElementById("qtyInput");

    if (input.value > 1) {
        var newValue = parseInt(input.value) - 1;
        input.value = newValue.toString();
    } else {
        alert("Minimum quantity has achieved.");
    }

}

function addToCart(id) {

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            alert(t);
        }
    }

    r.open("GET", "addToCartProcess.php?id=" + id, true);
    r.send();

}

function deleteFromCart(id) {

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var txt = r.responseText;
            if (txt == "success") {
                alert("Product removed from the cart.");
                window.location = "cart.php";
            } else {
                alert(txt);
            }

        }
    }

    r.open("GET", "removeCartProcess.php?id=" + id, true);
    r.send();

}

function addToWatchlist(id) {
    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "added") {

                document.getElementById("heart" + id).style.color = "red";
                window.location.reload();

            } else if (t == "removed") {

                document.getElementById("heart" + id).style.color = "white";
                window.location.reload();

            } else {
                alert(t);
            }

        }
    }

    r.open("GET", "addToWatchlistProcess.php?id=" + id, true);
    r.send();
}

function removeFromWatchlist(id) {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            var text = request.responseText;

            if (text == "success") {
                window.location.reload();
            } else {
                alert(text);
            }

        }
    }

    request.open("GET", "removeWatchlistProcess.php?id=" + id, true);
    request.send();

}

function viewMessages(email) {

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            document.getElementById("chat_box").innerHTML = t;
        }
    }

    r.open("GET", "viewMessageProcess.php?email=" + email, true);
    r.send();

}

function sendMsg() {

    var recever_mail = document.getElementById("rmail");
    var msg_txt = document.getElementById("msgTxt");

    var f = new FormData();
    f.append("rm", recever_mail.innerHTML);
    f.append("mt", msg_txt.value);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "success") {
                window.location = "message.php";
            } else {
                alert(t);
            }

        }
    }

    r.open("POST", "sendMsgProcess.php", true);
    r.send(f);

}

function edit(update_product) {

    var p_id = update_product;


    var f = new FormData();
    f.append("p_id", p_id);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "success") {

                swal({
                    title: "Product Update Sucsess !",
                    text: "Done",
                    icon: "success",
                });
                window.location = "updateproductdashbord.php";
            } else {
                alert(t);
            }

        }
    }

    r.open("POST", "updatedeleteprosess.php", true);
    r.send(f);

}



function deleteProduct(pid) {



    var form = new FormData();
    form.append("id", pid);
    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;

            if (t == "Succses") {

                swal({
                    title: "Item Delete Succsess !",
                    text: "Done",
                    icon: "success",
                });

                window.location = "productlist.php";

            }

        }
    }

    r.open("POST", "deleteproductprocess.php", true);
    r.send(form);

}






function printInvoice() {

    var page = document.getElementById("page").innerHTML;
    var restorePage = document.body.innerHTML;
    document.body.innerHTML = page;
    window.print();
    document.body.innerHTML = restorePage;

}

var xm;

function adminVerification() {

    var verificationModal = document.getElementById("verificationModal");
    xm = new bootstrap.Modal(verificationModal);
    xm.show();

}