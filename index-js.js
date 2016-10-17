
window.onload=function(){
	var container=document.getElementById('container');
	console.log(container);
	var list=document.getElementById('list');
	var prev=document.getElementById('prev');
	var next=document.getElementById('next');
	function animate(offset){
        list.style.left = parseInt(list.style.left) + offset + 'px';
	}
	prev.onclick=function(){
		animate(680);
	}
	next.onclick=function(){
		animate(-680);
	}
}
