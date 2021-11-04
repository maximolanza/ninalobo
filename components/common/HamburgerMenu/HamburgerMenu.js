

const HamburugerMenu = ({ hamburguer, setHamburuger }) => {

    return (
        <>
            <button className="hamburguerButton" onClick={() => setHamburuger(!hamburguer)} id="hamburguer">
                <span className={hamburguer ? "hamburguerLine topHamb " : "hamburguerLine"}></span>
                <span className={hamburguer ? "hamburguerLine  middleHamb " : "hamburguerLine"}></span>
                <span className={hamburguer ? "hamburguerLine bottomHamb " : "hamburguerLine"}></span>
            </button >        </>
    );
}

export default HamburugerMenu;