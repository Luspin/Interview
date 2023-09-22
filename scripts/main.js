const myHeading1 = document.querySelector('h2');
var details = {
    'client_id': 'eb5c4dff-6eca-4998-a149-4cd54a212184',
    'client_secret': 'geBqC+LdOlWLTl86jADVlAOIucblTNaN9gcIIMAQjCU=',
    'grant_type': 'client_credentials',
    'scope': 'https://graph.microsoft.com/.default'
};

var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

function UserAction() {
    let myChar = document.querySelector('input');
    myHeading1.textContent = 'You character is: ' + myChar.value;
}

const userAction1 = async () => {
    // let myBody = document.querySelector('input');
   // obj.name = myBody.value;
   
   let userId = document.querySelector('textarea');

    //const responseToken = await fetch('https://login.microsoftonline.com/ahabdall1.onmicrosoft.com/oauth2/v2.0/token', {
      //  method: 'POST',
        //body: formBody,
        //headers: {
          //'Content-Type': 'application/x-www-form-urlencoded' 
        //}
     // });

     
    const response = await fetch('https://graph.microsoft.com/v1.0/users/' + userId.value, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6InNqdmRBeUgzSEZSTEE4UWtYTEVtZTNwSnk3VDRLU00ydFctZC10eDlWaVUiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kMWE5MmM4OS0xNTc2LTQ3Y2QtYjljZC05Y2E0ODEyNzBiZGQvIiwiaWF0IjoxNjk1MTA5Mzg4LCJuYmYiOjE2OTUxMDkzODgsImV4cCI6MTY5NTExMzI4OCwiYWlvIjoiRTJGZ1lCQnkydlhTc2lWdm4rZ2tFOUVwRG15ekFRPT0iLCJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBXZWIgQXBwIiwiYXBwaWQiOiJlYjVjNGRmZi02ZWNhLTQ5OTgtYTE0OS00Y2Q1NGEyMTIxODQiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kMWE5MmM4OS0xNTc2LTQ3Y2QtYjljZC05Y2E0ODEyNzBiZGQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI0ZWJlZmZiNC01Mzg1LTQ4NTAtOGM1Ny05YTRiZGE4NDEyYTEiLCJyaCI6IjAuQVRFQWlTeXAwWFlWelVlNXpaeWtnU2NMM1FNQUFBQUFBQUFBd0FBQUFBQUFBQUF4QUFBLiIsInJvbGVzIjpbIlBsYWNlLlJlYWQuQWxsIiwiQ2hhdC5VcGRhdGVQb2xpY3lWaW9sYXRpb24uQWxsIiwiU2NoZWR1bGUuUmVhZFdyaXRlLkFsbCIsIlRlYW13b3JrLk1pZ3JhdGUuQWxsIiwiQ2FsbHMuSm9pbkdyb3VwQ2FsbC5BbGwiLCJFZHVSb3N0ZXIuUmVhZC5BbGwiLCJPbmxpbmVNZWV0aW5ncy5SZWFkLkFsbCIsIkFjY2Vzc1Jldmlldy5SZWFkV3JpdGUuTWVtYmVyc2hpcCIsIlByZXNlbmNlLlJlYWRXcml0ZS5BbGwiLCJNYWlsLlJlYWRXcml0ZSIsIk9ubGluZU1lZXRpbmdzLlJlYWRXcml0ZS5BbGwiLCJEZXZpY2UuUmVhZFdyaXRlLkFsbCIsIlVzZXIuUmVhZFdyaXRlLkFsbCIsIk9ubGluZU1lZXRpbmdBcnRpZmFjdC5SZWFkLkFsbCIsIkRvbWFpbi5SZWFkV3JpdGUuQWxsIiwiQXBwbGljYXRpb24uUmVhZFdyaXRlLk93bmVkQnkiLCJTZWN1cml0eUV2ZW50cy5SZWFkLkFsbCIsIkNhbGVuZGFycy5SZWFkIiwiRWR1QXNzaWdubWVudHMuUmVhZFdyaXRlLkFsbCIsIlBlb3BsZS5SZWFkLkFsbCIsIkFwcGxpY2F0aW9uLlJlYWRXcml0ZS5BbGwiLCJDYWxscy5Jbml0aWF0ZUdyb3VwQ2FsbC5BbGwiLCJHcm91cC5SZWFkLkFsbCIsIkFjY2Vzc1Jldmlldy5SZWFkV3JpdGUuQWxsIiwiRGlyZWN0b3J5LlJlYWRXcml0ZS5BbGwiLCJFZHVBc3NpZ25tZW50cy5SZWFkV3JpdGVCYXNpYy5BbGwiLCJNYWlsYm94U2V0dGluZ3MuUmVhZCIsIkVkdUFkbWluaXN0cmF0aW9uLlJlYWQuQWxsIiwiQ2FsbHMuSm9pbkdyb3VwQ2FsbEFzR3Vlc3QuQWxsIiwiU2l0ZXMuUmVhZC5BbGwiLCJTaXRlcy5SZWFkV3JpdGUuQWxsIiwiU2VydmljZU1lc3NhZ2UuUmVhZC5BbGwiLCJDb250YWN0cy5SZWFkV3JpdGUiLCJHcm91cC5SZWFkV3JpdGUuQWxsIiwiU2l0ZXMuTWFuYWdlLkFsbCIsIlNlY3VyaXR5RXZlbnRzLlJlYWRXcml0ZS5BbGwiLCJOb3Rlcy5SZWFkLkFsbCIsIkNhbGxSZWNvcmRzLlJlYWQuQWxsIiwiVXNlci5JbnZpdGUuQWxsIiwiRWR1Um9zdGVyLlJlYWRXcml0ZS5BbGwiLCJGaWxlcy5SZWFkV3JpdGUuQWxsIiwiRGlyZWN0b3J5LlJlYWQuQWxsIiwiVXNlci5SZWFkLkFsbCIsIkVkdUFzc2lnbm1lbnRzLlJlYWRCYXNpYy5BbGwiLCJFZHVSb3N0ZXIuUmVhZEJhc2ljLkFsbCIsIlRlYW1NZW1iZXIuUmVhZFdyaXRlLkFsbCIsIkZpbGVzLlJlYWQuQWxsIiwiTWFpbC5SZWFkIiwiQ2hhdC5SZWFkLkFsbCIsIkNoYW5uZWxNZXNzYWdlLlJlYWQuQWxsIiwiVXNlci5FeHBvcnQuQWxsIiwiRWR1QXNzaWdubWVudHMuUmVhZC5BbGwiLCJDYWxlbmRhcnMuUmVhZFdyaXRlIiwiSWRlbnRpdHlSaXNreVVzZXIuUmVhZC5BbGwiLCJBY2Nlc3NSZXZpZXcuUmVhZC5BbGwiLCJFZHVBZG1pbmlzdHJhdGlvbi5SZWFkV3JpdGUuQWxsIiwiTWFpbC5TZW5kIiwiQ2hhdC5SZWFkV3JpdGUuQWxsIiwiQ2hhbm5lbE1lc3NhZ2UuVXBkYXRlUG9saWN5VmlvbGF0aW9uLkFsbCIsIk1haWxib3hTZXR0aW5ncy5SZWFkV3JpdGUiLCJDaGFubmVsTWVtYmVyLlJlYWRXcml0ZS5BbGwiLCJDb250YWN0cy5SZWFkIiwiSWRlbnRpdHlSaXNrRXZlbnQuUmVhZC5BbGwiLCJBdWRpdExvZy5SZWFkLkFsbCIsIk1lbWJlci5SZWFkLkhpZGRlbiIsIkNhbGxzLkFjY2Vzc01lZGlhLkFsbCIsIlByb2dyYW1Db250cm9sLlJlYWQuQWxsIiwiU2VydmljZUhlYWx0aC5SZWFkLkFsbCIsIlNpdGVzLkZ1bGxDb250cm9sLkFsbCIsIlByb2dyYW1Db250cm9sLlJlYWRXcml0ZS5BbGwiLCJSZXBvcnRzLlJlYWQuQWxsIiwiQ2FsbHMuSW5pdGlhdGUuQWxsIiwiTm90ZXMuUmVhZFdyaXRlLkFsbCIsIkF0dGFja1NpbXVsYXRpb24uUmVhZC5BbGwiLCJCb29raW5nc0FwcG9pbnRtZW50LlJlYWRXcml0ZS5BbGwiLCJCb29raW5ncy5SZWFkLkFsbCIsIlRocmVhdEFzc2Vzc21lbnQuUmVhZC5BbGwiXSwic3ViIjoiNGViZWZmYjQtNTM4NS00ODUwLThjNTctOWE0YmRhODQxMmExIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkVVIiwidGlkIjoiZDFhOTJjODktMTU3Ni00N2NkLWI5Y2QtOWNhNDgxMjcwYmRkIiwidXRpIjoiRjZUQ3VrenZORXVUOUp0dlljSS1BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiMDk5N2ExZDAtMGQxZC00YWNiLWI0MDgtZDVjYTczMTIxZTkwIl0sInhtc190Y2R0IjoxNTM3ODgxNzQ2fQ.C8lo8aHpZi84b_VzRNbMgHkB4WhHGEmFJ9oLNmHvSWPab2NLY236Hipl4GWRKQ-YEox3_h0s7mG9BLyHGwMjOuAol7hx2wZuSHSsh-uIyNEw2q-9OqXNlbjWOH38sVD9ZS2w8XTqN7jtILjxy2Q1FHg_-Z40TW7-dPujzzaKErOJkjsMNl8TC05XXhShRUyKZ6i9Krkk1MzqR1XlAdOP9aVgJdzF7377nEsKz6uzkXZ-tbiU-RV6RsRMSD02wFIEaFbZoT3oQdbGMcrIwxC4ZEaGfAfi8Eivr6UsBdGuksuQlgRTXin1V0BVu24m3ef285UpgZ2OfL_Hc1Y0icQXzw'
      }
    });


    const myJson = await response.json(); //extract JSON from the http response
    var s = JSON.stringify(myJson)

    var partsArray = s.split(':');
     if (partsArray[0] == '{"error"') {
        myHeading1.textContent = 'Your user details are: FAILURE';
     } else {
        myHeading1.textContent = 'Your user details are: ' + s;
     }
    // do something with myJson
  }