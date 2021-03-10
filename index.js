const express = require('express')
const app = express()
const unirest = require('unirest')
const fs = require('fs')
const ejs = require('ejs')
const cases = require ('./public/data/dataCases.json')
const { select } = require('async')

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    try {
        res.render('pages/index', {cases})
    } catch (err) {
        // res.status(500).send(err)
        res.send(err)
    }
})

app.get('/case:id', function(req, res) {
    try {
        caseId = req.params.id
        selectedCase = cases[caseId]
        res.render('pages/case', {selectedCase})

    } catch (err) {
        res.send(err)
    }
})

const server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port)
})

const req = unirest("GET", "https://www.brutcommunicatie.nl/wp-json/wp/v2/cases");

// REQUEST FOR JSON CASES
req.query({
    "_fields": "id,title,acf.case_logo.url,acf.cases_content"
})
req.headers({
    "postman-token": "e4c5af95-812a-836a-0ff6-e24cbfc8c7e0",
    "cache-control": "no-cache"
})
req.end(function (res) {
    if (res.error) throw new Error(res.error);
    const cases = res.body
    const dataCases = JSON.stringify(cases)
    fs.writeFileSync('./public/data/dataCases.json', dataCases)
})

// HANDY STUFF
// <% console.log(cases[0].acf.cases_content[0].case_banner_image.sizes.thumbnail) %>


// <% const findCaseById = (caseId) => {
//     const key = Object.keys(cases.id).find(id => cases.id[id].id === '9233')
//     return cases.id[key]

//     console.log(findCaseById('9233'))
// } %>

// <% selectedCase.acf.cases_content[0].case_banner_image.sizes.thumbnail %>

// <main>
//         <%  const caseLeftColumn1 = selectedCase.acf.cases_content[1].case_left_column 
//             const caseRightColumn1 = selectedCase.acf.cases_content[1].case_right_column
//             const caseLeftColumn2 = selectedCase.acf.cases_content[3].case_left_column
//             const caseRightColumn2 = selectedCase.acf.cases_content[3].case_right_column
//             const caseLeftColumn3 = selectedCase.acf.cases_content[8].case_left_column
//             const caseRightColumn3 = selectedCase.acf.cases_content[8].case_right_column
//             const caseLeftColumn4 = selectedCase.acf.cases_content[9].case_left_column
//             const caseRightColumn4 = selectedCase.acf.cases_content[9].case_right_column
        
//             const caseSingleColumn1 = selectedCase.acf.cases_content[6].case_one_column
//             const headerImage = selectedCase.acf.cases_content[0].case_banner_image.sizes["2048x2048"]

//             console.log(caseLeftColumn1.length)
        
//         %>
//         <h1><%= selectedCase.title.rendered %></h1>
//         <img src="<%= headerImage  %>" alt="">


//         <%- caseLeftColumn1 %>
//         <%- caseRightColumn1 %>
//         <%- caseRightColumn2 %>
//         <%- caseRightColumn2 %>
//         <%- caseRightColumn3 %>
//         <%- caseRightColumn3 %>
//         <%- caseSingleColumn1 %>
//         <%- caseRightColumn4 %>
//         <%- caseRightColumn4 %>



//     </main>