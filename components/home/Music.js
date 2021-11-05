import SpotifyDisc from "./SpotifyDisc";

const Music = ({ discos }) => {
    console.log(discos)
    return (
        <section>
            <h2 id="music">Música</h2>
            <div className="disc-container">

                {discos && discos.map(
                    (disco, index) =>
                    (
                        < SpotifyDisc
                            key={index}
                            code={disco.codigo}
                        />
                    )
                )
                }


            </div>
        </section>
    );
}

export default Music;