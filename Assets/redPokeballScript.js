﻿#pragma strict
var anim: Animator;
var animTY: Animator;
var textMesh: TextMesh;
var smoke:GameObject;
var arenaLoc: Vector3;

function Start () {
	textMesh =GameObject.Find("Text").GetComponent.<TextMesh>();
	smoke=GameObject.Find("smokeHolder").Find("WhiteSmoke");

	arenaLoc = Vector3((Mathf.PingPong(0,6)+2996), 10, 2000);
}

function Update () {
}

function OnCollisionEnter(collision: Collision) {
	
	//Debug.Log("collide with: "+collision.gameObject.name);
//	if (collision.gameObject.tag=='spider'){
//		smoke.transform.position=gameObject.transform.position;
//		anim=collision.gameObject.GetComponent.<Animator>();
//		Debug.Log('spider hit! '+anim);
//		anim.SetBool("spiderIdle",false);
//		anim.SetBool("spiderAttack",false);
//		anim.SetBool("spiderRun",false);
//		anim.SetBool("spiderDie",true);
//		//Debug.Log('spider idle: '+anim.GetBool("spiderIdle"));
//		//Debug.Log('spider attack: '+anim.GetBool("spiderAttack"));
//		//Debug.Log('spider die: '+anim.GetBool("spiderDie"));
//		StartCoroutine(writeStatus('You killed the demon spider!',collision.gameObject,gameObject,3));
//	}
//	//else if (collision.gameObject.name=='Ty'){
//	//	animTY.SetBool("dodge",true);
//	//}
	if(collision.gameObject.tag=='pokemon'){
		smoke.active=true;
		smoke.transform.position=gameObject.transform.position;
		//GameObject.Find("smokeHolder").Find("WhiteSmoke").active=true;
		//Debug.Log('captured '+ collision.gameObject.name);
		StartCoroutine (writeStatus('Wow! You captured '+collision.gameObject.name,collision.gameObject,gameObject,smoke,3));
	}
}

function writeStatus(content,pokemon:GameObject,pokeball:GameObject,smoke:GameObject,destroyTime){
	yield WaitForSeconds(destroyTime);
	textMesh.text = content;
	smoke.active=false;
	pokemon.transform.position = arenaLoc;
	Destroy(pokeball);

	}
