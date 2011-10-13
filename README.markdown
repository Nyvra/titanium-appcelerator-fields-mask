<h1>What?</h1>
<p>This "Class", help you to make maskfields in your textFields of Titanium. For example: The postcode 99999999, will be 99999-999.</p>
<h1>How?</h1>
<p>It's very sample... You just have to use this function, in the "change" event of textField.</p>
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
