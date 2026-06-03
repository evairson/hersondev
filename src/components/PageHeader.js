
const PageHeader = ({ title, subtitle }) => {
    return (
        <div className="page_header">
            <h1 className="page_header__title">{title}</h1>
            {subtitle && <p className="page_header__subtitle">{subtitle}</p>}
        </div>
    );
}

export default PageHeader;
