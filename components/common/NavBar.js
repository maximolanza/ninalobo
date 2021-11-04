
import { useEffect, useState } from "react";
import HamburugerMenu from './HamburgerMenu/HamburgerMenu';
const NavBar = () => {

    const [navBackground, setNavBackground] = useState(false);
    const [hamburguer, setHamburuger] = useState(false);
    const [overlayIsOpen, setOverlayIsOpen] = useState(false);

    useEffect(() => {
        var last_known_scroll_position = 0;
        var ticking = false;
        window.addEventListener('scroll', function (e) {
            last_known_scroll_position = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    handleScroll(last_known_scroll_position);
                    ticking = false;
                });
            }
            ticking = true;
        });
    }, [])

    const handleScroll = (position) => {
        setNavBackground(position !== 0);
    }

    const scrollTo = (section, event) => {
        onSetOverlay(false)
        const yourHeight = 100;
        event.preventDefault();
        if (window) {
            var topOfElement = document.getElementById(section).offsetTop - yourHeight;
            window.scroll({ top: topOfElement, behavior: "smooth" });
        }
    }


    const onSetOverlay = (isOpen) => {
        setOverlayIsOpen(isOpen);
        setHamburuger(isOpen)
        //document.body.style.overflow = isOpen ? 'hidden' : 'visible';

    }
    const closeOverlay = () => {
        onSetOverlay(!overlayIsOpen)
        setHamburuger(!hamburguer)
    }

    return (
        <div className={`nav ${navBackground ? 'nav-bg' : 'nav-transparent'}`}>

            <a className={`logo ${navBackground ? 'fixed-logo' : 'centered-logo'}`}>NIÑA LOBO</a>

            <HamburugerMenu hamburguer={hamburguer} setHamburuger={onSetOverlay} />

            <div className={overlayIsOpen ? "overlayMenu overlayMenuOpen" : "menu"} >
                <a href="#" onClick={(e) => scrollTo('greetings', e)}> Inicio </a>
                <a href="#" onClick={(e) => scrollTo('biography', e)}> Biografía </a>
                <a href="#" onClick={(e) => scrollTo('music', e)}> Música </a>
                <a href="#" onClick={(e) => scrollTo('calendar', e)}> Calendario </a>
                <a href="#" onClick={(e) => scrollTo('multimedia', e)}> Multimedia </a>
                <a href="#" onClick={(e) => scrollTo('store', e)}> Tienda </a>
                <a href="#" onClick={(e) => scrollTo('contact', e)}> Contacto </a>
            </div>



        </div>);
}

export default NavBar;