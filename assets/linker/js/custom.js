$(document).ready(function() {

    $("#findme").click(function(e) {
        e.preventDefault();

        var idCriteria = $('#idCriteria').val() || 0;
        var sleepQuality = $('#sleepQuality').val() || undefined;
        var limitValue = $('#limit').val() || 0;
        var skipValue = $('#skip').val() || 0;
        var sortValue = $('#sort').val() || '';
        sortValue = 'id ' + sortValue;
        console.log(sortValue);

        var data = {

            where: {
                id: {
                    ">": idCriteria
                },

                sleep_quality: sleepQuality

            },

            sort: sortValue,

            limit: limitValue,

            skip: skipValue
        }

        console.log(sort);

        //$.get( '/sleep/find', data, function( some ) {

        $.get('/sleep/', data, function(some) {

            $('#found').html(JSON.stringify(some, undefined, 4));
        });
    });

});