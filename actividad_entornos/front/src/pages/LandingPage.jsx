import { useState, useEffect } from 'react'; // Importa React para asegurarte de que useState esté definido
import '../css/landing.css'; // Importar el archivo CSS
import { NavLink } from 'react-router-dom';

export const LandingPage = () => {
    const [landingContent, setLandingContent] = useState([]);
    const [sectionAdvantages, setSectionAdvantages] = useState([]);
    const [footerContent, setFooterContent] = useState([]);
    const [commentsContent, setCommentsContent] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:3000/API/v1/json-data');
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const respuesta = await response.json();

            setLandingContent(respuesta.sections);
            setSectionAdvantages(respuesta.appAdvantages);
            setFooterContent(respuesta.footer);
            setCommentsContent(respuesta.comments);
            console.log(respuesta);
        } catch (err) {
            console.log(err, "error");
        }
    };

    return (
        <>
            <main>
                {landingContent.map(({
                    id,
                    appImage,
                    mockupImg,
                    iconImage,
                    color,
                    titulo,
                    contenido,
                    isImageRight,
                    imgAppStore,
                    isTextAndImagesInWhite,
                    isIconImageWhite,
                    isMockupAtTop,
                    isPMarginIn // Asumimos que isPMarginIn es parte del JSON
                }, index) => (
                    <div key={id} className="section" style={{ backgroundColor: color }}>
                        <div className={`flexSections ${isImageRight ? 'right' : 'left'}`}>
                            <div className="sectionContent">
                                {isImageRight ? (
                                    <>
                                        <div className="leftSection">
                                            <img
                                                className="mockupImg"
                                                style={{
                                                    marginBottom: isMockupAtTop ? '2rem' : '0',
                                                    marginTop: !isMockupAtTop ? '2rem' : '0',
                                                    top: isMockupAtTop ? '0' : 'auto',
                                                }}
                                                src={`http://localhost:3000/${mockupImg}`}
                                                alt="Mockup"
                                            />
                                        </div>
                                        <div className="rightSection">
                                            <div className="appImageContainer">
                                                {appImage && (
                                                    <img
                                                        src={`http://localhost:3000/${appImage}`}
                                                        alt="App"
                                                        className="roboto-regular"
                                                        style={{ maxWidth: '100%' }}
                                                    />
                                                )}
                                            </div>
                                            <div className={`textContent roboto-regular ${index === 0 ? 'no-padding' : ''}`}>
                                                {iconImage && (
                                                    <img
                                                        src={`http://localhost:3000/${iconImage}`}
                                                        alt="Icon"
                                                        className={isIconImageWhite ? 'iconWhite' : 'iconBlack'}
                                                        style={{ maxWidth: '100%' }}
                                                    />
                                                )}
                                                <h1 className={isTextAndImagesInWhite ? 'textWhite' : ''}>{titulo}</h1>
                                                <p className={`${isTextAndImagesInWhite ? 'textWhite' : ''} ${!isPMarginIn ? 'no-margin' : ''}`}>
                                                    {contenido}
                                                </p>
                                            </div>
                                            <div className="appStoreContainer">
                                                {imgAppStore && (
                                                    <img
                                                        src={`http://localhost:3000/${imgAppStore}`}
                                                        alt="App Store"
                                                        className="roboto-regular"
                                                        style={{ maxWidth: '100%' }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="rightSection">
                                            <div className="appImageContainer">
                                                {appImage && (
                                                    <img
                                                        src={`http://localhost:3000/${appImage}`}
                                                        alt="App"
                                                        className="roboto-regular"
                                                        style={{ maxWidth: '100%' }}
                                                    />
                                                )}
                                            </div>
                                            <div className={`textContent roboto-regular ${index === 0 ? 'no-padding' : ''}`}>
                                                {iconImage && (
                                                    <img
                                                        src={`http://localhost:3000/${iconImage}`}
                                                        alt="Icon"
                                                        className={isIconImageWhite ? 'iconWhite' : 'iconBlack'}
                                                        style={{ maxWidth: '100%' }}
                                                    />
                                                )}
                                                <h1 className={isTextAndImagesInWhite ? 'textWhite' : ''}>{titulo}</h1>
                                                <p className={`${isTextAndImagesInWhite ? 'textWhite' : ''} ${!isPMarginIn ? 'no-margin' : ''}`}>
                                                    {contenido}
                                                </p>
                                            </div>
                                            <div className="appStoreContainer">
                                                {imgAppStore && (
                                                    <img
                                                        src={`http://localhost:3000/${imgAppStore}`}
                                                        alt="App Store"
                                                        className="roboto-regular"
                                                        style={{ maxWidth: '100%' }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="leftSection">
                                            <img
                                                className="mockupImg"
                                                style={{
                                                    marginBottom: isMockupAtTop ? '2rem' : '0',
                                                    marginTop: !isMockupAtTop ? '2rem' : '0',
                                                    top: isMockupAtTop ? '0' : 'auto',
                                                }}
                                                src={`http://localhost:3000/${mockupImg}`}
                                                alt="Mockup"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                <section className="advantagesSection">
                    {sectionAdvantages.map(({
                        id,
                        advantagesImages,
                        content,
                        color,
                        isTextInWhite
                    }) => (
                        <div className="advantagesBlocks" key={id} style={{ backgroundColor: color }}>
                            <div className="advantageImg">
                                <img className="advantagesImgBlock" src={`http://localhost:3000/${advantagesImages}`} alt="" />
                            </div>

                            <strong className={`textAppAdvantages ${isTextInWhite ? "textWhite" : ""}`}>{content}</strong>

                        </div>
                    ))}
                </section>
                <h1 className='triageH1'>Praise for Triage 1</h1>
                <section className="commentSection">
                    {commentsContent.map(({
                        id,
                        imageComment,
                        comment,
                    }) => (
                        <div className="commentBlock" key={id}>
                            <p className="commentText">{comment}</p>
                            <div className="imgComments">
                                <img src={`http://localhost:3000/${imageComment}`} alt="" />
                            </div>
                        </div>
                    ))}
                </section>
                <footer>
    <div>
        <nav className="linksMenu">
            <NavLink to='/inbox'>FAQ</NavLink>
            <NavLink to='/inbox'>Privacy</NavLink>
            <NavLink to='/inbox'>Terms</NavLink>
            <NavLink to='/inbox'>Security</NavLink>
        </nav>
    </div>
    <div className="footerFlexRow">
        {/* Primer mapeo, alineado a flex-end */}
        {footerContent.slice(0, Math.ceil(footerContent.length / 2)).map(({ id, imageFooter }) => (
            <div className="footerFlex footerFlexEnd" key={id}>
                <div className="footerBlock">
                    <img src={`http://localhost:3000/${imageFooter}`} alt="" />
                </div>
            </div>
        ))}

        {/* Segundo mapeo, alineado a flex-start */}
        {footerContent.slice(Math.ceil(footerContent.length / 2)).map(({ id, imageFooter }) => (
            <div className="footerFlex footerFlexStart" key={id}>
                <div className="footerBlock">
                    <img src={`http://localhost:3000/${imageFooter}`} alt="" />
                </div>
            </div>
        ))}
    </div>
</footer>

            </main>
        </>
    );
};
