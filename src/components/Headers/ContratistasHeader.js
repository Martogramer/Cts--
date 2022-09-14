import React from "react";
import { Button, Container } from "reactstrap";

function LandingPageHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/daniel-olahh.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>contratistas castellanos</h1>
            <h3>Contrata de forma rápida, elegí el producto y nosotros lo construimos.</h3>
            <br />
            <Button
              href="#contacto"
              className="btn-round mr-1 smooth-scroll"
              color="neutral"
              outline
              smooth-scroll
            >
              <i className="fa fa-play" />
              Contacto
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline
            href="/nosotros">
              Nosotros
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
