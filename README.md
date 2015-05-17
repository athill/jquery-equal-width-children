# jquery-equal-width-children

A rather simple plugin that tries to make the children of a container equal widths


## Usage


	<style>
	.child {
		display: inline-block;
	}
	</style>
	...
	<body>
	<ul id="container">
		<li class="child">child 1
		<li class="child">child 2
		<li class="child">child 3
		<li class="child">child 4
	</ul>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	<script src="../src/jquery.equal-width-children.js"></script>		
	<script>
		$(function() {
			$("#container").equalWidthChildren();
		});
	</script>		
	</body>


	## Options

| Option        | Description                         | Type           | Default          |
|:--------------|:------------------------------------|:---------------|:-----------------|
| gutter        | space between children              | int            | 0                |
| fudge         | subtract from width if issues arise | int            | 0                |
| children      | children to space                   | jQuery array   | element children |