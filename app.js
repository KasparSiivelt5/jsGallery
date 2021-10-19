const currentImage = document.querySelector('#image');
const images = ['images/pilt1.jpg ' ,'images/pilt2.jpeg' , 'images/pilt3.jpg'];

function changeImage(){
   console.log('Hello from script file.');

    let randomnumber = Math.floor(Math.random() * images.length);

   console.log(images[randomnumber]);

   currentImage.src = images[randomnumber];
}