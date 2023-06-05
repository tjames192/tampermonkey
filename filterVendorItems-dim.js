// ==UserScript==
// @name         Filter Vendor Items Which Cost Silver | destinyitemmanager
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://beta.destinyitemmanager.com/*/d2/vendors
// @match        https://app.destinyitemmanager.com/*/d2/vendors
// @icon         https://www.google.com/s2/favicons?sz=64&domain=destinyitemmanager.com
// @grant        none
// ==/UserScript==

'use strict';

setInterval(function(){
    try {
        let rows = document.getElementsByTagName('div');
        let results = [];
        let silver = [];

        for (let i = 0; i < rows.length; i++) {
            let className = rows[i].className;
            className = className.match("VendorItem-m_vendorItem");
            if (className) {
                results.push(rows[i]);
            }
        }

        // Items costing silver
        for (let i = 0; i < results.length; i++) {
            try {
                let title = results[i].children[1].children[0].attributes.title.value
                title = title.match("Silver")
                if (title) {
                    silver.push(results[i]);
                }
            } catch {}
        }

        // set Silver items display to none
        for (let i = 0; i < silver.length; i++) {
            silver[i].style.display = "none";
        }
    }
    catch {}
}, 100); // check after 10ms every time
