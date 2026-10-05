import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__title">Let’s build something together.</p>
          <a href="mailto:eva.herson.pro@gmail.com" className="footer__mail">eva.herson.pro@gmail.com</a>
        </div>
        <div className="footer__links">
          <a href="https://github.com/evairson" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.root-me.org/herson?lang=fr" target="_blank" rel="noreferrer">Root-Me</a>
          <a href="mailto:eva.herson.pro@gmail.com">Email</a>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Eva Herson</p>
    </footer>
  );
}

export default Footer;
