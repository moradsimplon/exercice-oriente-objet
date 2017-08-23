


function customers() {
  this.affichage = function () {
    $('#tableau').html('');
    console.log(data);


      for (var x in data.employees) {

        $('#tableau').append("<tr><th class='lastname'>" + data.employees[x].lastName +
        "</th><td class='firstname'>" + data.employees[x].firstName +
        "</td><td class='Age'>" + data.employees[x].Age +
        "</td><td class='city'>" + data.employees[x].city +
        "</td></tr>"

      );
    }
  }

this.tri = function( tab,key){

  tab.sort(function(a,b){
    var keyA = a[key];
    var keyB = b[key];
    if (keyA < keyB ) return -1 ;
    if (keyA > keyB ) return 1 ;
    return 0;
  });
  this.affichage();
}
}


  var objClient = new customers();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      objClient.affichage();
      $('#inlineFormCustomSelect').click( function () {
        objClient.tri(data.employees, $('#inlineFormCustomSelect').val() );

      })


    }
  };
  xhttp.open("GET", "client.json", true);
  xhttp.send();
