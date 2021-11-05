const SpotifyDisc = ({ code, key }) => {
    console.log(`https://open.spotify.com/embed/album/${code}`)
    return (
        <div className="spotify-disc-container" key={key}>

            <iframe
                src={`https://open.spotify.com/embed/album/${code}`}
                width="100%"
                height="380"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

        </div>
    );
}

export default SpotifyDisc;