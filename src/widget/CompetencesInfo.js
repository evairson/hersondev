

const CompetencesInfo = ({icon, children}) => {
    return (
        <div className="competences_info">
            <img src={`ressources/icons/${icon}.png`} alt="" className="competences_icon"/>
            <div className="competences_info_text_container">
                <div className="competences_info_text">{children}</div>
            </div>
        </div>
    );
}

export default CompetencesInfo;