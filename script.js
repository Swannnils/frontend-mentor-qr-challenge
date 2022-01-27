section.onmouseenter = function(){
    this.classList.add('hovered');
 }
 
 section.onmouseleave = function(){
    setTimeout(function(){
       this.classList.remove('hovered');
    }.bind(this),50)
 }