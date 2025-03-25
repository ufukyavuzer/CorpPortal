<?php
/**
 * CorpPortal - Main Portal Page
 * 
 * Description: This is the main entry point of the CorpPortal application. 
 * It serves as the central interface for accessing company resources and systems.
 * Author: Ufuk Yavuzer
 * Created: March 24, 2025
 * Version: 1.0
 */
if (!isset($_SESSION)) {session_start();}
ini_set("session.cookie_httponly", True);
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title id="pageTitle"></title>
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style/bootstrap.min.css">
    <link rel="stylesheet" href="style/font-awesome.min.css">
    <link rel="stylesheet" href="style/style_fonts.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/custom.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="d-block text-xs-center eee-logo-block" id="headerContainer"></div>
        </div>
        
        <div class="row">
            <div class="d-block text-xs-center eee-google">
                <form method="get" action="http://www.google.com.tr/search" class="form-inline" onsubmit="trackButtonClick()">
                    <table>
                        <tr>
                            <td>
                                <div class="d-inline-block">
                                    <a href="http://www.google.com.tr/"><img src="images/logo_google.png" alt="Google"></a>
                                    <input type="text" name="q" class="form-control" size="31" maxlength="255" id="searchInput" onkeydown="if(event.key === 'Enter'){trackButtonClick();}">
                                    <input type="hidden" name="hl" value="tr">
                                    <button type="submit" class="btn btn-primary"><i class="fa fa-search fa-lg"></i></button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>

        <div class="row eee-item" id="mainLinksContainer"></div>
    </div>

    <div id="modalTemplates"></div>

    <script src="style/jquery.min.js"></script>
    <script src="style/tether.min.js"></script>
    <script src="style/bootstrap.min.js"></script>
    <script src="scripts.js"></script>
</body>
</html>
