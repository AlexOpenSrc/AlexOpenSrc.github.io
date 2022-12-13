// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 3000,
    delay: (el, i) => 100 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

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




