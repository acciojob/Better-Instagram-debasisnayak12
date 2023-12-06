//your code here
let dragged;

document.addEventListener('dragstart', (event)=>{
	dragged = event.target;
	event.target.style.opacity = 0.5;
});

document.addEventListener('dragend',(event) => {
	event.target.style.opacity = "";
});

document.addEventListener('dragover',(event) => {
	event.preventDefault();
});
document.addEventListener('drop',(event)=>{
	event.preventDefault();

	if(event.target.className === 'image') {
		// swap the order of the dragged element and the drop target 
		const parent = document.getElementById("parent");
		const dropTarget = event.target;
		const draggedIndex = Array.from(parent.children).indexOf(dragged);
		const dropIndex = Array.from(parent.children).indexOf(dropTarget);
    // swap the element 
		parent.insertBefore(dragged, dropTarget);
		if(draggedIndex < dropIndex){
			parent.insertBefore(dropTarget,dragged);
		}else{
			parent.insertBefore(dropTarget,dragged.nextSibling);
		}
	}
   // Reset opacity after drop
	dragged.style.opacity = "";
});