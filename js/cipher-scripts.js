jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is a header.");
  });

  jQuery("p").click(function() {
    alert("This is a paragraph.");
  });

  jQuery("img.walrus").click(function() {
    alert("This is an image.");
  });

  jQuery("img.left").click(function() {
    alert(sentence);
  });

  jQuery("img.right").click(function() {
    alert(sentence);
    $("img.left").hide();
  });

});

var reverseIt = function (msg) {
  var strArray = msg.split(""); // split the string into an array of chars
  var rvrsArr = strArray.reverse(); // reverse the array
  var value = rvrsArr.join(); // join the reversed array
  var value = value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''); // remove any special characters
  return value;
}

var getInput = function (msg) {
	return prompt(msg);
}

var putOutput = function (msg) {
	console.log(msg);
}

var firstLast = function(msg){
  var temp = msg.charAt(0) + msg.substr(msg.length -1);
  return temp.toUpperCase();
}

var reverseOrder = function (msg) {
  var one = msg.charAt(0);
  var two = msg.substr(msg.length-1);
  return two + one;
}

var firstLastReverse = function (msg) {
  return msg.concat(reverseOrder(firstLast(msg)));
}

var fourthFun = function (msg) {
  count = msg.length;
  index = Math.round(count / 2)-1;
  newString = msg.charAt(index);
  newer = "".concat(newString, msg);
  return newer;
}

var sentence = getInput("Please type a sentence");
putOutput(sentence + "\n");
putOutput("\n" + firstLast(sentence));
var x = firstLast(sentence);
putOutput(x);
x = reverseOrder(x);
putOutput(x);
y = firstLastReverse(sentence);
putOutput(y);
z = fourthFun(sentence);
putOutput(z);
putOutput(reverseIt(z));
