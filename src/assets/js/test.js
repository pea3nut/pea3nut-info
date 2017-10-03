var mdSource =`
<div></div><p></p>

# title

text

<div></div>
`;
var Marked =require('marked');
console.log(Marked(mdSource));// will be intact