import { scroller } from 'react-scroll';

export default function NavButton(props) {
    function scrollToElement() {
        scroller.scrollTo(props.name, {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    }
    return (
        <>
            <button className="nav-button" onClick={scrollToElement}>
                <p className="button-text">{props.name}</p>
                <img width="150px" src={require('./../res/ui/vine_line_1.png')} alt="border"/>
            </button>
        </> 
    );
}