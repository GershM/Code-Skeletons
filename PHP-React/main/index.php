<?php 
require "../server/main.php";
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" >
</head>
<body>
    <div class="container">
        <div class="row mt-5">
            <div id='root' class="col-md-4 offset-md-1"/>                
        </div>
    </div>
<script type="text/javascript">
    function detectIE() {
        let ua = window.navigator.userAgent;
        let msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        let trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            let rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        return false;
    }
    if (false !== detectIE()) {
        document.getElementById("ieAlert").style.display = 'block';
        document.getElementById("ieAlert").innerHTML+= "Internet Explorer is no longer supported by the system. Please use any other browser such as Google Chrome, Firefox or Microsoft Edge, Thank you and sorry for the inconvenience";
    }
</script>
</body>
</html>