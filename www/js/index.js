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
  // var string = device.platform
  // if (string =="Android") {
    cordova.plugins.FlyyPlugin.initSdk("8fce343fa6170bf1ecb5", "stage",function (data) {
            
           alert("Success: "+data)

        }, function (data) {

            alert("Error: "+data)

        });

    cordova.plugins.FlyyPlugin.setUser("7828011085", "all_users",function (data) {
             alert("SuccessOpen: "+data)
            }, function (data) {
                alert("ErrorOpen: "+data)
            });

    cordova.plugins.FlyyPlugin.startOfferActivity("all_users",function (data) {
                alert("SuccessOffer: "+data)
               }, function (data) {
                   alert("Error Offer: "+data)
               });
  // } else {
  //   cordova.plugins.FlyyPlugin.coolMethod("7828011085",function (data) {
  //       // alert("SuccessOffer: "+data)
  //      }, function (data) {
  //       //    alert("Error Offer: "+data)
  //      });
  // }
    

               
}
