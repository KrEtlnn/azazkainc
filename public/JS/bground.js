﻿var i = 0;
changeBground();
changeBground();
changeBground();
changeBground();
function changeBground(){
	switch(i){
        case 0: document.body.style.background = "url(/pics/bground/art1.png) no-repeat";
                document.body.style.backgroundAttachment = "fixed";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
				break;
        case 1: document.body.style.background = "url(/pics/bground/art2.png) no-repeat";
                document.body.style.backgroundAttachment = "fixed";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
                break;
        case 2: document.body.style.background = "url(/pics/bground/art3.png) no-repeat";
                document.body.style.backgroundAttachment = "fixed";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
                break;
	};
	i+=1;
	if(i>=3) {i=0};
};
setInterval(function(){changeBground()}, 15000)
