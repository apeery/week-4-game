$(document).ready(function(){
  var random=Math.floor((Math.random()*100) + 19);

  $('#random').text(random);

  var win= 0;
  var loss = 0;
  var totalscore= 0; 


  var red=Math.floor((Math.random()*12) + 1);
  var blue=Math.floor((Math.random()*12) + 1);
  var yellow=Math.floor((Math.random()*12) + 1);
  var green=Math.floor((Math.random()*12) + 1);

$('#win').text(win);
$('#loss').text(loss);

function reset(){
	random=Math.floor((Math.random()*100) +19);
	console.log(random)
	$('#random').text(random);
	var red=Math.floor((Math.random()*12) + 1);
  	var blue=Math.floor((Math.random()*12) + 1);
  	var yellow=Math.floor((Math.random()*12) + 1);
  	var green=Math.floor((Math.random()*12) + 1);
  	totalscore=0;
  	$('#total').text(totalscore);
	}

function winner(){
	win++;
	$('#win').text(win);
	reset();

}

function loser(){
	loss++;
	$('#loss').text(loss);
	reset();
}

	$('#red').on ('click', function(){
		totalscore = totalscore + red;
		console.log("New totalscore= " + totalscore);
		$('#total').text(totalscore);
			if (totalscore == random){
				winner();
			}
			else if (totalscore > random){
				loser();
			}
	})

	$('#blue').on ('click', function(){
		totalscore = totalscore + blue;
		console.log("New totalscore= " + totalscore);
		$('#total').text(totalscore);
			if (totalscore == random){
				winner();
			}
			else if (totalscore > random){
				loser();
			}
	})

	$('#yellow').on ('click', function(){
		totalscore = totalscore + yellow;
		console.log("New totalscore= " + totalscore);
		$('#total').text(totalscore);
			if (totalscore == random){
				winner();
			}
			else if (totalscore > random){
				loser();
			}
	})

	$('#green').on ('click', function(){
		totalscore = totalscore + green;
		console.log("New totalscore= " + totalscore);
		$('#total').text(totalscore);
			if (totalscore == random){
				winner();
			}
			else if (totalscore > random){
				loser();
			}
	})
})
