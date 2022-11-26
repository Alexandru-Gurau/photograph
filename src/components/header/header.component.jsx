import './header.styles.scss';
import Navigation from '../navigation/navigation.component';

const Header = ({ title, img }) => (
  <div className='header'>
    <div className='header__text'>
      <Navigation />
      <div className='header__container'>
        <h1 className='h h--big'>{title}</h1>
        <p className='p'>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <div
      className='header__picture'
      style={{ backgroundImage: `url("${img}")` }}
    ></div>
  </div>
);

export default Header;