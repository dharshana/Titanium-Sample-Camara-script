btntakepic.addEventListener('click', function(){
	//Ti.API.info('Hello this is from cam');
	fireUpTheCamera();
});
imageholder.addEventListener('click', function(){
	fireUpTheCamera();
});

btnsave.addEventListener('click', function(){
	Ti.API.info('Save image');
	
	var imageblob = imageholder.toBlob();
     console.log(imageblob) ;
     
    var lbl = Ti.UI.createLabel({
		text:'Uploading...',
		font: {fontSize:24}, color: '#000'
	});
	imageholder.opacity = 0.3;
	btnsave.opacity = 0.3;
	btncancel.opacity = 0.3;
	btntakepic.opacity = 0.3;
	imageview.add(lbl);
	
	btnsave.enabled = false;
	btncancel.enabled = false;
	btntakepic.enabled = false;
	
     var client = Ti.Network.createHTTPClient({
            onload : function(e){
            	lbl.text = 'Send';
            	Ti.API.info('Image SEND >>> '+client.responseText);
           		imageholder.opacity = 1.0;
				btnsave.opacity = 1.0;
				btncancel.opacity = 1.0;
				btntakepic.opacity = 1.0;
				
				imageholder.image = 'tap.png';
				
				btnsave.enabled = true;
				btncancel.enabled = true;
				btntakepic.enabled = true;
				lbl.text = '';
            },
            onerror : function(e){
            	alert('error in connection');
            	imageholder.opacity = 1.0;
				btnsave.opacity = 1.0;
				btncancel.opacity = 1.0;
				btntakepic.opacity = 1.0;
				lbl.text = '';
				imageholder.image = 'tap.png';
				
				btnsave.enabled = true;
				btncancel.enabled = true;
				btntakepic.enabled = true;
            },
            timeout : 60000
        });
        client.open('POST', '174.121.38.94/~lemzonl/rad/1.php');
        client.setRequestHeader("Content-type","multipart/form-data");
        //client.setRequestHeader("Content-type","multipart/form-data");
        client.setRequestHeader("Content-type","image/png");
        //client.send(imageblob);
        client.send({"name" : 'filename'});
	
	// var xhr = Ti.Network.createHTTPClient ();
	// var lbl = Ti.UI.createLabel({
		// text:'Uploading...',
		// font: {fontSize:24}, color: '#000'
	// });
	// imageholder.opacity = 0.3;
	// btnsave.opacity = 0.3;
	// btncancel.opacity = 0.3;
	// btntakepic.opacity = 0.3;
	// imageview.add(lbl);
// 	
	// btnsave.enabled = false;
	// btncancel.enabled = false;
	// btntakepic.enabled = false;
// 
	  // //xhr.open ( "POST", '173.254.36.205' );
	  // xhr.open ( "POST", '174.121.38.94/~lemzonl/rad/1.php' );
	  // //xhr.setTimeout ( 20000 );
	  // xhr.send ( 
	  // {         
	    // //"CommandType"    : "image",
	    // //"file"           : e.media,
	    // "name"           : 'filename'
	  // });
// 	
	  // xhr.onload = function (e)
	  // {
	    // Ti.API.info ("image sent to server");
	    // imageholder.opacity = 1.0;
		// btnsave.opacity = 1.0;
		// btncancel.opacity = 1.0;
		// btntakepic.opacity = 1.0;
		// lbl.text = '';
		// imageholder.image = 'tap.png';
// 		
		// btnsave.enabled = true;
		// btncancel.enabled = true;
		// btntakepic.enabled = true;
	  // }
});

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
                // var imageView = Ti.UI.createImageView({
                    // width : win.width,
                    // height : win.height,
                    // image : event.media
                // });
                //win.add(imageView);
 				imageholder.image = event.media;
 				 //Titanium.UI.orientation = Titanium.UI.PORTRAIT;
 				
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
