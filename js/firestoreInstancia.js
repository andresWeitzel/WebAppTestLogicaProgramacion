// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCk_EVVCr-z8LBupKHa5DchL6BYD3mbcLk",
    authDomain: "aplicacionwebeducativa.firebaseapp.com",
    projectId: "aplicacionwebeducativa",
});

var db = firebase.firestore();


function insertarDataTest() {

    db.collection("dataInformatica").add({
            test: "Inserción correcta",

        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}