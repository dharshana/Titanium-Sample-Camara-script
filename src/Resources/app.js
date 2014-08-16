var win = Ti.UI.createWindow({
    backgroundColor : '#fff',
    layout: 'vertical', orientationModes:[ Titanium.UI.PORTRAIT ]
});

var date = new Date();

// Top View
topview = Ti.UI.createView({
	height: 50,	top: 0, backgroundColor: '#1a4f7e' ,
});
labelhead = Ti.UI.createLabel({
	text:'Live Project Update',
	font: {fontSize:24}, color: '#fff'
});
topview.add(labelhead);
// END of Top View

// Date view
dateview = Ti.UI.createView({
	height: 50,	top: 20,
});
labeldate = Ti.UI.createLabel({
	text:'date',
	color: '#000',
	left: '5%',font: {fontSize:20}
});
var nmonth = ((date.getMonth()+1) < 10) ? '0'+(date.getMonth()+1) : date.getMonth()+1;
var ndate = (date.getDate() < 10) ? '0'+date.getDate() : date.getDate();
var labeldateval = Ti.UI.createLabel({
	text:date.getFullYear()+'-'+nmonth+'-'+ndate,
	color: '#f00',
	left: '35%',font: {fontSize:20}
});
dateview.add(labeldate);
dateview.add(labeldateval);
// END OF date view

// Project view
var projectview = Ti.UI.createView({
	height: 100,	top: 20,
});
var projectlabel = Ti.UI.createLabel({
	text: 'Project Name',
	color: '#000',
	left: '5%',font: {fontSize:20}
});
var projectlist = Ti.UI.createPicker({
  top:10, left:'35%',  width: 300,
  selectionIndicator: true,
});
var data = [];
data[0]=Ti.UI.createPickerRow({title:'Wellawaya E49J'});
data[1]=Ti.UI.createPickerRow({title:'Colombo 6YU9'});
data[2]=Ti.UI.createPickerRow({title:'Monaragala D494'});
data[3]=Ti.UI.createPickerRow({title:'Kaluthara F93O'});
data[4]=Ti.UI.createPickerRow({title:'Gampaha T4UO'});
data[5]=Ti.UI.createPickerRow({title:'Aluthgama E59I'});
projectlist.add(data);

projectview.add(projectlabel);
projectview.add(projectlist);
// END OF project View

// tbn take a picture
var viewtakepic = Ti.UI.createView({
	height: 100,	top: 20,
});
var btntakepic = Ti.UI.createButton({
	title: 'Take a Picture',
	color: '#fff', height: 50,
	width: 250,
	backgroundColor: '#0d77bb'
});
viewtakepic.add(btntakepic);
// END OF take a picture

// Image View
var imageview = Ti.UI.createView({
	height: '40%',	top: 10,
});
var imageholder = Ti.UI.createImageView({
	backgroundColor: '#ffa9f4', image:'tap.png',
	height:'100%',
	width:'90%'
});
imageview.add(imageholder);
// END of image view

// Save and Cancel view
var saveview = Ti.UI.createView({
	height: 100,	top: 15,
});
var btnsave = Ti.UI.createButton({
	title: 'SEND', 
	width: '40%', height: 50,
	backgroundColor:'#2b8926', color:'#fff',
	right: '5%',
});
var btncancel = Ti.UI.createButton({
	title: 'CLEAR',
	width: '40%', height: 50,
	backgroundColor:'#d42727', color:'#fff',
	left: '5%',
});
saveview.add(btnsave);
saveview.add(btncancel);
// END OF save and Cancel View

win.add(topview);
win.add(dateview);
win.add(projectview);
win.add(viewtakepic);
win.add(imageview);
win.add(saveview);
win.open();

// all event lisnerz and e
Ti.include('functions.js');
