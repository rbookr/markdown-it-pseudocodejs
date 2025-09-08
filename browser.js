var md = require('markdown-it')(),
	mpjs = require('./index');

var _ = require('lodash');

md.use(mpjs,{lineNumber:true});

var input = document.getElementById('input'),
	output = document.getElementById('output'),
	button = document.getElementById('button');
	readme = document.getElementById('readme');
	readme_rendered = document.getElementById('readme_rendered');

const _readme_rendered = md.render(readme.textContent);
console.log("----------------------")
console.log(_readme_rendered);
readme_rendered.innerHTML = _readme_rendered;

// Function to render the input
function renderInput() {
	var result = md.render(input.value);
	output.innerHTML = result;
}

// Using lodash debounce to limit the rate at which the function can fire
const debouncedRender = _.debounce(renderInput, 300); // 300ms delay

// Add event listener for input changes
input.addEventListener('input', debouncedRender);

// Initial render if there's any content
renderInput();