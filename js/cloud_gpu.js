
function make_href(url, text) {
    return '<a href="' + url + '" target="_blank">' + text + '</a>';
}

function render_checkbox(data, type, row, meta){
    // https://stackoverflow.com/questions/43887876/checkbox-checked-state-in-datatables
    if (type === 'display' ) {
        if (data == true){
            return '<input type="checkbox" checked>';
    }else{
        return '<input type="checkbox">';
    }
}
return data
}

fetch('js/cloud_gpu.json')
    .then((response) => response.json())
    .then((res) => {
        data = res.data

        $.fn.dataTable.moment('D MMM YYYY')
        table = $('#contests').DataTable({
            "data": data,
            columns: [{
                data: 'name',
                "render": function (data, type, row, meta) {
                    return make_href(row.url, data);
                }
            }, {
                data: 'credits'
            }, {
                data: 'cost1080',
                visible: false
            }, {
                data: 'costk80',
                visible: false
            }, {
                data: 'costv100'
            }, {
                data: 'costp100',
                visible: false
            }, {
                data: 'costt4',
                visible: false
            }, {
                data: 'costp4',
                visible: false
            }, {
                data: 'cost2080',
                visible: false
            }, {
                data: 'cost3090'
            }, {
                data: 'region'
            }, {
                data: 'images',
                render: render_checkbox
            }, {
                data: 'notebooks',
                render: render_checkbox
            }, {
                data: 'ssh',
                render: render_checkbox
            }, {
                data: 'persistence',
                render: render_checkbox
            }],
            paging: false,
            searching: false,
            info: false,
            buttons: ['colvis'],
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

        $('a.toggle-vis').on('click', function(e){
            // toggle column visibility
            e.preventDefault();
 
            // Get the column API object
            var column = table.column( $(this).attr('data-column') );
     
            // Toggle the visibility
            column.visible( ! column.visible() );
        })

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
            card_subtitle.innerHTML = elt.costv100 + '/h (v100)';

            let card_text = document.createElement('p');
            card_text.className = 'card-text';
            card_text.innerHTML = elt.region;
            if(elt.ssh){ 
                card_text.innerHTML += '<br />&#10003; SSH ' 
            }
            if(elt.persistence){ 
                card_text.innerHTML += '<br />&#10003; Data Persistence ' 
            }
            if(elt.images){ 
                card_text.innerHTML += '<br />&#10003; Machine Images ' 
            }
            if(elt.notebooks){ 
                card_text.innerHTML += '<br />&#10003; Notebooks ' 
            }

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


