import Image from 'next/image';
import SectionTitle from './SectionTitle';

const Biography = ({ integrantes }) => {
    console.log(integrantes)
    // integrantes && console.log(integrantes)

    const _width = 250;
    const _height = 250;

    // const isOdd = (number) => {
    //     return number % 2 === 1;
    // }
    // const getDirection = (index) => {
    //     return 'flip-left';
    //     /*switch (index) {
    //         case 0:
    //             return 'right';
    //             break;
    //         case 1:
    //             return 'up-right'
    //             break;
    //         case 2:
    //             return 'up';
    //             break;
    //         case 3:
    //             return 'up-left'
    //             break;
    //         case 4:
    //             return 'left';
    //             break;
    //         default:
    //             break;
    //     }*/
    // }
    return (
        <section >
            <SectionTitle id="biography" title="Biografía" />
            <div className="biography-photos">
                {integrantes && integrantes.length > 0 && (
                    integrantes.map((loba, index) => (
                        <div data-aos={/*`fade-${getDirection(index)}`*/'flip-right'}
                            data-aos-offset="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine"
                            key={index}
                            className="biography-photo"
                            style={{ width: _width + 10, height: _height + 10 }}
                        >
                            <div className="image-container">
                                <div className="image-crop" style={{ width: _width, height: _height }}>
                                    <Image

                                        className="photo"
                                        src={loba.foto.url}
                                        alt={loba.foto.fileName}
                                        width={_width}
                                        height={_height}

                                    />
                                </div>
                            </div>
                        </div>
                    )

                    )

                )}</div>
        </section >
    );
}

export default Biography;


// export const getStaticProps = async () => {
//     const url = process.env.NEXT_PUBLIC_GRAPHCMS_URL;
//     const auth = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzU5OTgzNjUsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2Nrdms4YjlsdTY4bWMwMXowOXB1bjF1Z3kvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYjFiM2JkYTItOWJmYS00ZTk1LWJiNDUtZDk1NmIxMzU4OWNlIiwianRpIjoiY2t2a2Y2cGhkNjFndDAxeG45dWJiMmc0ZyJ9.Z-QeNCmQRayc_FB-PisGz-DyGLk03JILXqJptT2wit_NebltcLOUu40NIQ0qw4WQ0Zhx4_Y4xSBuTaRr69prbNsvcD41gCJdhauJwVBMhiFwm6hZWkSEY9GuPxQREvbOjYyB2JdPVnxNJ00PsQgtufQ9a78gogiHBCd66A1FtDBGwJ3ujG_sSnwxjyr6uZN3Mnsfr0MAOVGcrMPMpnDO6fvuDW-CEOHtVuHEL1vtgR_coyHvj4Jgrf5Q5LuM01o5f6wyVPuGbVSqAOf0qsbgloHOgLdWid3H7hPeILLYeqhcb6dAyFlu_j0GWvDt_QOt5wSQbkexVl6cAK7T10khMaPUuL5PdUPueU9ozbrl1njoZU7E_sOXq2GfMvSy5qHT_iBrJpiDc-zIOSWY2h-iUYjN2yACo9pxzgss7VtIS8Cxekxq-T2afB53OBGFY1KscaeDkJs6ZutHmMlFSRCnypKHOoDnP2frDK15g8ceM8up7yTp7LEe6w8Wshix7wLR6zybrJ679NwWSVJmyE2D0QRViuwm2Omplop9PlARHRJk4W-Nk0cbBK-KOj8utWR6ePATlZ0t_KLr7drRG8SrK2hk560Gz8Xe9ahnUhqCiWxoeTomkeuI1EUG8kQqgWfvMO6otUfH2fOuTwl-iq1w9y3-zP5kmXKLWlUcMEzb-64"

//     const client = new GraphQLClient(url, {
//         headers: {
//             "authorization": auth
//         }
//     })

//     const query = gql`
//                     query members {
//                         integrantes {
//                         id
//                         apellido
//                         apodo
//                         descripcion
//                         foto {
//                             id
//                             fileName
//                             handle
//                             url(transformation: { document: {output: {format: webp}}})
//                         }
//                         }
//                     }`

//     const data = await client.request(query)
//     console.log(data.integrantes);

//     return {
//         props: {
//             integrantes: data.integrantes
//         }
//     }

// }

// ====================================================================
//const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL)

// interface IMember {

//     id: String;
//     apellido: String;
//     apodo: String;
//     descripcion: String;
//     foto: {
//         id: String;
//         fileName: String;
//         handle: String;
//         url: String;
//     }
// }
/*
export const getStaticPaths = async () => {
    const query = gql`integrantes {
                   id
                   apellido
                   apodo
                   descripcion
                   foto {
                     id
                     fileName
                     handle
                     url(transformation: {image: {resize: {}}, document: {output: {format: webp}}})
                   }
                 }`;
    const data = await client.request(query);
    console.log(data);
    return {
        paths: [],
        fallback: "blocking"
    }
}*/
