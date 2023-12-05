//
// Sets the main div and navigationbased on screen width
//
function sizeContent()
{
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var mainelement = document.getElementById('maincontent');
    var navelement = document.getElementById('navcontent');
    
    mainelement.width = width;
    navelement.width = width;

    // Add event listener to capture resize event
    window.addEventListener('resize', function(event) {
        mainelement.width = width;
        navelement.width = width;
    }, true);
}