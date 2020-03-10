// get element
const form = document.getElementById('form');
const divCards = document.getElementById('divCards');
const button = document.getElementsByTagName('button')[0];

// ambil element
const input = document.querySelector('.addBox');

// < ----- Add Function ---- >
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.target.type = 'submit') {
        if (input.value === '') {
            alert('Please filled your input Box');
        } else {

            // <----- ambil element ----->
            const ul = document.querySelector('#list');

            // <----- buat element ----- >
            const div = document.createElement('div');
            const check = document.createElement('i')
            const li = document.createElement('li');
            const a = document.createElement('a');
            // buat textNode
            const liText = document.createTextNode(`${input.value}`);
            const aText = document.createTextNode('x');

            // <----- set attribute -------->

            // menggunakan class list-group-item agar ada batas per list
            // menggunakan class d-flex item sejajar rapih ke samping kiri
            // menggunakan class align-items-center agar element sejajar vertical
            div.setAttribute('class', 'list-group-item d-flex align-items-center');
            div.setAttribute('id', 'mainList')

            // class p-2 untuk memberi padding 2
            // class ml-2 untuk memberi margin 2
            li.setAttribute('class', 'text-break p-2 ml-2')

            // class ml-auto pushing two items to the left (.ml-auto) (bootstrap doc flex)
            a.setAttribute('class', 'badge ml-auto p-2 pb-1')
            check.setAttribute('class', 'fas fa-check-square p-2')

            // <----- satukan element ----->
            a.appendChild(aText);
            div.appendChild(check);
            li.appendChild(liText);
            div.appendChild(li);
            div.appendChild(a);
            ul.appendChild(div);
        }
    }
    // clear inputBox jika sudah selesai
    input.value = '';
});

// <----- on click check ----->
divCards.addEventListener('click', function (e) {
    if (e.target.tagName == 'I') {
        e.target.classList.toggle('text-warning');
        e.target.nextElementSibling.classList.toggle('strike');

        // <----- Close Btn event ----->
    } else if (e.target.tagName == 'A') {
        e.target.parentElement.remove();
    }
});