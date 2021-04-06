$('.ui.modal')
.modal('show')
;


$('.tool-tip').popup();

function uncheck() {
document.getElementById("red").checked = false;
}
$('.ui.dropdown')
  .dropdown()
;
$('.ui.checkbox')
.checkbox()
;
$('.menu .item')
.tab()
;

$('.accordion')
.accordion({
  selector: {
    trigger: '.title'
  }
})
;

$('#diacriticsexample')
    .search({
        ignoreDiacritics: true,
        fullTextSearch:'exact',
        source: [
            { title: 'André'},
            { title: 'Bokmål'},
            { title: 'café'},
            { title: 'cafetería'},
            { title: 'château'},
            { title: 'décolleté'},
            { title: 'Élysée'},
            { title: 'Fräulein'},
            { title: 'garçon'},
            { title: 'háček'},
            { title: 'inrō'},
            { title: 'jūjutsu'},
            { title: 'kroužek'},
            { title: 'La Niña'},
            { title: 'Māori'},
            { title: 'négligée'},
            { title: 'pączki'},
            { title: 'Québec'},
            { title: 'ragoût'},
            { title: 'Škoda'},
            { title: 'takahē'},
            { title: 'über'},
            { title: 'voilà'},
            { title: 'whekī'},
            { title: 'c Zoë'}
        ]
    })
;


