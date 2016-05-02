<!DOCTYPE html>

<html lang="ru">
  <head>
    <?php require('head.php'); ?>
  </head>

  <body>
    <div class="container main-container">
      <?php require('nav.php'); ?>

      <div class="content-container" id="contentContainer">
        <canvas class="canvas_graph" id="canvasGraph" width="150" height="150"></canvas>
      </div>
    </div>

    <?php require('modals.php'); ?>

    <?php require('scripts.php'); ?>

    <!-- scripts -->
    <script>
      $( document ).ready(function() {     

        // get data for scala graph from GET
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            url = url.toLowerCase(); // This is just to avoid case sensitiveness  
            name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        // calculate canvas size
        var canvasWidth = $("#contentContainer").outerWidth(true),
            windowHeight = $(window).outerHeight(true),
            navbarHeight = $("#navbar").outerHeight(true), 
            canvasHeight = windowHeight - navbarHeight - 50, 
            offsetBeginCoord = 40;
            xBeginCoord = offsetBeginCoord,
            yBeginCoord = canvasHeight - offsetBeginCoord;

        // set canvas props
        var canvasGraphElem = document.getElementById("canvasGraph");        
        canvasGraphElem.width = canvasWidth;
        canvasGraphElem.height = canvasHeight, 
        ctx = canvasGraphElem.getContext('2d');

        var graph_id = getParameterByName("graph_id");   

        var graphOptions = {
          'graph_id': graph_id,
          'offsetBeginCoord': offsetBeginCoord,
          'xBeginCoord': xBeginCoord,
          'yBeginCoord': yBeginCoord,
          'ctx': ctx
        };     

        $.ajax({
          url: 'js/project/ajax/getGraphData.php',
          type: "post",
          data: {graph_id: graph_id}
        }).done(function(graphObj) {  
          var graphObj = JSON.parse(graphObj);

          console.log(graphObj);

          if(graphObj) {        
            graphObj['id'] = parseInt(graphObj['id'], 10);
            graphObj['x_min'] = parseInt(graphObj['x_min'], 10);
            graphObj['x_max'] = parseInt(graphObj['x_max'], 10);
            graphObj['x_period'] = parseInt(graphObj['x_period'], 10);
            graphObj['y_min'] = parseInt(graphObj['y_min'], 10);
            graphObj['y_max'] = parseInt(graphObj['y_max'], 10);
            graphObj['y_period'] = parseInt(graphObj['y_period'], 10); 

            var graphObj = new graphClass(graphObj, graphOptions);             

            graphObj.drawGuides();            
          };
        });         

        



        // draw dots
        $.ajax({
          url: 'js/project/ajax/getDots.php',
          type: "post",
          data: {graph_id: graph_id}
          }).done(function(dotsObj) {
            dotsObj = JSON.parse(dotsObj);

            if(dotsObj) { 
              for(var key in dotsObj) {
                var xCoordDot = xBeginCoord + parseInt(dotsObj[key]['x_coord'], 10),
                    yCoordDot = yBeginCoord - parseInt(dotsObj[key]['y_coord'], 10);

                ctx.fillRect(xCoordDot, yCoordDot, 2, 2);
              };          
            };          
          }); 
      });            
    </script>      
  </body>
</html>
