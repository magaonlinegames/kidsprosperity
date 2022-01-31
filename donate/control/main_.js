$('document').ready(
    function(){
        var firebaseConfig = {
            apiKey: "AIzaSyDaMSk9rTF2QPMXU8wQ9KHB6yvY_4kquh8",
            authDomain: "shippinggame-c680d.firebaseapp.com",
            databaseURL: "https://shippinggame-c680d.firebaseio.com",
            projectId: "shippinggame-c680d",
            storageBucket: "shippinggame-c680d.appspot.com",
            messagingSenderId: "183444386483",
            appId: "1:183444386483:web:ea9e1313cd1c8b3dc076c6"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        getDonationsRequest();
    }
);

function alertMe(){
    alert('working');
}



//ALL DATABASE FUNCTIONS

function getDonationsRequest(){
    firebase.firestore().collection('donations').get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            
            $(".page ul").append("<li><hr><p class='flow-text'>"+doc.data().name+"<br>"+doc.data().email+"</p><span class='crd-date'> " + doc.data().date + "</span><hr></li>");
           // $(".act li").appendTo("<div class='collapsible-header ch'><i class='material-icons grey-text'>arrow_back</i>Transfer to charset Ltd <span class='amount'>400.00</span> <span class='time grey-text'>28-Oct-20</span> </div> <div class='collapsible-body grey-text'><span>You have successfully transferred 400.00 via balance.</span></div>  ");
        });
    });
}