btntakepic.addEventListener('click', function(){
	fireUpTheCamera();
});
imageholder.addEventListener('click', function(){
	fireUpTheCamera();
});

btnsave.addEventListener('click', function(){
	Ti.API.info('Save image');

btncancel.addEventListener('click', function(){
		imageholder.image = 'tap.png';
});

// fire camera
function fireUpTheCamera() {
    Titanium.Media.showCamera({
        saveToPhotoGallery : true,
        allowEditing : false,
        autohide : false, //Important!
        mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
        success : function(event) {
 
            Ti.API.debug('Our type was: ' + event.mediaType);
            if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
 				imageholder.image = event.media;
 				
            } else {
                alert("got the wrong type back =" + event.mediaType);
            }
        },
        cancel : function() {
            // called when user cancels taking a picture
        },
        error : function(error) {
            // called when there's an error
            var a = Titanium.UI.createAlertDialog({
                title : 'Camera'
            });
            if (error.code == Titanium.Media.NO_CAMERA) {
                a.setMessage('Please run this test on device');
            } else {
                a.setMessage('Unexpected error: ' + error.code);
            }
            a.show();
        },
    });
}
