APP.valuesValidator = {
  emptyCheck: function(value) { 
    if($.trim(value).length == 0) { 
      return 'Это значение не может быть пустым'; 
    };
  },

  negativeNumCheck: function(value) { 
    if(parseInt($.trim(value), 10) < 0) { 
      return 'Это значение не может быть меньше нуля'; 
    };
  },

  nullNumCheck: function(value) { 
    if(parseInt($.trim(value), 10) == 0) { 
      return 'Это значение не может быть равно нулю'; 
    };
  },

  isNumCheck: function(value) { 
    if(isNaN(parseInt($.trim(value), 10)) == false) { 
      return 'Это значение не может быть цифрой'; 
    };
  },

  isStrCheck: function(value) { 
    var valueTrimmed = $.trim(value);

    if(isNaN(parseInt(valueTrimmed, 10)) == true && valueTrimmed.length != 0) { 
      return 'Это значение должно быть цифрой'; 
    };
  } 
}