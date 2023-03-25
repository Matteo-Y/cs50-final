import MenuSlide from "./MenuSlide";

export default function Menus() {
    const menus = [
        'spring_menu.jpg',
        'vday_menu.jpg',
        'patty_menu.jpg',
        'christmas_menu.jpg',
        'ny_menu.jpg'
    ];

    function getMenus() {
        let result = [];
        for(let i = 0; i < menus.length; i++) {
            result.push(<MenuSlide img={require("./../../res/menus/" + menus[i])} key={i}/>);
        }
        return result;
    }

    return (
        <div id="menus">
            <h1 className="title">MENUS</h1>
            <div className="subtitle">
                <p className="subtitle">CHANGING WITH THE SEASONS</p>
            </div>
            <div id="menu-slide-container">
                {getMenus()}
            </div>
        </div>
    );
}