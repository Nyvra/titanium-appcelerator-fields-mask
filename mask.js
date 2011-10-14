/*
 * 	@ Developed by Nyvra (http://www.nyvra.net)
 * 	@ Last release: 13/10/2011
 */

Mask = 
{
	mask: function(_field, _function, _genericParameters) {
		if (_genericParameters)
			_field.value = _function(_field.value, _genericParameters);
		else
			_field.value = _function(_field.value);
	},
	
	generic: function(v, _genericParameters) {
		var _regex = _genericParameters.regex;
		var _sintax = _genericParameters.sintax;
		var _maxValue = _genericParameters.maxValue;
		v = v.replace(/D/g,"");
		v = v.replace(_regex, _sintax);
		
		return (_maxValue != null) ? v.slice(0, _maxValue) : v;
	},

	postcode: function(v) {
		v = v.replace(/D/g,"");
		v = v.replace(/^(\d{5})(\d)/,"$1-$2");
		return v.slice(0, 9);
	},
	
	phone: function(v) {
		v = v.replace(/\D/g,"");
		v = v.replace(/^(\d\d)(\d)/g,"($1) $2");
		v = v.replace(/(\d{4})(\d)/,"$1-$2");
		return v.slice(0, 14);
	}
}
