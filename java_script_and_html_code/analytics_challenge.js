var organization = document.querySelector("#organization"); // drop down menu (organizations)
var radio = document.querySelector("#radio"); // radio buttons (location)
var Go = document.querySelector("#Go"); // button to change picture
var next_org = document.querySelector("#next_org");
var next_loc = document.querySelector("#next_loc");
var picture = document.querySelector("#picture"); // picture location in HTML

var print_org = document.querySelector("#print_org");
var average_commute = document.querySelector("#avg_commute");
var std_commute = document.querySelector("#std_commute");
var max_commute = document.querySelector("#max_commute");
var min_commute = document.querySelector("#min_commute");

var graph = document.querySelector("#graph")



// sets default radio button as selected
document.getElementById('location 1').checked = true;



var local = 1; // indicates location

// These functions call the handler when an object is clicked

radio.addEventListener("click", radioHandler, false);
organization.addEventListener("click", organizationHandler, false);
Go.addEventListener("click", GoHandler, false);
next_org.addEventListener("click", next_orgHandler, false);
next_loc.addEventListener("click", next_locHandler, false);


function radioHandler()
{
	console.log("radioHandler:");
	if (document.getElementById('location 1').checked){
	console.log("location 1 selected");
	console.log(document.getElementById('location 1').checked);
	local = 1;
	}
	if (document.getElementById('location 2').checked){
	console.log("location 2 selected");
	local = 2;
	}
	if (document.getElementById('location 3').checked){
	console.log("location 3 selected");
	local = 3;
	}
	if (document.getElementById('location 4').checked){
	console.log("location 4 selected");
	local = 4;
	}
} //end radioHandler


function organizationHandler()
{
	console.log("organizationHandler");
	console.log(document.getElementById('organization').value);

} //end organizationHandler

