﻿#pragma strict

var anim: Animator;
var posX:float;
var posY:float;
var posZ:float;
//var speed=20f;
var cameraRig: Transform;
var originalLoc: Vector3;
function Start () {
	cameraRig = GameObject.Find("[CameraRig]").transform;
	anim = GetComponent.<Animator>();

	var x = transform.position.x;
	var y = transform.position.y;
	var z = transform.position.z;
	// store original position
	originalLoc = Vector3(x,y,z);

	anim.SetBool("spiderIdle",true);
	transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));
	// set army to turn to user, only look at x, z axis, y axis not included
//	transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));

}

function FixedUpdate () {

	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;

	if (parseInt(posX)>=12)
	{
	transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));
	anim.SetBool("spiderIdle",false);
	anim.SetBool("spiderRun",true);
	doSwarm();
	}
	else
	{
	if (parseInt(transform.position.x)!=parseInt(originalLoc.x) && parseInt(transform.position.z)!=parseInt(originalLoc.z)){
	transform.LookAt(Vector3(originalLoc.x,transform.position.y,originalLoc.z));
	anim.SetBool("spiderIdle",false);
	anim.SetBool("spiderRun",true);
	doRetreat();
	}
	else{
	anim.SetBool("spiderIdle",true);
	anim.SetBool("spiderRun",false);

	}
	}
}

function doSwarm(){
	
	transform.position = Vector3.MoveTowards(transform.position, GameObject.Find("[CameraRig]").transform.position, 0.05);
}

function doRetreat(){
	
	// look back
	// move back to the original location and stop running
	transform.position = Vector3.MoveTowards(transform.position, originalLoc, 0.06);
}