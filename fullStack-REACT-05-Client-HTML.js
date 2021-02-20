//==========================================================================================================
//BASIC HTML PAGE SETUP (index.html)
//==========================================================================================================
< !doctype html >

  <html lang="en">

    <head>
      {/* meta data */}
      <meta charset="utf-8">
        <title>Basic HTML Setup with Meta Data</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">

        {/* links to css files and stylesheets */}
        <link rel="stylesheet" href="style.css"></link>
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"></link> // optional

        {/* script sources for different libraries */}
        <script src="node_modules/jquery/dist/jquery.js"></script>
        <script src="https://kit.fontawesome.com/2f8763416f.js" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"></script>
    </head>

    <body>

      {/* example bundle.js as main src*/}
      <div id="app"></div>
      <script type="text/javascript" src="bundle.js"></script>

      {/* example app.js as main src */}
      <div id="app">If you can see this, React isn't running!</div>
      <script src="app.js"></script>
    </body>

</html>