function ChangePicture(org, loc){
console.log("ChangePicture:");
console.log(org);
console.log(loc);

if(org == "ALL"){
print_org.innerHTML = "All"
}

if(org == "A"){
print_org.innerHTML = "A"
}

if(org == "B"){
print_org.innerHTML = "B"
}

if(org == "C"){
print_org.innerHTML = "C"
}

if(org == "D"){
print_org.innerHTML = "D"
}

if(org == "E"){
print_org.innerHTML = "E"
}

if(org == "F"){
print_org.innerHTML = "F"
}

if(org == "G"){
print_org.innerHTML = "G"
}

if(org == "H"){
print_org.innerHTML = "H"
}

if(org == "I"){
print_org.innerHTML = "I"
}

if(org == "J"){
print_org.innerHTML = "J"
}

if(org == "K"){
print_org.innerHTML = "K"
}

if(org == "L"){
print_org.innerHTML = "L"
}

if(loc == 1){
graph.innerHTML = "<img src=images/kenilworth_graph.png>"
}

if(loc == 2){
graph.innerHTML = "<img src=images/westpoint_graph.png>"
}

if(loc == 3){
graph.innerHTML = "<img src=images/whitehouse_graph.png>"
}

if(loc == 4){
graph.innerHTML = "<img src=images/bridgewater_graph.png>"
}

///////////////
//
//  Location 1 (kenilworth)
//
///////////////

if ((org == "ALL") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/kenilworth_all.png>";	
	average_commute.innerHTML = "40.5"
	std_commute.innerHTML = "8.5"
	max_commute.innerHTML = "50.5"
	min_commute.innerHTML = "21.6"
}

if ((org == "A") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/A.png>";
	average_commute.innerHTML = "46.4"
	std_commute.innerHTML = "22.4"
	max_commute.innerHTML = "94.0"
	min_commute.innerHTML = "11.5"	
}

if ((org == "B") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/B.png>";
	average_commute.innerHTML = "47.2"
	std_commute.innerHTML = "21.8"
	max_commute.innerHTML = "98.1"
	min_commute.innerHTML = "10.0"		
}

if ((org == "C") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/C.png>";
	average_commute.innerHTML = "42.9"
	std_commute.innerHTML = "22.8"
	max_commute.innerHTML = "95.9"
	min_commute.innerHTML = "10.0"	
}

if ((org == "D") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/D.png>";
	average_commute.innerHTML = "45.9"
	std_commute.innerHTML = "24.6"
	max_commute.innerHTML = "98.1"
	min_commute.innerHTML = "0.00018"	
}

if ((org == "E") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/E.png>";
	average_commute.innerHTML = "41.0"
	std_commute.innerHTML = "19.7"
	max_commute.innerHTML = "95.6"
	min_commute.innerHTML = "0.00018"	
}

if ((org == "F") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/F.png>";
	average_commute.innerHTML = "46.3"
	std_commute.innerHTML = "23.9"
	max_commute.innerHTML = "98.1"
	min_commute.innerHTML = "1.8"	
}

if ((org == "G") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/G.png>";
	average_commute.innerHTML = "40.4"
	std_commute.innerHTML = "19.8"
	max_commute.innerHTML = "95.6"
	min_commute.innerHTML = "10.0"	
}

if ((org == "H") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/H.png>";
	average_commute.innerHTML = "43.1"
	std_commute.innerHTML = "21.4"
	max_commute.innerHTML = "98.0"
	min_commute.innerHTML = "1.8"	
}

if ((org == "I") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/I.png>";
	average_commute.innerHTML = "21.6"
	std_commute.innerHTML = "21.3"
	max_commute.innerHTML = "6.6"
	min_commute.innerHTML = "0.00018"	
}

if ((org == "J") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/J.png>";
	average_commute.innerHTML = "25.0"
	std_commute.innerHTML = "17.0"
	max_commute.innerHTML = "41.1"
	min_commute.innerHTML = "3.9"	
}

if ((org == "K") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/K.png>";
	average_commute.innerHTML = "50.5"
	std_commute.innerHTML = "24.3"
	max_commute.innerHTML = "94.1"
	min_commute.innerHTML = "25.8"	
}

if ((org == "L") && (loc == 1)){
	picture.innerHTML = "<img src=kenilworth/L.png>";
	average_commute.innerHTML = "35.5"
	std_commute.innerHTML = "10.5"
	max_commute.innerHTML = "33.4"
	min_commute.innerHTML = "21.9"	
}

///////////////
//
//  Location 2 (westpoint)
//
///////////////

if ((org == "ALL") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/westpoint_all.png>";
	average_commute.innerHTML = "70.1"
	std_commute.innerHTML = "7.1"
	max_commute.innerHTML = "87.3"
	min_commute.innerHTML = "60.2"		
}

if ((org == "A") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/A.png>";
	average_commute.innerHTML = "65.0"
	std_commute.innerHTML = "22.8"
	max_commute.innerHTML = "96.7"
	min_commute.innerHTML = "10.7"		
}

if ((org == "B") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/B.png>";
	average_commute.innerHTML = "66.3"
	std_commute.innerHTML = "22.9"
	max_commute.innerHTML = "99.7"
	min_commute.innerHTML = "100.0"			
}

if ((org == "C") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/C.png>";
	average_commute.innerHTML = "69.5"
	std_commute.innerHTML = "20.4"
	max_commute.innerHTML = "97.8"
	min_commute.innerHTML = "11.4"		
}

if ((org == "D") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/D.png>";
	average_commute.innerHTML = "65.0"
	std_commute.innerHTML = "65.1"
	max_commute.innerHTML = "99.7"
	min_commute.innerHTML = "10.7"		
}

if ((org == "E") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/E.png>";
	average_commute.innerHTML = "71.9"
	std_commute.innerHTML = "19.7"
	max_commute.innerHTML = "99.6"
	min_commute.innerHTML = "11.5"		
}

if ((org == "F") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/F.png>";
	average_commute.innerHTML = "62.7"
	std_commute.innerHTML = "24.8"
	max_commute.innerHTML = "99.6"
	min_commute.innerHTML = "10.0"		
}

if ((org == "G") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/G.png>";
	average_commute.innerHTML = "72.2"
	std_commute.innerHTML = "20.5"
	max_commute.innerHTML = "99.6"
	min_commute.innerHTML = "11.5"		
}

if ((org == "H") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/H.png>";
	average_commute.innerHTML = "69.9"
	std_commute.innerHTML = "21.4"
	max_commute.innerHTML = "98.7"
	min_commute.innerHTML = "100.0"		
}

if ((org == "I") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/I.png>";
	average_commute.innerHTML = "87.3"
	std_commute.innerHTML = "12.4"
	max_commute.innerHTML = "99.6"
	min_commute.innerHTML = "44.7"		
}

if ((org == "J") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/J.png>";
	average_commute.innerHTML = "35.5"
	std_commute.innerHTML = "11.5"
	max_commute.innerHTML = "86.4"
	min_commute.innerHTML = "48.2"		
}

if ((org == "K") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/K.png>";
	average_commute.innerHTML = "60.2"
	std_commute.innerHTML = "20.1"
	max_commute.innerHTML = "61.4"
	min_commute.innerHTML = "16.5"		
}

if ((org == "L") && (loc == 2)){
	picture.innerHTML = "<img src=westpoint/L.png>";
	average_commute.innerHTML = "72.0"
	std_commute.innerHTML = "9.0"
	max_commute.innerHTML = "62.4"
	min_commute.innerHTML = "51.4"		
}

///////////////
//
//  Location 3 (whitehouse)
//
///////////////

if ((org == "ALL") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/whitehouse_all.png>";
	average_commute.innerHTML = "35.1"
	std_commute.innerHTML = "4.1"
	max_commute.innerHTML = "39.7"
	min_commute.innerHTML = "27.0"
}

if ((org == "A") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/A.png>";
	average_commute.innerHTML = "39.1"
	std_commute.innerHTML = "21.8"
	max_commute.innerHTML = "84.7"
	min_commute.innerHTML = "0.00018"	
}

if ((org == "B") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/B.png>";
	average_commute.innerHTML = "37.7"
	std_commute.innerHTML = "19.2"
	max_commute.innerHTML = "92.7"
	min_commute.innerHTML = "0.00018"		
}

if ((org == "C") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/C.png>";
	average_commute.innerHTML = "34.2"
	std_commute.innerHTML = "17.5"
	max_commute.innerHTML = "9.8"
	min_commute.innerHTML = "0.00018"	
}

if ((org == "D") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/D.png>";
	average_commute.innerHTML = "39.7"
	std_commute.innerHTML = "20.5"
	max_commute.innerHTML = "95.2"
	min_commute.innerHTML = "0.00018"	
}

if ((org == "E") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/E.png>";
	average_commute.innerHTML = "34.7"
	std_commute.innerHTML = "16.7"
	max_commute.innerHTML = "95.2"
	min_commute.innerHTML = "0.00018  "	
}

if ((org == "F") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/F.png>";
	average_commute.innerHTML = "37.9"
	std_commute.innerHTML = "21.2"
	max_commute.innerHTML = "95.2"
	min_commute.innerHTML = "0.00018"	
}

if ((org == "G") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/G.png>";
	average_commute.innerHTML = "36.8"
	std_commute.innerHTML = "19.6"
	max_commute.innerHTML = "91.1"
	min_commute.innerHTML = "0.00018"	
}

if ((org == "H") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/H.png>";
	average_commute.innerHTML = "37.0"
	std_commute.innerHTML = "19.9"
	max_commute.innerHTML = "9.8"
	min_commute.innerHTML = "0.00018  "	
}

if ((org == "I") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/I.png>";
	average_commute.innerHTML = "38.5"
	std_commute.innerHTML = "14.3"
	max_commute.innerHTML = "8.8"
	min_commute.innerHTML = "0.00018"	
}

if ((org == "J") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/J.png>";
	average_commute.innerHTML = "27.0"
	std_commute.innerHTML = "10.0"
	max_commute.innerHTML = "27.6"
	min_commute.innerHTML = "11.2"	
}

if ((org == "K") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/K.png>";
	average_commute.innerHTML = "29.0"
	std_commute.innerHTML = "31.1"
	max_commute.innerHTML = "61.5"
	min_commute.innerHTML = "0.00018"	
}

if ((org == "L") && (loc == 3)){
	picture.innerHTML = "<img src=whitehouse/L.png>";
	average_commute.innerHTML = "29.5"
	std_commute.innerHTML = "5.5"
	max_commute.innerHTML = "20.4"
	min_commute.innerHTML = "19.1"	
}


///////////////
//
//  Location 4 (bridgewater)
//
///////////////

if ((org == "ALL") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/bridgewater_all.png>";
	average_commute.innerHTML = "34.1"
	std_commute.innerHTML = "4.4"
	max_commute.innerHTML = "39.2"
	min_commute.innerHTML = "24.0"		
}

if ((org == "A") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/A.png>";
	average_commute.innerHTML = "38.5"
	std_commute.innerHTML = "22.0"
	max_commute.innerHTML = "90.5"
	min_commute.innerHTML = "10.1"		
}

if ((org == "B") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/B.png>";
	average_commute.innerHTML = "37.3"
	std_commute.innerHTML = "20.2"
	max_commute.innerHTML = "9.9"
	min_commute.innerHTML = "0.00018"			
}

if ((org == "C") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/C.png>";
	average_commute.innerHTML = "34.1"
	std_commute.innerHTML = "18.4"
	max_commute.innerHTML = "9.9"
	min_commute.innerHTML = "0.00018"		
}

if ((org == "D") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/D.png>";
	average_commute.innerHTML = "39.2"
	std_commute.innerHTML = "21.6"
	max_commute.innerHTML = "97.3"
	min_commute.innerHTML = "0.00018"		
}

if ((org == "E") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/E.png>";
	average_commute.innerHTML = "33.4"
	std_commute.innerHTML = "16.4"
	max_commute.innerHTML = "92.2"
	min_commute.innerHTML = "0.00018"		
}

if ((org == "F") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/F.png>";
	average_commute.innerHTML = "38.0"
	std_commute.innerHTML = "22.3"
	max_commute.innerHTML = "9.9"
	min_commute.innerHTML = "0.00018"		
}

if ((org == "G") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/G.png>";
	average_commute.innerHTML = "35.3"
	std_commute.innerHTML = "19.2"
	max_commute.innerHTML = "92.2"
	min_commute.innerHTML = "0.00018"		
}

if ((org == "H") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/H.png>";
	average_commute.innerHTML = "36.2"
	std_commute.innerHTML = "18.7"
	max_commute.innerHTML = "96.2"
	min_commute.innerHTML = "0.00018"		
}

if ((org == "I") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/I.png>";
	average_commute.innerHTML = "33.5"
	std_commute.innerHTML = "11.4"
	max_commute.innerHTML = "8.4"
	min_commute.innerHTML = "10.1"		
}

if ((org == "J") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/J.png>";
	average_commute.innerHTML = "27.0"
	std_commute.innerHTML = "4.0"
	max_commute.innerHTML = "20.0"
	min_commute.innerHTML = "18.2"		
}

if ((org == "K") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/K.png>";
	average_commute.innerHTML = "33.2"
	std_commute.innerHTML = "31.0"
	max_commute.innerHTML = "67.1"
	min_commute.innerHTML = "10.1"		
}

if ((org == "L") && (loc == 4)){
	picture.innerHTML = "<img src=bridgewater/L.png>";
	average_commute.innerHTML = "24.0"
	std_commute.innerHTML = "6.0"
	max_commute.innerHTML = "17.3"
	min_commute.innerHTML = "14.0"		
}

}// end ChangePicture()

