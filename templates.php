<script type="text/template" id="calcTemplate">
  <div class="container">
    <div class="row">
      <div class="col-xs-12"><h1>Калькулятор доставки</h1></div>
    </div>

    <div class="row">
      <div class="col-xs-6" id="departCityWidgetContainer"></div>
      <div class="col-xs-6" id="destinCityWidgetContainer"></div>
    </div> 

    <div class="row">
      <div class="col-xs-12" id="shippingOptionsWidgetContainer"></div>
    </div>     

    <div class="row">
      <div class="col-xs-12">
        <div class="btn btn-default pull-right" id="calcSubmitButton">Рассчитать</div>
      </div>
    </div>        

  </div>
</script>


<script type="text/template" id="departCityTemplate">
  <div class="panel panel-default">
    <div class="panel-body row">
      <div class="col-xs-12">
        <h2>Город отправления</h2>
      </div>

      <div class="widget_content form-group col-xs-12">
        <input type="text" class="form-control" id="fldDepartCity">
        <div id="errorMessageDepartCity" class="help-block"></div>
      </div>
    </div>
  </div>
</script>


<script type="text/template" id="destinCityTemplate">
  <div class="panel panel-default">
    <div class="panel-body row">
      <div class="col-xs-12">
        <h2>Город назначения</h2>
      </div>

      <div class="widget_content form-group col-xs-12">
        <input type="text" class="form-control" id="fldDestinCity">
        <div id="errorMessageDestinCity" class="help-block"></div>
      </div>
    </div>
  </div>
</script>


<script type="text/template" id="shippingOptionsTemplate">
  <div class="panel panel-default">
    <div class="panel-body row">
      <div class="col-xs-12">
        <h2>Параметры груза</h2>
      </div>

      <div class="widget_content form-group col-xs-12">
        <div class="row">
          <div class="col-xs-6">
            <label>Вес</label>
            <input type="text" class="form-control" id="fldShippingOptionsWeight">
            <div id="errorMessageShippingOptionsWeight" class="help-block"></div>
          </div>

          <div class="col-xs-6">
            <label>Объём</label>
            <input type="text" class="form-control" id="fldShippingOptionsVolume">  
            <div id="errorMessageShippingOptionsVolume" class="help-block"></div>      
          </div>
        </div>
      </div>
    </div>
  </div>
</script>


<script type="text/template" id="oversizedCargoTemplate">
  <div class="panel panel-default">
    <div class="panel-body row">
      <h2 class="col-xs-12">
        <input 
          class="oversized_cargo_state_checkbox" 
          id="oversizedCargoStateCheckbox" 
          type="checkbox" 
          <%= activeState %> 
        >
        <span>Негабаритный груз</span>
      </h2>

      <div class="widget_content form-group col-xs-12 <%= visibility %>">
        <div class="">
          <label>Вес</label>
          <input type="text" class="form-control" id="fldOversizedCargoWeight">
          <div id="errorMessageOversizedCargoWeight" class="help-block"></div>
        </div>

        <div class="">
          <label>Объём</label>
          <input type="text" class="form-control" id="fldOversizedCargoVolume">  
          <div id="errorMessageOversizedCargoVolume" class="help-block"></div>      
        </div>
      </div>
    </div>
  </div>
</script>


<script type="text/template" id="paymentModalTemplate">
  <!-- Modal payment -->
  <div class="modal fade payment_modal" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="paymentLabel">
    <div class="modal-dialog" role="document">     
      <div class="modal-content">
        <form class="" id="paymentForm" method="get" action="#" onSubmit="return false;">
          <fieldset>         
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="paymentLabel">Заказ составлен</h4>
            </div>

            <div class="modal-body" id="paymentModalFields">
              <form>
                <fieldset disabled>
                  <div class="form-group">
                    <label>Город отправления</label>
                    <input type="text" class="form-control" placeholder="<%= cityOfdepartName %>">
                  </div>

                  <div class="form-group">
                    <label>Город отправления</label>
                    <input type="text" class="form-control" placeholder="<%= cityOfdestinName %>">
                  </div>

                  <div class="form-group shipping_options">
                    <label>Параметры груза</label>

                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">Вес</span>
                      <input type="number" class="form-control" placeholder="<%= shippingOptionsWeight %>">
                      <span class="input-group-addon">кг</span>
                    </div>                                    

                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">Объём</span>
                      <input type="number" class="form-control" placeholder="<%= shippingOptionsVolume %>">
                      <span class="input-group-addon">м<sup>3</sup></span>
                    </div>  
                  </div>  
                </fieldset>
              </form>                   
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Понятно</button>
            </div>
          </fieldset>
        </form>          
      </div>
    </div>
  </div>  
</script>