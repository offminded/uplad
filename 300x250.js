(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,79);


(lib.men = function() {
	this.initialize(img.men);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,192);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002659").s().p("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");
	this.shape.setTransform(131,39.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3, new cjs.Rectangle(3.4,3.3,255.3,72), null);


(lib.text2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002659").s().p("ALRB2QgRgTAAgnQABgZAFgQQAGgRAQgKQgLgJgHgPQgFgOgBgPQABgoAQgSQAQgSAdAAQAcAAARASQASASgBAoQAAAPgFAOQgHAPgMAJQASAKAEARQAGAQAAAZQAAAngQATQgQAVgigBQggABgRgVgALvAYQgEAMAAAVQAAAWAEALQAGAMANAAQAOAAAFgMQAFgLAAgWQAAgVgFgMQgFgMgOAAQgNAAgGAMgALzhcQgFAIAAAVQAAATAFAJQAFAIAKAAQALAAAFgIQAFgJAAgTQAAgVgFgIQgFgJgLABQgKgBgFAJgAGZB5QgPgRAAgnIAAiAQAAgnAPgRQAQgTAjABQAjgBAPATQAQARgBAnIAACAQABAngQARQgPARgjAAQgjAAgQgRgAG2hLIAACXQABAaAVAAQAWAAgBgaIAAiXQABgZgWAAQgVAAgBAZgAAuCFQgNgGgJgKQgIgLgFgOQgFgNgBgPIAsgHQACAVAHALQAIAKALAAQAMgBAHgGQAIgHAAgMQAAgNgHgKQgHgLgKgKIgXgTQgMgKgLgKQgKgMgHgOQgHgPAAgTQAAghATgRQASgRAjAAQAOAAALAEQALAFAJAJQAHAJAFAMQAGALABAPIgsAFIgDgOQgDgHgDgCQgEgEgEgCIgIgBQgLAAgGAHQgGAHAAAMQAAAMAHAJQAHAKAKAKQALAKAMAKQAMAJALALQALAMAGAPQAHAOAAATQAAAQgFANQgGANgJAJQgJAJgPAEQgNAFgQgBQgQAAgNgFgAszB5QgQgRAAgnIAAiAQAAgnAQgRQAPgTAjABQAOgBALAFQAKAEAIAIQAJAJADALQAFAKAAANIAAARIgpAAIAAgOQAAgZgTAAQgWAAABAZIAAA/IAIgHQAEgEAEgCQAEgDAFAAQAGgCAHAAQAJAAAJADQAKADAGAHQAHAHADAKQAEAKAAAPIAAAfQAAArgOAUQgQATgjAAQgjAAgPgRgAsMAKIgKAIIAAA6QgBAaAWAAQAVAAABgaIAAgtQAAgMgGgHQgFgGgJAAQgGAAgHAEgAJWCHIAAjVIglAAIAAgZIAegQQAOgJALgJIAYAAIAAEQgADuCHIAAgkIAmg4QASgaALgSQAKgVAGgQQAGgRAAgPQAAgQgGgIQgFgGgJAAQgMgBgFAIQgGAIAAANIAAASIgsAAIAAgNQAAgPAFgNQAEgNAJgJQAJgJANgGQAMgGAQABQAPAAAMAEQALAFAIAJQAJAIAEALQAEALABALQgBAQgCAQQgEAPgKATQgIASgSAbQgRAagbAmIBSAAIAAAmgAhFCHIAAkNIAuAAIAAENgAjBCHIAAhwIg3idIAuAAIAhBnIABAAIAehnIAwAAIg5CdIAABwgAkjCHIgIg8IgzAAIgIA8IgtAAIAxkNIA6AAIAyENgAlYAjIAmAAIgShzIgBAAgAnJCHIAAjRIgBAAIgqDRIgWAAIgqjRIgBAAIAADRIgoAAIAAkNIA8AAIAiCdIABAAIAgidIA9AAIAAENg");
	this.shape.setTransform(88.4,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002659").s().p("AhXDBIASgvIgRAAIAAgsIAsAAIAAAsIgaAvgAjkCEQgPgSAAgmIAAiBQAAgmAPgSQAPgRAkgBQAiABAQARQAPASAAAmIAACBQAAAmgPASQgQARgiABQgkgBgPgRgAjHhAIAACXQAAAaAWAAQAVAAAAgaIAAiXQAAgagVAAQgWAAAAAagAl/CEQgQgSAAgmIAAiBQAAgmAQgSQAPgRAkgBQAiABAQARQAPASAAAmIAACBQAAAmgPASQgQARgiABQgkgBgPgRgAlihAIAACXQAAAaAWAAQAVAAAAgaIAAiXQAAgagVAAQgWAAAAAagALSCSIghhwIgLABIgMAAIAABvIgvAAIAAkMIBBAAQAngBATATQAVASgBArQAAAQgDAMQgDALgEAIQgFAHgGAFQgFAFgGADIAnB6gAKagCIAPAAQAKAAAGgBQAHgCAEgFQAEgFACgIQACgIAAgMQAAgYgIgJQgIgIgTAAIgPAAgAIVCSIAAkMIAuAAIAAEMgAHFCSIAAjSIgBAAIgqDSIgWAAIgqjSIgBAAIAADSIgnAAIAAkMIA8AAIAhCcIABAAIAhicIA9AAIAAEMgACTCSIAAgsIBWi5IhMAAIAAgnIB7AAIAAAsIhWC3IBWAAIAAApgABCCSIAAkMIAuAAIAAEMgAnUCSIAAgsIAsAAIAAAsgAosCSIAAhBIhQAAIAAgiIBOipIAtAAIAACpIAYAAIAAAiIgYAAIAABBgApZAvIAuAAIAAhpIgBAAgArcCSIAAjUIgkAAIAAgaIAegQQAOgJALgKIAYAAIAAERgAnUAqIAAgrIAsAAIAAArgAIXiXIAAgoIApAAIAAAogABEiXIAAgoIApAAIAAAog");
	this.shape_1.setTransform(88.4,64.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(4.8,11.8,167.2,72.2), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#203961").s().p("AkrJgIAAjHIGEtCIlVAAIAAi2IIoAAIAADGIl/NDIF/AAIAAC2g");
	this.shape.setTransform(885.2,260.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#203961").s().p("AjqIWQhVhSAAifIAAuMIDRAAIAAOVQAACFBugBQBwABAAiFIAAuVIDQAAIAAOMQAACfhVBSQhUBTiXAAQiUAAhWhTg");
	this.shape_1.setTransform(809.8,261.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#203961").s().p("AB+JgIiTn4QgRAEghABIg6ABIAAHyIjRAAIAAy/IEmAAQCtAABaBSQBZBTAADBQAABNgMAyQgNA2gVAjQgWAkgZAUQgaAWgbAMICxIngAiBg9IBKAAQArgBAcgHQAegKASgVQATgWAIgkQAIgjAAg4QAAhrgjgnQgkgohTAAIhKAAg");
	this.shape_2.setTransform(731.4,260.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#203961").s().p("AiNJYQg8gXgogrQgogqgTg6QgTg3AAhCIAApxQAAhCATg4QAUg5AngqQAngpA9gaQA7gYBSAAQBUAAA6AYQA8AaAnApQAoAqATA5QAUA6AABAIAAJxQAABBgUA4QgTA6goAqQgoArg7AXQg6AZhUAAQhSAAg7gZgAhWmZQgZAhAABFIAAJnQAABGAZAgQAXAhA/AAQBAAAAXghQAYghAAhFIAApnQAAhFgYghQgXghhAAAQg/AAgXAhg");
	this.shape_3.setTransform(649.4,260.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#203961").s().p("AhoJgIAAn5Ij8rGIDUAAICSHPIADAAICMnPIDUAAIj9LGIAAH5g");
	this.shape_4.setTransform(573.9,260.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#203961").s().p("AjqIWQhVhSAAifIAAuMIDRAAIAAOVQAACFBugBQBvABAAiFIAAuVIDRAAIAAOMQAACfhVBSQhUBTiXAAQiVAAhVhTg");
	this.shape_5.setTransform(498.5,261.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#203961").s().p("Ah4MgQgogOgXgJIAdhVQAUALAhAIQAgAKAZAAQArAAAbgVQAcgTAAgdQAAgagPgNQgPgNgWgGQgVgEgZADQgYADgRAHIglgfIBmiKQhAgCg1gYQg5gbgoguQgogwgVg7QgXg9gDhGIDHgcQAGBcAiAuQAiAtAyAAQA2AAAhgcQAigcAAg3QAAg9gfgvQgdgsgyguQgpgng8gwQg5gsgug0Qgwg1gehBQgghBAAhYQAAiTBVhOQBThPCbABQA/gBAzAWQAzAXAkAnQAlApAWA0QAXA4AHA/IjHAVQgDglgLgbQgLgagQgQQgQgPgTgGQgTgIgQAAQgyAAgbAfQgbAgAAA5QAAA0AfAsQAfAsAvAsQAzAvAzApQA2ArAxA3QAuA1AhBDQAfBAAABSQAABMgZA6QgYA6grAoQgrAng9AUQgeAKgfAFIg+BaIASgCIASgBQAZABAdAJQAcAHAWAQQAWAPAOAYQANAYAAAgQAAAogSAgQgRAfgdAXQgdAWgmAMQglALgoAAQg7AAgtgPg");
	this.shape_6.setTransform(422.5,279.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#203961").s().p("AiOJYQg7gXgogrQgngqgTg6QgUg4AAhBIAApxQAAhAAUg6QATg5AngqQAngpA8gaQA8gYBSAAQBTAAA7AYQA8AaAoApQAnAqAUA5QATA7AAA/IAAJxQAABAgTA5QgTA5goArQgpArg7AXQg7AZhTAAQhSAAg8gZgAhXmZQgXAhAABFIAAJnQAABFAXAhQAYAhA/AAQBAAAAYghQAYggAAhGIAApnQAAhFgYghQgYghhAAAQg/AAgYAhg");
	this.shape_7.setTransform(347.5,260.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#203961").s().p("AB6JgIipo2IgDAAIhKCHIAAGvIjRAAIAAy/IDRAAIAAHBIADAAIDanBIDRAAIjiHFID+L6g");
	this.shape_8.setTransform(277.2,260.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EE3151").s().p("ACKJgIkJr3IgEAAIAAL3Ii8AAIAAy/IDCAAID9K3IADAAIAAq3IC9AAIAAS/g");
	this.shape_9.setTransform(1125.6,91.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EE3151").s().p("AhnL7IAAy/IDPAAIAAS/gAhapEIAAi2IC1AAIAAC2g");
	this.shape_10.setTransform(1064.1,76.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EE3151").s().p("AiGMgQgqgOgVgJIAdhVQAVALAgAJQAjAJAWAAQArAAAbgUQAcgUAAgdQAAgZgPgOQgPgNgVgFQgVgFgaADQgXADgSAHIgkgeIBmiMQhHgFg3gbQg0gagjgqQgigpgRg2QgRg2AAg9IAApyQAAhBATg4QATg6AogpQAogrA8gYQA7gYBSAAQBNAAA8AbQA7AbAlAtQAlAtAVA9QATA9AABDIAABaIjRAAIAAhfQAAhOgfgiQgegigoAAQg/AAgXAhQgZAgAABFIAAJoQAABGAZAgQAXAhA/AAQA5AAAWggQAWghAAg6IAAiSIDRAAIAACLQAAA7gRA3QgRA1ggApQgiAqgyAZQgxAbhEAGIg5BYIAigDQAaABAdAJQAbAIAWAPQAXAPANAYQAOAYAAAgQgBAogRAgQgSAggcAWQgdAWgmAMQgnALgmAAQg9AAgsgPg");
	this.shape_11.setTransform(1002.2,110.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EE3151").s().p("AhnL7IAAy/IDQAAIAAS/gAhapEIAAi2IC1AAIAAC2g");
	this.shape_12.setTransform(941.2,76.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EE3151").s().p("AB+JgIiTn3QgXADgaAAIg6ABIAAHzIjSAAIAAy/IEmAAQCuAABZBTQBZBSAADBQABBKgNA1QgMAzgWAlQgVAjgaAXQgbAWgaALICxIngAiAg+IBKAAQArAAAbgIQAdgIATgWQASgVAJglQAIgmAAg1QAAhrgjgoQgkgohSABIhKAAg");
	this.shape_13.setTransform(850.9,91.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EE3151").s().p("ACYJgIglkNIjkAAIgmENIjKAAIDgy/IEDAAIDgS/gAhTCcICnAAIhSoJIgDAAg");
	this.shape_14.setTransform(773.5,91.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EE3151").s().p("AkMJgIAAy/IDRAAIAAQJIFIAAIAAC2g");
	this.shape_15.setTransform(710.6,91.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EE3151").s().p("ACKJgIkJr3IgDAAIAAL3Ii9AAIAAy/IDCAAID9K3IADAAIAAq3IC9AAIAAS/g");
	this.shape_16.setTransform(636.6,91.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EE3151").s().p("ACXJgIglkNIjkAAIglENIjKAAIDgy/IEDAAIDgS/gAhTCcICnAAIhSoJIgDAAg");
	this.shape_17.setTransform(561.1,91.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EE3151").s().p("AhnJgIAAn6Ij9rFIDUAAICSHPIADAAICMnPIDUAAIj9LFIAAH6g");
	this.shape_18.setTransform(490.4,91.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE3151").s().p("ACXJgIglkNIjkAAIglENIjKAAIDgy/IEDAAIDgS/gAhTCcICnAAIhToJIgCAAg");
	this.shape_19.setTransform(419.6,91.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE3151").s().p("ADzJgIAAu1IgEAAIi8O1IhlAAIi8u1IgEAAIAAO1Ii1AAIAAy/IESAAICVLFIABAAICVrFIESAAIAAS/g");
	this.shape_20.setTransform(334.7,91.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE3151").s().p("ACYJgIgmkNIjkAAIglENIjKAAIDgy/IEDAAIDgS/gAhTCcICnAAIhSoJIgDAAg");
	this.shape_21.setTransform(250,91.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EE3151").s().p("Ah4MgQgogNgXgKIAdhVQATAKAiAKQAjAJAVAAQAsAAAbgUQAcgUAAgdQAAgZgPgOQgPgNgWgFQgWgFgYADQgXADgSAHIglgeIBmiLQhBgCg0gYQg6gbgngvQgogtgWg+QgWg8gDhFIDHgdQAHBdAhAtQAiAuAyAAQA2AAAhgdQAigcAAg2QAAg9gfgvQgfgugwgsQgzgwgygoQg5gtgugzQgvg0gghCQgfhCAAhXQAAiTBVhOQBThOCbAAQA/AAAzAWQAyAVAlAoQAkAoAXA2QAXA3AHA/IjHAVQgEgogLgYQgKgbgRgPQgQgPgSgHQgSgGgRAAQgyAAgbAfQgbAfAAA5QAAA1AfArQAgAsAuAsQAwAtA2ArQA6AvAtA0QAwA2AeBBQAgA/AABTQAABLgZA7QgYA6grAoQgrAog+ATQgdAKgfAFIg+BaIAkgDQAZABAdAJQAbAIAXAPQAVAPAOAYQAOAYAAAgQAAApgSAfQgSAggcAWQgcAWgnAMQgmALgnAAQg9AAgrgPg");
	this.shape_22.setTransform(178.7,110.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EE3151").s().p("AiNJZQg7gYgpgrQgogsgTg4QgTg4AAhAIAApzQAAhAATg4QATg5AogrQApgrA7gYQA7gYBSAAQBTAAA8AYQA7AYAoArQAnApATA7QAUA4AABAIAAJzQAABAgUA4QgTA7gnApQgoAqg7AZQg8AYhTAAQhSAAg7gYgAhXmZQgXAfAABHIAAJnQAABHAXAfQAYAhA/AAQBAAAAYghQAXgfAAhHIAApnQAAhHgXgfQgYghhAAAQg/AAgYAhg");
	this.shape_23.setTransform(103.8,91.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EE3151").s().p("AB6JgIipo2IgDAAIhLCHIAAGvIjQAAIAAy/IDQAAIAAHBIAEAAIDanBIDRAAIjiHFID+L6g");
	this.shape_24.setTransform(33.4,91.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0,0,1157.6,360.9), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,79), null);


(lib.button = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHQBWQgJgDgFgHQgGgGgDgIQgDgIAAgJIAAhZQAAgJADgJQADgIAGgGQAFgGAJgDQAIgEAMAAQAMAAAJAEQAIADAGAGQAGAGACAIQADAJAAAJIAABZQAAAJgDAIQgCAIgGAGQgGAHgIADQgJAEgMAAQgMAAgIgEgAHYg6QgEAFAAAKIAABXQAAAKAEAFQADAEAJAAQAJAAAEgEQADgFAAgKIAAhXQAAgKgDgFQgEgFgJAAQgJAAgDAFgAKEBXIAAgcIAdAAIAAAcgAInBXIAAiuIAeAAIAACUIAvAAIAAAagAFCBXIAAiTIgdAAIAAgbIBYAAIAAAbIgdAAIAACTgAD4BXIAAiuIAeAAIAACugACoBXIAAhIIgkhmIAeAAIAVBDIABAAIAUhDIAeAAIgkBmIAABIgABoBXIgFgnIghAAIgFAnIg2AAIgYhRIgLATIAAA+IgeAAIAAiuIAeAAIAABBIABAAIAehBIAeAAIggBCIAhBiIAeikIAlAAIAgCugABGAWIAZAAIgMhKIgBAAgAiXBXIgmhsIgBAAIAABsIgbAAIAAiuIAcAAIAlBjIAAAAIAAhjIAbAAIAACugAk9BXIAAiuIBQAAIAAAbIgyAAIAAAtIAnAAIAAAZIgnAAIAAAzIA2AAIAAAagAlsBXIAAiHIgBAAIgbCHIgOAAIgbiHIgBAAIAACHIgaAAIAAiuIAnAAIAWBmIAAAAIAWhmIAnAAIAACugAovBXIAAiuIBRAAIAAAbIgzAAIAAAtIAnAAIAAAZIgnAAIAAAzIA2AAIAAAagApjBXIAAhNIggAAIAABNIgeAAIAAiuIAeAAIAABIIAgAAIAAhIIAeAAIAACugAKJAkIgGh7IAfAAIgGB7g");
	this.shape.setTransform(150.8,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E40F3D").s().p("A3bEYIAAovMAu3AAAIAAIvg");
	this.shape_1.setTransform(150,28);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(0,0,300,56), null);


(lib.button_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buton
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(0,106.5,1,1,0,0,0,150,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:96.5},4,cjs.Ease.quadIn).wait(1).to({regY:28,y:109.1},0).wait(1).to({y:111.8},0).wait(1).to({y:114.1},0).wait(1).to({regY:18.5,y:106.5},0).to({y:101.5},4).to({y:106.5},7,cjs.Ease.get(1)).wait(49).to({y:96.5},4,cjs.Ease.quadIn).wait(1).to({regY:28,y:109.1},0).wait(1).to({y:111.8},0).wait(1).to({y:114.1},0).wait(1).to({regY:18.5,y:106.5},0).to({y:101.5},4).to({y:106.5},7,cjs.Ease.get(1)).wait(41).to({y:96.5},4,cjs.Ease.quadIn).wait(1).to({regY:28,y:109.1},0).wait(1).to({y:111.8},0).wait(1).to({y:114.1},0).wait(1).to({regY:18.5,y:106.5},0).to({y:101.5},4).to({y:106.5},7,cjs.Ease.get(1)).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,88,300,56);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_479 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(479).call(this.frame_479).wait(1));

	// text3
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(433.1,145.8,1,1,0,0,0,130.2,38.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(157).to({_off:false},0).to({x:150.1,alpha:1},7).to({_off:true},76).wait(157).to({_off:false,x:433.1,alpha:0},0).to({x:150.1,alpha:1},7).wait(76));

	// text2
	this.instance_1 = new lib.text2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(397.1,139.5,1,1,0,0,0,88,45.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({x:149.1,alpha:1},7).wait(53).to({x:-95.9},7).to({_off:true},76).wait(97).to({_off:false,x:397.1,alpha:0},0).to({x:149.1,alpha:1},7).wait(53).to({x:-95.9},7).wait(76));

	// text1
	this.instance_2 = new lib.text1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(439,141,0.226,0.226,0,0,0,578.8,180.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({x:150,alpha:1},7).wait(54).to({x:-139},7).to({_off:true},136).wait(36).to({_off:false,x:439,alpha:0},0).to({x:150,alpha:1},7).wait(54).to({x:-139},7).wait(136));

	// logo
	this.instance_3 = new lib.logo_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,39.5,1,1,0,0,0,150,39.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).to({alpha:1},4).to({_off:true},200).wait(36).to({_off:false,alpha:0},0).to({alpha:1},4).wait(200));

	// men
	this.instance_4 = new lib.men();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},36).wait(204).to({_off:false},0).to({_off:true},36).wait(204));

	// Layer_1
	this.instance_5 = new lib.button_anim();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,241,1,1,0,0,0,0,116);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(480));

	// bg
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(480));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,269);
// library properties:
lib.properties = {
	id: '31E58442F1C9C444B2F395B03ABF75E4',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/logo.jpg", id:"logo"},
		{src:"images/men.jpg", id:"men"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['31E58442F1C9C444B2F395B03ABF75E4'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;