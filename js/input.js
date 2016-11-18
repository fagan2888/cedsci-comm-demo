/**
 * Created by zwhitman on 11/17/16.
 */

var listData = {
    "marvel": [
    {"character": "Poverty", "realName": "Topic"},
    {"character": "Travel Time to Work", "realName": "Topic"},
    {"character": "Veteran Status<span style='display:none'>Veterans in DC</span>", "realName": "Topic"},

],
    "related": [
        {"character": "Period of Military Service <span style='display:none'>Veteran Status</span>", "realName": "Topic"},
        {"character": "Disability <span style='display:none'>Veteran Status</span>", "realName": "Topic"},
],
    "dc-comics": [
    {"character": "Veterinary Services", "realName": "NAICS - 54194"},
    {"character": "Veterinary Services", "realName": "NAICS - 541940"},
],
    "location": [
        {"character": "Vermont", "realName": "State"},
        {"character": "Cavetown, Maryland", "realName": "CDP"},
        {"character": "Grovetown city, Texas", "realName": "City"},
        {"character": "Veteran, Wyoming", "realName": "CPD"},
    ]
};

var options = {

    data: listData,

    categories: [
        {
        listLocation: "marvel",
        maxNumberOfElements: 4,
        header: "<br><br><br><b>Suggested</b>"
    },
        {
            listLocation: "related",
            maxNumberOfElements: 4,
            header: "<b>Related</b>"
        },
        {
        listLocation: "dc-comics",
        maxNumberOfElements: 4,
        header: "<b>Industry</b>"
    },
        {
            listLocation: "location",
            maxNumberOfElements: 4,
            header: "<b>Geography</b>"
        },
    ],

    getValue: function(element) {
        return element.character;
    },

    template: {
        type: "description",
        fields: {
            description: "realName"
        }
    },

    list: {
        maxNumberOfElements: 8,
        match: {
            enabled: true
        },
        sort: {
            enabled: true
        }
    },

    theme: "square"
};

// $("#example-heroes").easyAutocomplete(options);
$("#searchBox").easyAutocomplete(options);


var searchArray = ["Population of Rochester, NY","Number of grocery stores in Wyoming","Veteran Status in DC"], //list of query options
    captionLength = 0, // set caption length var to 0
    caption = '', // set initial caption to blank
    counter = 0; // set counter for loop

$(document).ready(function() {
    captionEl = $('#searchBox'); // id the input search box
//        captionEl = $('#example-heroes'); // id the input search box
    timeout(); // run the timout function
});

function timeout() {
    if($("#searchBox").is(':focus')){ // check to see if user has focused search box to enter query
        return
    }
    setTimeout(function () {
        testTypingEffect(counter)
        if(counter < searchArray.length - 1){ // check to ensure we haven't exceeded the length of our search input array
            counter+=1;
        }
        else{
            counter=0;
        }
        timeout(); // recursion as loop mechanism
    }, 3000); // set loop timing to 3 seconds
}

function testTypingEffect(inCount) {
    caption = searchArray[inCount]; // set caption
    type();
}

function type() {
    if($("#searchBox").is(':focus')){ // check if user has focused search box
        return
    }
    captionEl.val(caption.substr(0, captionLength++)); // iterate through caption length
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50); // recursion for loop
    } else {
        captionLength = 0; // reset to default val
        caption = ''; // reset to default val
    }
}
