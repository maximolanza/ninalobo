import { Image } from 'next/image';


const Disc = ({ cover, description }) => {

    const _width = 250;
    const _height = 250;

    return (
        <div className="container-disc">
            <div className="disc-card">
                <div className="disc">
                </div>

                <img className="cover"
                    src={cover}
                    alt={description}
                    width={_width}
                    Head={_height}
                />

            </div>

        </div>
    );
}

export default Disc;