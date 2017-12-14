$( document ).ready(function() {
// Started the Database with the CALAMAR information on it.
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAE-KdVGLbbKoHUcly6ywJ9r41PGKF75eA",
    authDomain: "calamar-project.firebaseapp.com",
    databaseURL: "https://calamar-project.firebaseio.com",
    projectId: "calamar-project",
    storageBucket: "calamar-project.appspot.com",
    messagingSenderId: "730635845128"
  };
  firebase.initializeApp(config);
// Variables for the JS program
    var database = firebase.database();
    var name = "";
    var destination = "";
    var firsttrain = 0;
    var frequency = 0;
    // Initializing the listener event.
    $("#add-user").on("click",function() {
      event.preventDefault();
      console.log("add-user")

      name = $("#basic-addon1").val().trim();
      destination = $("#basic-addon2").val().trim();
      firsttrain = $("#basic-addon3").val().trim();
      frequency = $("#basic-addon4").val().trim();
      // console.log(name);
      database.ref().push({
        name: name,
        frequency: frequency,
        destination: destination,
        firsttrain: firsttrain,

      });
    });

     database.ref().on("child_added", function(childSnapshot) {

            console.log(childSnapshot.val());
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().frequency);
      console.log(childSnapshot.val().destination);
      console.log(childSnapshot.val().firsttrain);

      $("#employeeTable").append(
        "<div class='text-center'><span id='name'> " +
        childSnapshot.val().name + "" +
        "<div class='role'><span id='role'> " +
        childSnapshot.val().destination + "" +
        "<div class='text-center'><span id='Destination'> " +
        childSnapshot.val().frequency + "" +
        "<div class='text-center'><span id='firsttrain'> " +
        childSnapshot.val().firsttrain
        );

    });
});
    // $("#div").append("div") + childSnapshot.val()

