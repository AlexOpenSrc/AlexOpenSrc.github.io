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
  alert("On ne vends pas ce produit... Problème de trésorie pas assez grande pour lancer une production");
}

function myFunction1() {
  alert("De 1, si tu as une Chrion, tu ne devrais pas etre sur Weliweli, c'est une perte de temps pour toi, tu as surrement autre chose a faire. Et de 2 svp, si tu n'as pas de Chiron, ne mets pas les clés de ta Clio sur notre beau porte clé. Respecte le. Merci");
}



/*Titre animé*/
