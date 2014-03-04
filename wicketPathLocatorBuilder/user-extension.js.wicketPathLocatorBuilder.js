// from https://issues.apache.org/jira/browse/WICKET-1830
// Install the Selenium IDE plugin for Firefox from http://seleniumhq.org/download/ .
//  Open the Selenium IDE, go to menu Options -> Options. In the Selenium Core extensions input field, paste the path to the earlier created folder "wicketPathLocatorBuilder". Restart firefox.
//  You can now record tests by clicking and/or right-clicking to insert additional commands. By default, the wicketpath attribute is used to generate an element locator.

LocatorBuilders.add('wicketpath', function(e) {
    this.log.debug("wicketpath: e=" + e);
    if (e.attributes && e.hasAttribute("wicketpath"))
        { this.log.info("found attribute " + e.getAttribute("wicketpath")); return "//" + this.xpathHtmlElement(e.nodeName.toLowerCase()) + "[@wicketpath=" + this.attributeValue(e.getAttribute("wicketpath")) + "]"; }
    return null;
});
LocatorBuilders.order.unshift(LocatorBuilders.order.pop());
