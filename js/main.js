(function () {

    $(document).ready(function () {
        function sentence() {
            var contex = $("#contex").val();
            document.getElementById("output").removeAttribute("hidden")
            if (contex == 1) {
                return con1[Math.floor(Math.random() * con1.length)];
            } else if (contex == 2) {
                return con2[Math.floor(Math.random() * con2.length)];
            } else {}
        }

        function paragraph(numsentences) {
            var parat = $('#paratype').val();
            if (parat == 1) {
                var output = "<p class=\"para\">";
            } else if (parat == 2) {
                var output = "<p class=\"para\"><span class=\"tagg\">&lt;p&gt;</span>";
            } else if (parat == 3) {
                var output = "<p class=\"para\"><span class=\"tagg\">&lt;span&gt;</span>";
            } else if (parat == 4) {
                var output = "<p class=\"para\"><span class=\"tagg\">&lt;li&gt;</span>";
            } else {}
            while (numsentences > 0) {
                var sen = sentence();
                output += sen + " ";
                numsentences -= 1;
            }
            if (parat == 1) {
                output += "</p>";
            } else if (parat == 2) {
                output += "<span class=\"tagg\">&lt;&#47;p&gt;</span></p>";
            } else if (parat == 3) {
                output += "<span class=\"tagg\">&lt;&#47;span&gt;</span></p>";
            } else if (parat == 4) {
                output += "<span class=\"tagg\">&lt;&#47;li&gt;</span></p>";
            } else {}
            return output;
        }


        $('#input').submit(function (event) {
            var numpara = $('#numpara').val();
            var size = $('#parasize').val();
            var blah = "";
            while (numpara > 0) {
                blah += paragraph(size);
                numpara -= 1;
            }

            $('#output').html(blah);
            event.preventDefault();
        });
    });


})();