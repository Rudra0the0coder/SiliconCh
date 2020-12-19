onEvent("home", "click", function( ) {
	setScreen("screen2");
});
onEvent("button3", "click", function( ) {
	setScreen("th");
});
onEvent("button4", "click", function( ) {
	setScreen("step2");
});
onEvent("button1", "click", function( ) {
	setScreen("Steps");
});
onEvent("Run", "click", function( ) {
	setScreen("table");
});
onEvent("add", "click", function( ) {
	var x = getNumber("text_input1");
	var y = getNumber("text_input2");
	setText("out", (x+y+13)/2);
});
onEvent("button16", "click", function( ) {
	setScreen("8");
});
onEvent("button17", "click", function( ) {
	setScreen("9");
});
onEvent("button18", "click", function( ) {
	setScreen("10");
});
onEvent("button19", "click", function( ) {
	setScreen("11");
});
onEvent("button20", "click", function( ) {
	setScreen("12");
});
onEvent("button21", "click", function( ) {
	setScreen("13");
});
onEvent("button22", "click", function( ) {
	setScreen("14");
});
onEvent("button23", "click", function( ) {
	setScreen("16");
});
onEvent("button24", "click", function( ) {
	setScreen("15");
});
onEvent("button25", "click", function( ) {
	setScreen("18");
});
onEvent("button26", "click", function( ) {
	setScreen("17");
});
onEvent("button2", "click", function( ) {
var x = getNumber("text_input3");
	setText("label11", x/72*100);
});

onEvent("button5", "click", function( ) {
var x = getNumber("text_input4");
	setText("label11", x/75*100);
});
onEvent("button6", "click", function( ) {
var x = getNumber("text_input5");
	setText("label21", x/78*100);
});

onEvent("button7", "click", function( ) {
var x = getNumber("text_input6");
	setText("label24", x/81*100);
});
onEvent("button8", "click", function( ) {
var x = getNumber("text_input7");
	setText("label27", x/84*100);
});

onEvent("button9", "click", function( ) {
var x = getNumber("text_input8");
	setText("label30", x/88*100);
});

onEvent("button10", "click", function( ) {
var x = getNumber("text_input9");
	setText("label33", x/92*100);
});

onEvent("button11", "click", function( ) {
var x = getNumber("text");
	setText("label36", x/95*100);
});

onEvent("button12", "click", function( ) {
var x = getNumber("text_input11");
	setText("label39", x/98*100);
});

onEvent("button14", "click", function( ) {
var x = getNumber("text_input13");
	setText("label45", x/99*100);
});

onEvent("button15", "click", function( ) {
var x = getNumber("text_input14");
	setText("label48", x/100*100);
});



