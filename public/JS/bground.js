var i = 0;
changeBground();
changeBground();
changeBground();
changeBground();
function changeBground(){
	switch(i){
        case 0: document.getElementById('bground').style.background = "url(/pics/bground/art1.jpg) no-repeat";
                document.getElementById('bground').style.backgroundSize = "cover";
                document.getElementById('bground').style.backgroundPosition = "center";
				break;
        case 1: document.getElementById('bground').style.background = "url(/pics/bground/art2.jpg) no-repeat";
                document.getElementById('bground').style.backgroundSize = "cover";
                document.getElementById('bground').style.backgroundPosition = "center";
                break;
        case 2: document.getElementById('bground').style.background = "url(/pics/bground/art3.JPG) no-repeat";
                document.getElementById('bground').style.backgroundSize = "cover";
                document.getElementById('bground').style.backgroundPosition = "center";
                break;
	};
	i+=1;
	if(i>=3) {i=0};
};
setInterval(function(){changeBground()}, 15000)
