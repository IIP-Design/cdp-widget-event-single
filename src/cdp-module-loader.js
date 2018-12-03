const loadModule = () => {
  const existingScript = document.getElementById( 'cdpEvent' );
  const { id, site } = existingScript.dataset;

  if ( existingScript ) {
    const css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', `${process.env.REACT_APP_CDP_MODULES_URL}cdp-module-event-single.min.css` );
    document.head.appendChild( css );

    const script = document.createElement( 'script' );
    script.src = `${process.env.REACT_APP_CDP_MODULES_URL}cdp-module-event-single.min.js`;
    script.defer = true;
    document.body.appendChild( script );

    script.onload = () => {
      if ( CDP ) { // eslint-disable-line no-undef
        CDP.widgets.Event.new( { // eslint-disable-line no-undef
          selector: '#cdp-event-embed',
          sites: site,
          ids: id
        } ).render();
      }
    };
  }
};

loadModule();
