import './Project.css';

// Guess a call-to-action from the link when none is given.
const defaultLabel = (link) => {
    if (link.includes('github.com')) return 'View code';
    if (link.includes('youtu')) return 'Watch demo';
    if (link.includes('apps.apple.com')) return 'App Store';
    if (link.includes('colab.research')) return 'Open notebook';
    return 'Visit website';
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// '2026-09' -> 'Sep 2026', '2024' -> '2024'
const formatDate = (date) => {
    const [year, month] = date.split('-');
    return month ? `${months[Number(month) - 1]} ${year}` : year;
}

const Project = ({ title, img, logo, logoBg, phone, date, tags = [], description, note, link, linkLabel, style }) => {
    const Tag = link ? 'a' : 'div';
    const linkProps = link ? { href: link, target: '_blank', rel: 'noreferrer' } : {};

    return (
        <Tag className={`project ${link ? "project--link" : ""}`} style={style} {...linkProps}>
            <div
                className={`project__media ${phone ? 'project__media--phone' : ''} ${img ? '' : 'project__media--empty'}`}
                style={img ? { backgroundImage: `url(/ressources/projects/${img}.png)` } : { background: logoBg }}
            >
                {/* App icon: badge on top of a screenshot, or centered when there is no screenshot */}
                {logo && <img src={`/ressources/projects/${logo}.png`} alt={`${title} logo`} className={img ? 'project__logo' : 'project__logo project__logo--center'} />}
                {!img && !logo && <span>{title}</span>}
            </div>

            <div className="project__body">
                <div className="project__heading">
                    <h3>{title}</h3>
                    {date && <span className="project__year">{formatDate(date)}</span>}
                </div>

                <p className="project__description">{description}</p>

                {tags.length > 0 && (
                    <div className="skill_pills project__tags">
                        {tags.map((tag) => <span className="skill_pill" key={tag}>{tag}</span>)}
                    </div>
                )}

                <div className="project__footer">
                    {note && <span className="project__note">{note}</span>}
                    {link && <span className="project__cta">{linkLabel || defaultLabel(link)} <span aria-hidden="true">→</span></span>}
                </div>
            </div>
        </Tag>
    );
}

export default Project;
