$(document).ready(function () {
    var database = firebase.database();

    console.log(database);

    database.ref().on("child_added", function (snapshot) {
        var data = snapshot.val();
        console.log('destination', data.Destination)

        //   *** tried following this from the lecture video last week. Mark had mention something about the key to the object due to data coming back as "undefined"***
        // for (key in data) {
        //     console.log(`This is the key => ${key} `);
        //     console.log(data[key].trainName);
        //     console.log(data[key].destination);
        //     console.log(data[key].firstTrain);
        //     console.log(data[key].frequency);

        //     var table = ("<td>");
        //     table.append(`<h5>Train: ${data[key].TrainName}</h5>`);
        //     table.append(`<h5>Destination: ${data[key].destination}</h5>`);
        //     table.append(`<h5>First Train Time: ${data[key].firstTrain}</h5>`);
        //     table.append(`<h5>Frequency: ${data[key].frequency}</h5>`);
        //     $(#btn).append(table);
        // }


        $("table").append(`<tr>
        <td>${data.Train}</td>
        <td>${data.Destination}</td>
        <td>${data.FirstTrain}</td>
        <td>${data.Frequency}</td>
        </tr>`);

    });

    // moments
    var currentTime = moment().format('MMMM Do YYYY, hh:mm:ss a');
    console.log(currentTime);
    $("#currentTime").text(currentTime);

    var tFrequency = 3;
    var firstTime = "03:30"
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var tRemainder = diffTime % tFrequency;
    $("#frequency").text(tRemainder);

    if (firstTime === diffTime) {

        $("#frequency").text();
    }


    // my submit button
    $("button").on("click", function () {
        var trainName = $("#trainName").val();
        var destination = $("#destination").val();
        var firstTrain = $('#firstTrain').val();
        var frequency = $("#frequency").val();

        // to clear and to be able to add
        $("#trainName").val("");
        $("#destination").val("");
        $("#firstTrain").val("");
        $("#frequency").val("");

        // this are working
        console.log(trainName, destination, firstTrain, frequency);


        database.ref().push({
            Train: trainName,
            Destination: destination,
            FirstTrain: firstTrain,
            Frequency: frequency




        });




        // Current Time

        // Difference between the times


        console.log("DIFFERENCE IN TIME: " + diffTime);

        // Time apart (remainder)
        var tRemainder = diffTime % tFrequency;
        console.log(tRemainder);

        // Minute Until Train
        var tMinutesTillTrain = tFrequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

        // Next Train
        // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
        // var nxTrain = moment().add(minToTrain, "minutes").format("HH:mm");
        // $("#trainTable>tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + nxTrain + "</td><td>" + frequency + "</td><td>" + minToTrain + "</td></tr>");





    });
});
