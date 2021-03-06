<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="eng" lang="eng">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>GalacticMilk - Error 404</title>
	<link href='//fonts.googleapis.com/css?family=Bangers&amp;v2' rel='stylesheet' type='text/css' />	
	<link rel="stylesheet" type="text/css" href="https://galacticmilk.com/404/styles/reset.css" />
	<link rel="stylesheet" type="text/css" href="https://galacticmilk.com/404/styles/main.css" />	
	<script src="https://galacticmilk.com/404/scripts/jquery-1.6.2.js" type="text/javascript"></script>
	<script src="https://galacticmilk.com/404/scripts/jquery.spritely-0.5.js" type="text/javascript"></script>
	<script type="text/javascript">
		(function($) {
			$(document).ready(function() {			
				$('#astronaut')
					.sprite({fps: 30, no_of_frames: 1})
					.spRandom({top: 30, bottom: 200, left: 30, right: 200})
				$('#space').pan({fps: 40, speed: 3, dir: 'right', depth: 50});
			});
		})(jQuery);	
	</script>
</head>
<body>
<div id="container">
	<div id="stage" class="stage">
		<div id="space" class="stage"></div>
		<div id="astronaut" class="stage">
			<div id="text_1">Houston,<br />we have a<br />problem!</div>
			<div id="text_2">Error 404!</div>
		</div>
	</div>
</div>
</body>
</html>