function GoHandler()
{

	ChangePicture(document.getElementById('organization').value, local);

} //end GoHandler

function next_orgHandler(){
console.log("next_org");
current_org = document.getElementById('organization').value;

if(current_org === "ALL"){
document.getElementById('organization').value = "A";
}

if(current_org === "A"){
document.getElementById('organization').value = "B";
}

if(current_org === "B"){
document.getElementById('organization').value = "C";
}

if(current_org === "C"){
document.getElementById('organization').value = "D";
}

if(current_org === "D"){
document.getElementById('organization').value = "E";
}

if(current_org === "E"){
document.getElementById('organization').value = "F";
}

if(current_org === "F"){
document.getElementById('organization').value = "G";
}

if(current_org === "G"){
document.getElementById('organization').value = "H";
}

if(current_org === "H"){
document.getElementById('organization').value = "I";
}

if(current_org === "I"){
document.getElementById('organization').value = "J";
}

if(current_org === "J"){
document.getElementById('organization').value = "K";
}

if(current_org === "K"){
document.getElementById('organization').value = "L";
}

if(current_org === "L"){
document.getElementById('organization').value = "ALL";
}

if(current_org === "ALL"){
document.getElementById('organization').value = "A";
}

ChangePicture(document.getElementById('organization').value, local);
}// end next_orgHandler

function update_radio(){
if (local === 1){
document.getElementById('location 1').checked = true;
}
if (local === 2){
document.getElementById('location 2').checked = true;
}
if (local === 3){
document.getElementById('location 3').checked = true;
}
if (local === 4){
document.getElementById('location 4').checked = true;
}
} // end update_radio

function next_locHandler(){
console.log("next_loc");

local = local + 1;
if(local === 5){
local = 1;
}// end if

update_radio();

ChangePicture(document.getElementById('organization').value, local);

}// end next_locHandler