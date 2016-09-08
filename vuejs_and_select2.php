// PHP code
<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            {!! Form::label('funder', 'Funder') !!}
            {!! Form::select('funder', $funders, null, ['class' => 'form-control', 'style' => 'width: 100%', 'v-model' => 'formInputs.funder', "v-selecttwo" =>  'formInputs.funder']) !!}
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            {!! Form::label('grant', 'Grant') !!}
            {!! Form::select('grant', $grants, null,['class' => 'form-control', 'style' => 'width: 100%', 'v-model' => 'formInputs.grant', "v-selecttwo" =>  'formInputs.grant']) !!}
        </div>
    </div>
</div>


// JavaScript code for Vuejs by using directive
Vue.directive('selecttwo', {
       twoWay: true,
        bind: function(){
            $(this.el).select2()
                    .on("select2:select", function(e){
                        this.set($(this.el).val());
                    }.bind(this));
        },
        update: function(nv, ov){
            $(this.el).trigger("change");
        }
    });

new Vue({
    el: '.content',

    data: {
        formInputs: {
            funder: '',
            grant: ''
        },
    }
  });  
    
