export default function RedirectCard(props) {
    return (
        <div className="image-card">
            <a 
                className="redirect-overlay" 
                href="https://www.facebook.com/profile.php?id=100085895066844"
                target="_blank"
                rel="noreferrer noopener"
            >
                {props.linkName}
            </a>
            <img className="image" src={props.img} alt={props.imgAlt}/>
        </div>
    );
}
