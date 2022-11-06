import '../../node_modules/normalize.css/normalize.css';
import img3 from '../assets/pexels-andrei-tanase-1271620.jpg';
import img1 from '../assets/pexels-christian-heitz-842711.jpg';
import img2 from '../assets/pexels-irina-iriser-1379636.jpg';
import img4 from '../assets/pexels-photo-1366919.jpeg';
import img6 from '../assets/pexels-photo-699466.jpeg';
import img5 from '../assets/pexels-piccinng-3052361.jpg';
import './test.scss';
const _ = require('lodash');

const addImg = () => {
  const wrapper = document.createElement('div');

  wrapper.classList.add('wrapper');

  const imgs = [img1, img2, img3, img4, img5, img6];

  const randImg = _.shuffle(imgs);

  _.each(randImg, (i, idx) => {
    const img = document.createElement('img');
    img.src = i;
    wrapper.append(img);
  });

  document.body.append(wrapper);
};

addImg();
