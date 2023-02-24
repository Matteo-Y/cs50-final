import PictureCard from './PictureCard';
import RedirectCard from './RedirectCard';

export default function Pictures() {
    return (
      <div id="pictures">
        <h1 className="title">PICTURES</h1>
        <div className="subtitle">
          <p className="subtitle">FRESH FROM</p>
          <img width="50px" height="50px" src={require('./../../res/ui/fb_icon.png')} alt="fb_icon"/>
        </div>
        <div className="content">
          <PictureCard img={require('./../../res/pics/muffins.jpg')} imgAlt=""/>
          <PictureCard img={require('./../../res/pics/donut.jpg')} imgAlt=""/>
          <PictureCard img={require('./../../res/pics/donuts_oldFashion.jpg')} imgAlt=""/>
          <PictureCard img={require('./../../res/pics/cookies.jpg')} imgAlt=""/>
          <RedirectCard img={require('./../../res/pics/storefront.jpg')} imgAlt="" linkName="See more on FB"/>
        </div>
      </div>
    );
}

