var Link = {
	setLinkColor:function (color){

		$('a').css('color', color);
	}
}
var Body = {
	setLetterColor:function (color){
		$('body').css('color', color);
	},
	setBackGColor:function (color){
		$('body').css('backgroundColor', color);
	}
}

	function contrastHandler(self){
		var target = document.querySelector('body');
		if(self.value === 'Make it bright'){
			Body.setBackGColor('white')
			Body.setLetterColor('black')
			self.value = 'Make it dark';
			Link.setLinkColor('pink')

		} else {
			Body.setBackGColor('black')
			Body.setLetterColor('white')
			self.value = 'Make it bright';
			Link.setLinkColor('pink');
		}
	}
