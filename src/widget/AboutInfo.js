

const AboutInfo = ({icon, children}) => {
    return (
        <div className="about_info">
            <img src={`ressources/icons/${icon}.png`} alt="" className="about_icon"/>
            <div className="about_info_text_container">
            <div className="about_info_text">{children}</div>
            </div>
        </div>
    );
}

export default AboutInfo;