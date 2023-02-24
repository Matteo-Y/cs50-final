import MenuSlide from "./MenuSlide";

export default function Menus() {
    return (
        <div id="menus">
            <h1 className="title">MENUS</h1>
            <div className="subtitle">
                <p className="subtitle">CHANGING WITH THE SEASONS</p>
            </div>
            <div id="menu-slide-container">
                <MenuSlide img={require("./../../res/menus/patty_menu.jpg")}/>
                <MenuSlide img={require("./../../res/menus/vday_menu.jpg")}/>
                <MenuSlide img={require("./../../res/menus/christmas_menu.jpg")}/>
                <MenuSlide img={require("./../../res/menus/ny_menu.jpg")}/>
                <MenuSlide img={require("./../../res/menus/game_menu.jpg")}/>
            </div>
        </div>
    );
}