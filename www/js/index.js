///*
// * Licensed to the Apache Software Foundation (ASF) under one
// * or more contributor license agreements.  See the NOTICE file
// * distributed with this work for additional information
// * regarding copyright ownership.  The ASF licenses this file
// * to you under the Apache License, Version 2.0 (the
// * "License"); you may not use this file except in compliance
// * with the License.  You may obtain a copy of the License at
// *
// * http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing,
// * software distributed under the License is distributed on an
// * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// * KIND, either express or implied.  See the License for the
// * specific language governing permissions and limitations
// * under the License.
// */
//
//// Wait for the deviceready event before using any of Cordova's device APIs.
//// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready


function runFlyyMethods() {
    cordova.plugins.FlyyPlugin.setAppPackage("roidtechnologies.TempFlyyDemo.com", function (data) {
        console.log("Set Package Name: " + data)
    }, function (data) {
        alert("Set Package Name Error: "+data)
    });
    
    cordova.plugins.FlyyPlugin.initSdk("4f4a13714d719106a91d", "stage", function (data) {
        console.log("Init SDK Success: " + data)
    }, function (data) {
        alert("Init SDK Error : " + data)
    });
    
    cordova.plugins.FlyyPlugin.setUser("9493488207", "all_users", function (data) {
        console.log("Set User Success : " + data)
    }, function (data) {
        alert("Set User Error : " + data)
    });
    
    cordova.plugins.FlyyPlugin.setUsername("Vaishnavi", function (data) {
        console.log("Set User Name Success : " + data)
    }, function (data) {
        alert("Set User Name Error : " + data)
    });
    
    cordova.plugins.FlyyPlugin.startOfferActivity("all_users", function (data) {
        console.log("Offers Page Success : " + data)
    }, function (data) {
        console.log("Offers Page Error : " + data)
    });
    
    //    cordova.plugins.FlyyPlugin.startRewardsActivity("all_users", function (data) {
    //        console.log("Rewards Page Success : " + data)
    //    }, function (data) {
    //        console.log("Rewards Page Error : " + data)
    //    });
    //
    //    cordova.plugins.FlyyPlugin.startWalletActivity("all_users", function (data) {
    //        console.log("Wallet Page Success : " + data)
    //    }, function (data) {
    //        console.log("Wallet Page Error : " + data)
    //    });
    
    //    cordova.plugins.FlyyPlugin.trackEvent("testing", "cordova", function (data) {
    //        alert("Track Event Success : " + data)
    //    }, function(data) {
    //        alert("Track Event Error : " + data)
    //    });
    //
    //    cordova.plugins.FlyyPlugin.trackEventJson("testing", "cordova", function (data) {
    //        alert("Track Event Success : " + data)
    //    }, function(data) {
    //        alert("Track Event Error : " + data)
    //    });
    //
    //    cordova.plugins.FlyyPlugin.setRewardGridSpanCount("3", function (data) {
    //        console.log("Rewards grid count Success : " + data)
    //    }, function(data) {
    //        console.log("Rewards grid count Error : " + data)
    //    });
    
    //    cordova.plugins.FlyyPlugin.handleNotification("userdata", function (data) {
    //        alert("Handle notification Success : " + data)
    //    }, function(data) {
    //        alert("Hanle notification Error : " + data)
    //    });
    //
    //    cordova.plugins.FlyyPlugin.handleForeGroundNotification("userdata", function (data) {
    //        alert("Handle notification Success : " + data)
    //    }, function(data) {
    //        alert("Hanle notification Error : " + data)
    //    });
    //
    //    cordova.plugins.FlyyPlugin.handleBackGroundNotification("userdata", function (data) {
    //        alert("Handle notification Success : " + data)
    //    }, function(data) {
    //        alert("Hanle notification Error : " + data)
    //    });
    //
    cordova.plugins.FlyyPlugin.setThemeColor("#ffa500", "#ffa500", function (data) {
        console.log("Set theme color Success : " + data)
    }, function(data) {
        alert("Set theme color Error : " + data)
    });
    
    
    //    cordova.plugins.FlyyPlugin.onSDKClosedWithScreenName(function (data) {
    //        console.log("ON FLYY SDK CLOSED : ")
    //    });
    
    
    //    cordova.plugins.FlyyPlugin.getShareData("", function (data) {
    //        alert("getShareData Success : " + data)
    //    }, function(data) {
    //        alert("getShareData Error : " + data)
    //    });
    ////
    //    cordova.plugins.FlyyPlugin.getReferralCount(function (data) {
    //        alert("getReferralCount Success : " + data)
    //    }, function(data) {
    //        alert("getReferralCount Error : " + data)
    //    });
    ////
    //    cordova.plugins.FlyyPlugin.getScratchCardCount(function (data) {
    //        alert("getScratchCardCount Success : " + data)
    //    }, function(data) {
    //        alert("getScratchCardCount Error : " + data)
    //    });
    //
    //    cordova.plugins.FlyyPlugin.getPreviousLeaderboardWinners("test", function (data) {
    //        alert("getPreviousLeaderboardWinners Success : " + data)
    //    }, function(data) {
    //        alert("getPreviousLeaderboardWinners Error : " + data)
    //    });
    //
    //    cordova.plugins.FlyyPlugin.getLeaderboardParticipants("test", function (data) {
    //        alert("getLeaderboardParticipants Success : " + data)
    //    }, function(data) {
    //        alert("getLeaderboardParticipants Error : " + data)
    //    });
    //
    //    cordova.plugins.FlyyPlugin.getWalletBalance("points", function (data) {
    //        alert("getWalletBalance Success : " + data)
    //    }, function(data) {
    //        alert("getWalletBalance Error : " + data)
    //    });
    ////
    //    cordova.plugins.FlyyPlugin.getReferrerDetails(function (data) {
    //        alert("getReferrerDetails Success : " + data)
    //    }, function(data) {
    //        alert("getReferrerDetails Error : " + data)
    //    });
    ////
    //    cordova.plugins.FlyyPlugin.getOffersCount(function (data) {
    //        alert("getOffersCount Success : " + data)
    //    }, function(data) {
    //        alert("getOffersCount Error : " + data)
    //    });
    //
    //
    //    cordova.plugins.FlyyPlugin.setNewUser("9844313418", function (data) {
    //        console.log("Set New User Success : " + data)
    //    }, function (data) {
    //        alert("Set New User Error : " + data)
    //    });
    //
    //
    //
}


