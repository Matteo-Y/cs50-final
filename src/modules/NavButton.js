export default function NavButton(props) {
    function scrollToElement() {
        document.getElementById(props.elementId).scrollIntoView({behavior: 'smooth'});
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