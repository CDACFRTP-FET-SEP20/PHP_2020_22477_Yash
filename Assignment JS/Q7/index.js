
        function startTime() {
            var today = new Date();

            var s = today.getSeconds();
            // add a zero in front of numbers<10
            s = checkTime(s);
            document.getElementById('demo').innerHTML = "Welcome! You are using 'Chrome' and you are on this page since"+"  "+ s +" " +" seconds";
            t = setTimeout(function () { startTime() }, 500);
        }

        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }


        function myCh() {
            var checkBox = document.getElementById("myCheck");
            var text = document.getElementById("auId");
            if (checkBox.checked == true) {
                text.style.visibility = "visible";
            } 
        }