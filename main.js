//Removing all the js event hooks and scipt elements from the payload
//This is done to prevent the event handlers from being called when the payload is sent from the server to a user.
//this can be used when showing pre rendered HTML to a user from a server.
//just remember that any script hooks included will be nulled and replaced with a div with an id of #LOLNope (makes it easy to telemetry/security monitoring to catch sneaky xss attempts)
//Language: javascript/typescript
//its simple Regex, can be ported anywhere
//Author: SixeightW0lf
//GLHF
  function InitDOMDisposalUnit(htmlPayload){

    let reEv = /(?:<[^>]+\s)(on\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?.*(\/>|<\/|(.*|\s*)>)/igm;

    let dom = html.replace(reEv, '&lt;div #LOLNope&gt;&lt;/div&gt;');
    dom = dom.replace(/[(.|\s)]{0,5}<[(.|\s)]{0,5}script/gm,'<noscript');

    return dom;
  }