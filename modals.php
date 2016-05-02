<!-- Modal add dot-->
<div class="modal fade" id="addDot" tabindex="-1" role="dialog" aria-labelledby="addDotLabel">
  <div class="modal-dialog" role="document">     
    <div class="modal-content">
      <form class="" id="addDotForm" method="get" action="js/project/ajax/addDot.php" onSubmit="">
        <fieldset>         
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="addDotLabel">Добавить точку</h4>
          </div>

          <div class="modal-body">
            <p>
              <label for="xCoord">Координата X</label>
              <input class="form-control" id="xCoord" name="x_coord" type="number" rangelength="[1,4]" value="">
            </p>
            <p>
              <label for="yCoord">Координата Y</label>
              <input class="form-control" id="yCoord" name="y_coord" type="number" rangelength="[1,4]" value="">
            </p>

            <p>
              <label for="description" class="description">Описание</label>
              <textarea class="form-control" id="description"></textarea>
            </p>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
            <button type="submit" class="btn btn-primary submit" value="Submit">Добавить</button>
          </div>
        </fieldset>
      </form>          
    </div>
  </div>
</div>  