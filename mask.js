/*
 * 	@ Developed by Nyvra (http://www.nyvra.net)
 * 	@ Last release: 13/10/2011
 */

Mask = 
{
	mask: function(_field, _function) {
		_field.value = _function(_field.value)
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
