
function make_href(url, text) {
    return '<a href="' + url + '" target="_blank">' + text + '</a>';
}

fetch('js/cloud_platforms.json')
    .then((response) => response.json())
    .then((res) => {
        data = res.data

        console.log(data)
        console.log(data.length)
        $.fn.dataTable.moment('D MMM YYYY')
        x = $('#contests').DataTable({
            "data": data,
            columns: [{
                data: 'name',
                "render": function (data, type, row, meta) {
                    return make_href(row.url, data);
                }
            }, {
                data: 'cost1080'
            }, {
                data: 'region'
            }, {
                data: 'credits'
            }, {
                data: 'images'
            }, {
                data: 'notebooks'
            }, {
                data: 'vms'
            }],
            paging: false,
            searching: false,
            info: false,
            responsive: {
                details: {
                    type: 'column',
                    target: 'tr'
                }
            },
            "order": [
                [1, "asc"],
                [2, "desc"]
            ]
        });

        console.log(data)

        // Create cards
        data.forEach(elt => {
            let card = document.createElement("div");
            card.className = 'card text-center mt-4';

            // card body
            let card_body = document.createElement('div');
            card_body.className = 'card-body';

            let card_title = document.createElement('h4');
            card_title.className = 'card-title';
            card_title.innerHTML = elt.name;

            let card_subtitle = document.createElement('h6');
            card_subtitle.className = 'card-subtitle';
            card_subtitle.innerHTML = elt.cost + '/h (1080Ti)';

            let card_text = document.createElement('p');
            card_text.className = 'card-text';
            card_text.innerHTML = elt.region;

            let card_link = document.createElement('a');
            card_link.className = 'btn btn-link';
            card_link.href = elt.url;
            card_link.innerHTML = elt.credits + ' free credits when you sign up!';

            card_body.appendChild(card_title)
            card_body.appendChild(card_subtitle)
            card_body.appendChild(card_text)
            card_body.appendChild(card_link)

            card.appendChild(card_body);
            document.getElementById('contests-cards').appendChild(card);
        });


    })


