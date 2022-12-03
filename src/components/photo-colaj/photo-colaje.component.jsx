import './photo-colaje.styles.scss';

import colaj1 from '../../assets/images/colaj/colaj--1.jpg';
import colaj2 from '../../assets/images/colaj/colaj--2.jpg';
import colaj3 from '../../assets/images/colaj/colaj--3.jpg';
import colaj4 from '../../assets/images/colaj/colaj--4.jpg';
import colaj5 from '../../assets/images/colaj/colaj--5.jpg';
import colaj6 from '../../assets/images/colaj/colaj--6.jpg';
import colaj7 from '../../assets/images/colaj/colaj--7.jpg';
import colaj8 from '../../assets/images/colaj/colaj--8.jpg';

const PhotoColaje = () => (
  <section className='photo-colaje'>
    <div
      className='photo-colaje--1 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj1})` }}
    ></div>
    <div
      className='photo-colaje--2 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj2})` }}
    ></div>
    <div
      className='photo-colaje--3 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj3})` }}
    ></div>
    <div
      className='photo-colaje--4 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj4})` }}
    ></div>
    <div
      className='photo-colaje--5 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj5})` }}
    ></div>
    <div
      className='photo-colaje--6 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj6})` }}
    ></div>
    <div
      className='photo-colaje--7 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj7})` }}
    ></div>
    <div
      className='photo-colaje--8 photo-colaje__img'
      style={{ backgroundImage: `url(${colaj8})` }}
    ></div>
  </section>
);

export default PhotoColaje;