$(document).ready(function () {
    var api;

    $.ajax({
        url: "http://localhost",
        dataType: "jsonp",
        type: "HEAD",
        timeout: 1000,
        statusCode: {
            200: function (response) {
                alert('status 200');
            },
            404: function (response) {
                alert('status  404 ');
            },
            0: function (response) {
                alert('status  4aaa04 ');
            }
        }
    });

    $.get('js/config.json', function (json, response, xhr) {
        if (response == 'success') {
            api = json.host_api;

            $.get(api, function (x, y) {
                console.log(x, y);
            });


        } else {
            console.log('erro config');
        }
    });
});