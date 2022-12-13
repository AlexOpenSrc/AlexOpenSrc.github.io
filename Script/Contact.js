



$(function(){
			
			var currentIndex = 0;
			var _offset = 10;
			
			var $menuLi = $("#menu-list li");
			var $line = $("#menu-line");
			
			$menuLi.on("click", function(){
				
				var _$this = $(this);
								
				TweenMax.killTweensOf($line);
				
				if( _$this.index() > currentIndex ){
					
					TweenMax.to($line, 0.5, {css: {width:  (_$this.position().left + _$this.outerWidth()) - $line.position().left + _offset/2 }, onComplete:function(){
						currentIndex = _$this.index();
						TweenMax.to($line, 0.5, { css:{ left : _$this.position().left - _offset/2, width: _$this.outerWidth() + _offset } })
					} });
					
				} else {
					
					TweenMax.to($line, 0.5, {css: { left: _$this.position().left - _offset/2, width:  ($line.position().left + $line.outerWidth()) - _$this.position().left + _offset/2 }, onComplete:function(){
						currentIndex = _$this.index();
						TweenMax.to($line, 0.5, { css:{ width: _$this.outerWidth() + _offset } })
					} });
					
				}
								
			});	
						
		});


function myFunction1() {
  var txt;
  if (confirm("Appuie sur OK")) {
    txt = "Tu peux passer à l'étape suivante";
  } else {
    txt = "Tu dois appuyer sur OK !";
  }
  document.getElementById("demo").innerHTML = txt;
}
function myFunction2() {
  let text;
  let person = prompt("2+2=", "0");
  if (person == null || person == "4") {
    text = "Bravo tu peux passer a l'étape suivante!";
  } else {
    text = "C'est faux, essaye encore une fois  ";
  }
  document.getElementById("demo1").innerHTML = text;
}

function myFunction3() {
  let text;
  let person = prompt("Comment t'appelles tu ?", "Gérard");
  {
    text = "Salut "+person+", tu peux passer a la dernière étape!";
  
  document.getElementById("demo3").innerHTML = text;
  }
}
function myFunction4() {
  alert("Parfait, tu vas recevoir un email d'ici 4ans et il te suffira de cliquer sur le lien rouge pour nous contacter!");
}