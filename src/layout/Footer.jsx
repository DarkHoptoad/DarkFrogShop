function Footer () {

    return <footer className="page-footer grey darken-3 footer">
              <div className="footer-copyright">
                <div className="container">
                © {new Date().getFullYear()} Copyright by <span className="dark">Dark</span><span className="frog">Frog</span>
                <a className="grey-text text-lighten-4 right" href="#!"><txt className='link__txt'>Repo</txt></a>
                </div>
              </div>
            </footer>
    }
    
    export {Footer}