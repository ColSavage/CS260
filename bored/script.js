function getDetails(json) {
    let result = "";
    result += "<div id='activity-block'>";
    result += "<h2 id=title><strong>Boredom Cured!</strong> </h2>";
    result += "<div id='json'>";
    result += "<h5 id=activity-type><em>" + json.activity + "</em></h5>";
    result += "<div id='details'>";
    result += getAccessScore(json.accessibility);
    result += "<p class=details><strong>Participants</strong> </br>" + json.participants + "</p>";
    result += getCost(json.price);
    result += "</div></div></div>"
    return result;
}


function getCost(cost) {
    var num = "";
    if(cost === 0) {
        num = "Free!";
    }
    else if(cost > 0 && cost < .4) {        1,2
        num = "$";
    }
    else if(cost > .3 && cost < .7) {       3,4
        num = "$$";
    }
    else if(cost > .6 && cost <= .9) {       5,6
        num = "$$$";
    }
    else if(cost > .9) {
        num = "$$$$";
    }
    return "<p class=details><strong>Cost</strong> </br>" + num + "</p>";
}

function getAccessScore(score) {
    var finalScore = ((score * 10) - 10) * -1;
    return "<p class=details> <strong>Accessibility</strong> </br> " + finalScore + "/10" + "</p>";

}

document.getElementById('buttonClick').addEventListener('click', function(event) {
    event.preventDefault();
    const value = event.target;
    if(value === '')
        return;
    let entry = value.innerHTML.toLocaleLowerCase().replace(/\s+/g, '');
    const url = "https://www.boredapi.com/api/activity?type=" + entry;
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        let result = "";
        result = getDetails(json);
        document.getElementById("activity").innerHTML = result;
    });
});