export default function PictureCard(props) {
    return (
        <div className="image-card">
            <img className="image" src={props.img} alt={props.imgAlt}/>
        </div>
    );
}

