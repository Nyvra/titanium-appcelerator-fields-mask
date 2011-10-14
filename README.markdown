<h1>What?</h1>
<p>This "Class", will help you to make maskfields in your textFields of Titanium. For example: The postcode 99999999, will be 99999-999.</p>
<h1>How?</h1>
<p>It's very easy... You just have to use this function, in the "change" textField event.</p>
<p>Example:</p>
<pre>
Ti.include("mask.js");

var textfield = Ti.UI.createTextField({
	hintText: "Postcode",
	left: 5,
	right: 5,
	top: 150,
	bottom: 150
});

textfield.addEventListener("change", function() {
	Mask.mask(textfield, Mask.postcode);
});
</pre>
<h1>Do you need a generic mask in your field?</h1>
<p>You will need to send three parameters in the function: regex (required), sintax (required) and maxValue (optional). See the example:</p>
<pre>
textFieldPostcode.addEventListener("change", function(evt) {
	Mask.mask(textFieldPostcode, Mask.generic, {
		regex: /^(\d{5})(\d)/,
		sintax: "$1-$2",
		maxValue: 9
	});
});
</pre>
