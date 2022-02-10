// import SpotifyDisc from "./SpotifyDisc";
import SectionTitle from './SectionTitle';
import { useState } from 'react';
import Disc from "./Disc";

const Music = ({ discos }) => {

    const [selectedDisc, setSelectedDisc] = useState();

    return (
        <section>
            <SectionTitle id="music" title="Música" />
            <div className="disc-container">

                {discos && discos.map(
                    (disco, index) => (
                        disco && disco.portada && disco.portada.url && (
                            <div key={index} >

                                <Disc
                                    key={index}
                                    cover={disco.portada.url}
                                    description={disco.titulo}

                                />
                            </div>
                        )
                    )

                )
                }
            </div>
        </section >
    );
}

export default Music;