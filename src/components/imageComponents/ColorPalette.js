import ColorThief from 'colorthief';

// https://lokeshdhakar.com/projects/color-thief/#support
// https://github.com/lokesh/color-thief/blob/master/examples/js/demo.js

const colorThief = new ColorThief();
const img = document.querySelector('img');

const googleDriveUrl = "https://drive.google.com/uc?export=view&id="
img.crossOrigin = 'Anonymous';
img.src = googleDriveUrl + '1XIF34Zzv_vN3HA-mmtCYWCIy7jhWRVop'

if (img.complete) {
  colorThief.getColor(img);
} else {
  image.addEventListener('load', function() {
    colorThief.getColor(img);
  });
}


function ColorPalette(props) {
}