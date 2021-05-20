window.onload = function() {

    var firebaseConfig = {
        apiKey: "AIzaSyDciI0VF3KJ6hSy6CDVIZ4TemwsE5gWKOc",
        authDomain: "tstr-c9aa8.firebaseapp.com",
        databaseURL: "https://tstr-c9aa8-default-rtdb.firebaseio.com",
        projectId: "tstr-c9aa8",
        storageBucket: "tstr-c9aa8.appspot.com",
        messagingSenderId: "620871703795",
        appId: "1:620871703795:web:490f9b4ccd83c367b5ab86",
        measurementId: "G-63SM8SK8T4"
    };

    firebase.initializeApp(firebaseConfig);


    var elemObj = {
        aadhar: null,
        email: null,
        name: null,
        pan: null,
        password: null,
        pdf: null,
        phone: null,
        verified: null,
        phoneNo: null,
    };

    var elems = [];

    var ref = firebase.database().ref('Labs');

    ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            elemObj = childSnapshot.val();
            elemObj.phoneNo = childSnapshot.key;
            console.log(elemObj.phoneNo);
            elems.push(elemObj);
            AddItemViews(elemObj);
        });
        // var cont = initViews(elems);
        // document.getElementById('elements_container').appendChild(cont);
    });

    var mainContainer = document.getElementById('main_container');

    function AddItemViews(obj) {

        var mainCardElm = document.createElement('div');
        mainCardElm.className = 'card mb-3';
        mainCardElm.style = 'max-width: 100%; margin-top: 20px;';

        var rowElem = document.createElement('div');
        rowElem.className = 'row g-0';
        mainCardElm.appendChild(rowElem);


        var imgCol = document.createElement('div');
        imgCol.className = 'col-md-4';
        var img = document.createElement('img');
        img.style = 'width: 100%; height: 100%;';
        img.src = 'https://media.istockphoto.com/photos/bright-and-ultra-modern-high-tech-laboratory-full-of-advanced-picture-id949946968?k=6&m=949946968&s=612x612&w=0&h=YR9WCbbYqnWFouWTzgh07WUPW1diTDRbpqG32jRLgOg=';
        imgCol.appendChild(img);

        var bodyCol = document.createElement('div');
        bodyCol.className = 'col-md-8';
        var cardbody = document.createElement('div');
        cardbody.className = 'card-body';
        bodyCol.appendChild(cardbody);
        var labName = document.createElement('h5');
        labName.id = 'lab_name';
        labName.className = 'card-title';
        labName.innerHTML = 'Tokyo Lab'
        cardbody.appendChild(labName);

        /* AADHAR */
        var adrRow = document.createElement('div');
        adrRow.className = 'row g-0';
        var adrCol = document.createElement('div');
        adrCol.className = 'col-md-6';
        adrRow.appendChild(adrCol);
        var adrP = document.createElement('p');
        adrP.className = 'card-text';
        adrP.style = 'font-size: 0.9rem;';
        adrP.innerHTML = 'AadharCard'
        adrCol.appendChild(adrP);
        var adrCol2 = document.createElement('div');
        adrCol2.className = 'col-md-6';
        adrRow.appendChild(adrCol2);
        var adrP2 = document.createElement('p');
        adrP2.className = 'card-text';
        adrP2.innerHTML = elemObj.aadhar;
        adrCol2.appendChild(adrP2);
        /* AADHAR */

        /* PAN */
        var panRow = document.createElement('div');
        panRow.className = 'row g-0';
        var panCol = document.createElement('div');
        panCol.className = 'col-md-6';
        panRow.appendChild(panCol);
        var panP = document.createElement('p');
        panP.className = 'card-text';
        panP.style = 'font-size: 0.9rem;';
        panP.innerHTML = 'AadharCard'
        panCol.appendChild(panP);
        var panCol2 = document.createElement('div');
        panCol2.className = 'col-md-6';
        panRow.appendChild(panCol2);
        var panP2 = document.createElement('p');
        panP2.className = 'card-text';
        panP2.innerHTML = elemObj.pan;
        panCol2.appendChild(panP2);
        /* PAN */

        /* AADHAR */
        var adrRow = document.createElement('div');
        adrRow.className = 'row g-0';
        var adrCol = document.createElement('div');
        adrCol.className = 'col-md-6';
        adrRow.appendChild(adrCol);
        var adrP = document.createElement('p');
        adrP.className = 'card-text';
        adrP.style = 'font-size: 0.9rem;';
        adrP.innerHTML = 'AadharCard'
        adrCol.appendChild(adrP);
        var adrCol2 = document.createElement('div');
        adrCol2.className = 'col-md-6';
        adrRow.appendChild(adrCol2);
        var adrP2 = document.createElement('p');
        adrP2.className = 'card-text';
        adrP2.innerHTML = elemObj.aadhar;
        adrCol2.appendChild(adrP2);
        /* AADHAR */

        /* AADHAR */
        var adrRow = document.createElement('div');
        adrRow.className = 'row g-0';
        var adrCol = document.createElement('div');
        adrCol.className = 'col-md-6';
        adrRow.appendChild(adrCol);
        var adrP = document.createElement('p');
        adrP.className = 'card-text';
        adrP.style = 'font-size: 0.9rem;';
        adrP.innerHTML = 'AadharCard'
        adrCol.appendChild(adrP);
        var adrCol2 = document.createElement('div');
        adrCol2.className = 'col-md-6';
        adrRow.appendChild(adrCol2);
        var adrP2 = document.createElement('p');
        adrP2.className = 'card-text';
        adrP2.innerHTML = elemObj.aadhar;
        adrCol2.appendChild(adrP2);
        /* AADHAR */

        /* AADHAR */
        var adrRow = document.createElement('div');
        adrRow.className = 'row g-0';
        var adrCol = document.createElement('div');
        adrCol.className = 'col-md-6';
        adrRow.appendChild(adrCol);
        var adrP = document.createElement('p');
        adrP.className = 'card-text';
        adrP.style = 'font-size: 0.9rem;';
        adrP.innerHTML = 'AadharCard'
        adrCol.appendChild(adrP);
        var adrCol2 = document.createElement('div');
        adrCol2.className = 'col-md-6';
        adrRow.appendChild(adrCol2);
        var adrP2 = document.createElement('p');
        adrP2.className = 'card-text';
        adrP2.innerHTML = elemObj.aadhar;
        adrCol2.appendChild(adrP2);
        /* AADHAR */

        /* AADHAR */
        var adrRow = document.createElement('div');
        adrRow.className = 'row g-0';
        var adrCol = document.createElement('div');
        adrCol.className = 'col-md-6';
        adrRow.appendChild(adrCol);
        var adrP = document.createElement('p');
        adrP.className = 'card-text';
        adrP.style = 'font-size: 0.9rem;';
        adrP.innerHTML = 'AadharCard'
        adrCol.appendChild(adrP);
        var adrCol2 = document.createElement('div');
        adrCol2.className = 'col-md-6';
        adrRow.appendChild(adrCol2);
        var adrP2 = document.createElement('p');
        adrP2.className = 'card-text';
        adrP2.innerHTML = elemObj.aadhar;
        adrCol2.appendChild(adrP2);
        /* AADHAR */

        cardbody.appendChild(adrRow);
        rowElem.appendChild(imgCol);
        rowElem.appendChild(bodyCol);

        mainContainer.appendChild(mainCardElm);

    }

    // function initViews(elems) {
    //     console.log(elems[0].phoneNo);
    //     var container = document.createElement('div');
    //     container.id = "main";
    //     container.className = "container";

    //     for (var i = 0; i <= elems.length; i*3) {

    //         var row = document.createElement('div');
    //         row.className = "row";
    //         row.id = "row" + i;



    //         for (var j = 0; j < 16; j++) {
    //             var box = document.createElement('div');
    //             box.className = 'card';
    //             box.backgroundColor = "#AA0000";
    //             row.appendChild(box);
    //         }

    //         container.appendChild(row);
    //     }
    //     return container;
    // }



}