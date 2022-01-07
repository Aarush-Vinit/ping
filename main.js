var paddle2 = 10, paddle1=10;
var paddle1X = 10, paddle1Y = 110;
var paddle2X = 685, paddle2Y = 70;

var score1 = 0, score2 = 0;
var paddle1Y;

var playerscore = 0;

var pcscore = 0;
var ball = {
	x:350/2,
	y:480/2,
	r:20,
	dx:3,
	dy:3	
}

rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;

game_status = "";
function preload(){
	ball_touch_paddle = loadSound("sound.wav");
	missed = loadSound("coin.wav");
}

function setup(){
	var canvas =  createCanvas(700,600);
	canvas.parent('canvas');
	
	video = createCapture(VIDEO);
	video.size(700, 600);
	video.hide();
	
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	}
	
	function modelLoaded() {
	  console.log('PoseNet Is Initialized');
	}
	
	function gotPoses(results)
	{
	  if(results.length > 0)
	  {
	
		rightWristY = results[0].pose.rightWrist.y;
		rightWristX = results[0].pose.rightWrist.x;
		scoreRightWrist =  results[0].pose.keypoints[10].score;
		console.log(scoreRightWrist);
	  }
	}