import NavButton from './NavButton';

export default function Navbar() {
    return (
        <div className="nav">
          <NavButton elementId="menus" name="MENUS"/>
          <NavButton elementId="about" name="ABOUT"/>
          <NavButton elementId="contacts" name="CONTACTS"/>
        </div>
    );
}