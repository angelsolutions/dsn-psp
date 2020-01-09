$( ".js-moment" ).each(function( index ) {
  $(this).append(moment($(this).attr("data-date"), "DD/MM/YYYY").fromNow());
});

function downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = document.getElementById(elId).innerHTML;
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click();
}

var fileName =  'signature.html'; // You can use the .txt extension if you want

$('#downloadLink').click(function(){
    downloadInnerHtml(fileName, 'main','text/html');
});