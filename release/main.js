var projectName = 'kittenbook';
var versionNumber = '0.0.1';
var currentDate = new Date ();
var currentTime = currentDate.getFullYear() + '-' +   // Set year
                  (currentDate.getMonth() + 1)+ '-' + // Set month
                  currentDate.getDate() + ' at ' +    // Set day of the month
                  currentDate.getHours() + ':' +      // Set hours (military time)
                  currentDate.getMinutes() + ':' +    // Set minutues
                  currentDate.getSeconds();           // Set seconds
var userName = prompt('Hello, what\'s your name?');
document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' + '<p>' + projectName + ' ' + versionNumber + ' accessed on: ' + currentTime + '</p>';
