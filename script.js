
let imgbox = document.querySelector('.imgBox');
let whiteboxes = document.querySelectorAll('.whiteBox');

imgbox.addEventListener('dragstart',(e)=>{
  console.log('start');
  e.target.className += ' hold';
  setTimeout(() => {
    e.target.className =  'hide';
  }, 0);
})
imgbox.addEventListener('dragend',(e)=>{
  console.log('end');
  e.target.className = 'imgBox';
});


for( boxes of whiteboxes){
   boxes.addEventListener('dragenter',(e)=>{
     console.log('enter');
     e.target.className += ' dashed';
   })

   boxes.addEventListener('dragover',(e)=>{
     console.log('over')
     e.preventDefault();
   })

   boxes.addEventListener('dragleave',(e)=>{
     console.log('leave')
   e.target.className = 'whiteBox';
   })

   boxes.addEventListener('drop',(e)=>{
     console.log('drop');
     e.target.append(imgbox);
   })

}
