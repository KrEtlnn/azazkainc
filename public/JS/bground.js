var i = 0;
changeBground();
changeBground();
changeBground();
changeBground();
function changeBground(){
	switch(i){
        case 0: document.getElementsByClassName('bground')[0].style.background = "url(/pics/bground/art1.png) no-repeat";
                document.getElementsByClassName('bground')[0].style.backgroundSize = "cover";
                document.getElementsByClassName('bground')[0].style.backgroundPosition = "center";
				break;
        case 1: document.getElementsByClassName('bground')[0].style.background = "url(/pics/bground/art2.png) no-repeat";
                document.getElementsByClassName('bground')[0].style.backgroundSize = "cover";
                document.getElementsByClassName('bground')[0].style.backgroundPosition = "center";
                break;
        case 2: document.getElementsByClassName('bground')[0].style.background = "url(/pics/bground/art3.png) no-repeat";
                document.getElementsByClassName('bground')[0].style.backgroundSize = "cover";
                document.getElementsByClassName('bground')[0].style.backgroundPosition = "center";
                break;
	};
	i+=1;
	if(i>=3) {i=0};
};
setInterval(function(){changeBground()}, 15000)
