<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="js/script.js"></script>
    <script src="js/filter.js"></script>
    <title>Portfolio</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <div id="header">
        <div id="menu">
           <input id="search" style="float:right; margin-top:3px;" type="text" placeholder="search here...">
            <h2>Portfolio</h2>
        </div>
    </div>
    
    <div id="overlay"></div>
    <div id="frame">
       <table id="frame-table">
           <tr>
               <td id="left">
                   <img src="images/left2.png" alt="left">
               </td>
               <td id="right">
                   <img src="images/right.png" alt="right">
               </td>
           </tr>
       </table>
        <img id="main" src="" alt="">
        <div id="description">
            <p></p>
        </div>
    </div>
    <div id="wrapper">
       <ul id="filter">
          <li class="active">all</li>
           <li>nature</li>
           <li>city</li>
           <li>architecture</li>
       </ul>
        <ul id="portfolio">
            <li data-keywords="nature" class="all nature"><img id="1" src="images/1.jpg" alt="img"></li>
            <li data-keywords="city" class="all city"><img id="2" src="images/2.jpg" alt="img"></li>
            <li data-keywords="architecture" class="all architecture"><img id="3" src="images/3.jpg" alt="img"></li>
            <li data-keywords="nature" class="all nature"><img id="4" src="images/4.jpg" alt="img"></li>
            <li data-keywords="architecture" class="all architecture"><img id="5" src="images/5.jpg" alt="img"></li>
            <li data-keywords="city" class="all city"><img id="6" src="images/6.jpg" alt="img"></li>
            <li data-keywords="architecture" class="all architecture"><img id="7" src="images/7.jpg" alt="img"></li>
            <li data-keywords="nature" class="all nature"><img id="8" src="images/8.jpg" alt="img"></li>
        </ul>
    </div>
</body>
</html>