function formatNow() {
    var now = new Date();
    return (
            now.getHours() +
            ":" +
            now.getMinutes() +
            ":" +
            now.getSeconds() +
            "." +
            now.getMilliseconds()
            );
}

function addToLog(log) {
    document.getElementById("notification-logs").innerHTML =
    "<hr>" +
    "<p>Received at " +
    formatNow() +
    "</p>" +
    log +
    document.getElementById("notification-logs").innerHTML;
}

function trySomeTimes(asyncFunc, onSuccess, onFailure, customTries) {
    var tries = typeof customTries === "undefined" ? 100 : customTries;
    var interval = setTimeout(function () {
        if (typeof asyncFunc !== "function") {
            onSuccess("Unavailable");
            return;
        }
        asyncFunc()
        .then(function (result) {
            if ((result !== null && result !== "") || tries < 0) {
                onSuccess(result);
            } else {
                trySomeTimes(asyncFunc, onSuccess, onFailure, tries - 1);
            }
        })
        .catch(function (e) {
            clearInterval(interval);
            onFailure(e);
        });
    }, 100);
}

function setupOnTokenRefresh() {
    FCM.eventTarget.addEventListener(
                                     "tokenRefresh",
                                     function (data) {
        cordova.plugins.firebase.messaging.getToken().then(function(token) {
            console.log("Got device token: ", token);
            cordova.plugins.FlyyPlugin.sendFCMTokenToServer(token, function (data) {
                alert("FCM Token Success : " + data)
            });
        });
        addToLog("<p>FCM Token refreshed to " + data.detail + "</p>");
    },
                                     false
                                     );
}

function setupOnNotification() {
    FCM.eventTarget.addEventListener(
                                     "notification",
                                     function (data) {
        addToLog("Pooja" + JSON.stringify(data.detail, null, 2) + "</pre>");
    },
                                     false
                                     );
    FCM.getInitialPushPayload()
    .then((payload) => {
        addToLog(
                 "<p>Initial Payload</p><pre>" +
                 JSON.stringify(payload, null, 2) +
                 "</pre>"
                 );
    })
    .catch((error) => {
        addToLog(
                 "<p>Initial Payload Error</p><pre>" +
                 JSON.stringify(error, null, 2) +
                 "</pre>"
                 );
    });
}

function logFCMToken() {
    trySomeTimes(
                 FCM.getToken,
                 function (token) {
        cordova.plugins.firebase.messaging.getToken().then(function(token) {
            console.log("Got device token: ", token);
            cordova.plugins.FlyyPlugin.sendFCMTokenToServer(token, function (data) {
                alert("FCM Token Success : " + data)
            });
        });
        addToLog("<p>Started listening FCM as " + token + "</p>");
    },
                 function (error) {
        addToLog("<p>Error on listening for FCM token: " + error + "</p>");
    }
                 );
}

function logAPNSToken() {
    if (cordova.platformId !== "ios") {
        return;
    }
    FCM.getAPNSToken(
                     function (token) {
        addToLog("<p>Started listening APNS as " + token + "</p>");
    },
                     function (error) {
        addToLog("<p>Error on listening for APNS token: " + error + "</p>");
    }
                     );
}

//function setupClearAllNotificationsButton() {
//    document.getElementById("clear-all-notifications").addEventListener(
//                                                                        "click",
//                                                                        function () {
//        FCM.clearAllNotifications();
//    },
//                                                                        false
//                                                                        );
//}
//
//function setupClearAllNotificationsButton() {
//    document.getElementById("delete-instance-id").addEventListener(
//                                                                   "click",
//                                                                   function () {
//        FCM.deleteInstanceId().catch(function (error) {
//            alert(error);
//        });
//    },
//                                                                   false
//                                                                   );
//}

function waitForPermission(callback) {
    FCM.requestPushPermission()
    .then(function (didIt) {
        if (didIt) {
            callback();
        } else {
            addToLog("<p>Push permission was not given to this application</p>");
        }
    })
    .catch(function (error) {
        addToLog("<p>Error on checking permission: " + error + "</p>");
    });
}

function logHasPermissionOnStart() {
    FCM.hasPermission().then(function (hasIt) {
        addToLog("<p>Started with permission: " + JSON.stringify(hasIt) + "</p>");
    });
}

function setupListeners() {
    runFlyyMethods();
    logHasPermissionOnStart();
    waitForPermission(function () {
        logFCMToken();
        logAPNSToken();
        setupOnTokenRefresh();
        setupOnNotification();
        setupClearAllNotificationsButton();
    });
}

document.addEventListener("deviceready", setupListeners, false);
