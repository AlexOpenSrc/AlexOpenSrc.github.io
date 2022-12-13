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

function myFunction() {
  let text;
  let person = prompt("Entrez votre plainte ici:", "Je trouve ça honteux que...");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello, enfaite, on accepte aucune plainte, juste des dons paypal pour augmenter le salaire de nos developpeurs.";
  }
  document.getElementById("demo").innerHTML = text;
}