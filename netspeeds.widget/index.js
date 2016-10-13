command: "sh ./netspeeds.widget/netspeeds.sh", 

refreshFrequency: 5000, 

render: function(output) {
	var data = output.split('#');
	return "<div class=\"netspeeds-widget\"><div class=\"speeds speeds-ethernet\"><h3>Ethernet:</h3>in: " + data[0] + " kb/sec<br>out: " + data[1] + "kb/sec<br>IP: " + data[4] + "</div><div class=\"speeds speeds-airport\"><h3>Airport:</h3>in: " + data[2] + " kb/sec<br>out: " + data[3] + " kb/sec<br>IP: " + data[5] + "</div></div>";
},

style: "\n\
	left: 10px;\n\
	bottom: 10px;\n\
	color: #fff;\n\
	font-size: 13px;\n\
	font-family: 'san francisco', 'lucida grande', helvetica, sans-serif;\n\
	\n\
	.netspeeds-widget \n\
		background-color: rgba(0, 0, 0, 0.5); \n\
		padding: 14px;\n\
		border-radius: 8px;\n\
		border: 1px solid #222;\n\
	\n\
	h3 \n\
		margin-top: 0px; \n\
		margin-bottom: 0; \n\
		font-size: 13px;\n\
	\n\
	.speeds \n\
		background-position: left center;\n\
		background-repeat: no-repeat;\n\
		padding-left: 60px;\n\
		display: inline-block;\n\
		min-width: 190px;\n\
		box-sizing: border-box;\n\
	\n\
	.speeds-ethernet \n\
		background-image: url(netspeeds.widget/ethernet.png);\n\
		padding-right: 20px;\n\
	\n\
	.speeds-airport \n\
		background-image: url(netspeeds.widget/wifi.png);\n\
"