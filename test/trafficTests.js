var expect = chai.expect;
var should = chai.should();

// Stop the automatic interval
clearInterval(trafficLightsInterval);


describe('changeTrafficLights', function () {
	it('Check if changes cycle array when new light goes green', function() {

		var cycleExpected = [
		["eastForward", "westForward"], 
		["northRightTurn", "southRightTurn"],
		["eastRightTurn", "westRightTurn"],
		["northForward", "southForward"]
		];
		currentTiming = 30000;

		changeTrafficLights();
		expect(cycle).to.eql(cycleExpected);
	});

	it('Check if style changes correctly', function(){
		expect(document.getElementsByClassName(cycle[0][0])[0].style.background).equal("green");
		expect(document.getElementsByClassName(cycle[0][1])[0].style.background).equal("green");
	
		expect(document.getElementsByClassName(cycle[1][0])[0].style.background).equal("");
		expect(document.getElementsByClassName(cycle[1][1])[0].style.background).equal("");

		expect(document.getElementsByClassName(cycle[2][0])[0].style.background).equal("");
		expect(document.getElementsByClassName(cycle[2][1])[0].style.background).equal("");

		expect(document.getElementsByClassName(cycle[3][0])[0].style.background).equal("red");
		expect(document.getElementsByClassName(cycle[3][1])[0].style.background).equal("red");
	});

	it('Check if yellow style changes correctly', function(){
		currentTiming = 27000;
		changeTrafficLights();

		expect(document.getElementsByClassName(cycle[0][0])[0].style.background).equal("yellow");
		expect(document.getElementsByClassName(cycle[0][1])[0].style.background).equal("yellow");
	});

	it('Simulation starts correctly (styles first light green)', function(){
		totalSimulatedTime = 3000;
		currentTiming = 0;
		changeTrafficLights()

		expect(document.getElementsByClassName(cycle[0][0])[0].style.background).equal("green");
		expect(document.getElementsByClassName(cycle[0][1])[0].style.background).equal("green");

	});

});


