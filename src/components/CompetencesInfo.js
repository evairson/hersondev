

const CompetencesInfo = ({ id, icon, title, groups }) => {
    return (
        <div className="panel panel--interactive skill_card" id={id}>
            <div className="skill_card__header">
                <div className="skill_card__icon">
                    <img src={`/ressources/icons/${icon}.png`} alt="" />
                </div>
                <h2>{title}</h2>
            </div>

            <div className="skill_card__groups">
                {groups.map((group) => (
                    <div className="skill_group" key={group.label}>
                        <span className="skill_group__label">{group.label}</span>
                        <div className="skill_pills">
                            {group.items.map((item) => (
                                <span className="skill_pill" key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompetencesInfo;
