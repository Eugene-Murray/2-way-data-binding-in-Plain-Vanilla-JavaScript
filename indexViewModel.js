// JavaScript Document

//let $scope = {};
(function () {
	
	let attachDataEvent = function () {
		let allElements = document.getElementsByTagName("*");
		let allElementsArray = Object.keys(allElements)
								.map((key) => { return allElements[key]; })
								.filter((element) => { 
									if (element.dataset.bind) return element;
								});
		allElementsArray.forEach((element) => { 
			if(element.dataset && element.dataset.bind) {
				element.onkeyup = function() {
					for (let index in allElementsArray) {
						if (allElementsArray[index].dataset.bind === this.dataset.bind ) {
							if (allElementsArray[index].tagName === 'INPUT')
									allElementsArray[index].value = this.value;
							if (allElementsArray[index].tagName === 'LABEL') 
									allElementsArray[index].innerHTML = this.value;
						}
					}
				};
				
			}
		});
		

	};
	
	
	let bindClasses = ['name', 'age'];
	let attachEvent = function (classNames) {
		classNames.forEach(function(className) {
			let elements = document.getElementsByClassName(className);
			for(let index in elements) {
				elements[index].onkeyup = function() {
					for (let index in elements) {
						if (elements[index].tagName === 'INPUT')
							elements[index].value = this.value;
						if (elements[index].tagName === 'LABEL') {
							elements[index].innerHTML = this.value;
						}
							
					}
				}
			}

		});	
	};
	attachEvent(bindClasses);
	attachDataEvent(); 
	
})();