/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    
    cordova.plugins.FlyyPlugin.setAppPackage("theflyy.com.flyysdk", function (data) {
//        alert("Set Package Name: " + data)
    }, function (data) {
        alert("Set Package Name Error: "+data)
    });
    
    cordova.plugins.FlyyPlugin.initSdk("8fce343fa6170bf1ecb5", "stage", function (data) {
//        alert("Init SDK Success: " + data)
    }, function (data) {
        alert("Init SDK Error : " + data)
    });
    
    cordova.plugins.FlyyPlugin.setUser("9844313418", "all_users", function (data) {
//        alert("Set User Success : " + data)
    }, function (data) {
        alert("Set User Error : " + data)
    });
    
    cordova.plugins.FlyyPlugin.setUsername("Pooja", function (data) {
//        alert("Set User Name Success : " + data)
    }, function (data) {
        alert("Set User Name Error : " + data)
    });
    
    cordova.plugins.FlyyPlugin.startOfferActivity("all_users", function (data) {
//        alert("Offers Page Success : " + data)
    }, function (data) {
        alert("Offers Page Error : " + data)
    });
    
//    cordova.plugins.FlyyPlugin.startRewardsActivity("all_users", function (data) {
//        alert("Rewards Page Success : " + data)
//    }, function (data) {
//        alert("Rewards Page Error : " + data)
//    });

//    cordova.plugins.FlyyPlugin.startWalletActivity("all_users", function (data) {
//        alert("Wallet Page Success : " + data)
//    }, function (data) {
//        alert("Wallet Page Error : " + data)
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
//        alert("Rewards grid count Success : " + data)
//    }, function(data) {
//        alert("Rewards grid count Error : " + data)
//    });

//    cordova.plugins.FlyyPlugin.handleNotification("userdata", function (data) {
//        alert("Handle notification Success : " + data)
//    }, function(data) {
//        alert("Hanle notification Error : " + data)
//    });
//
    cordova.plugins.FlyyPlugin.setThemeColor("#ffa500", "#ffa500", function (data) {
//        alert("Set theme color Success : " + data)
        console.log("Set theme color Success : " + data)
    }, function(data) {
        alert("Set theme color Error : " + data)
    });
    
    
    cordova.plugins.FlyyPlugin.onSDKClosedWithScreenName(function (data) {
        alert("ON FLYY SDK CLOSED : " + data)
        console.log("ON FLYY SDK CLOSED : ")
    });
    

//    cordova.plugins.FlyyPlugin.getShareData("", function (data) {
//        alert("getShareData Success : " + data)
//    }, function(data) {
//        alert("getShareData Error : " + data)
//    });
//
//    cordova.plugins.FlyyPlugin.getReferralCount(function (data) {
//        alert("getReferralCount Success : " + data)
//    }, function(data) {
//        alert("getReferralCount Error : " + data)
//    });
//
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
//
//    cordova.plugins.FlyyPlugin.getReferrerDetails(function (data) {
//        alert("getReferrerDetails Success : " + data)
//    }, function(data) {
//        alert("getReferrerDetails Error : " + data)
//    });
//
//    cordova.plugins.FlyyPlugin.getOffersCount(function (data) {
//        alert("getOffersCount Success : " + data)
//    }, function(data) {
//        alert("getOffersCount Error : " + data)
//    });
    
    
//    cordova.plugins.FlyyPlugin.setNewUser("9844313418", function (data) {
//        alert("Set New User Success : " + data)
//    }, function (data) {
//        alert("Set New User Error : " + data)
//    });
    
    
    
}
