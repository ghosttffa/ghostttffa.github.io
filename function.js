const node_for_click = document.getElementById("for_click")

function find_edit(){
    const item  = document.getElementsByTagName('p')[0]
    console.log(item.innerText)
    item.innerText = 'Rizkin'
    document.getElementsByTagName('p')[1].innerText='Rizik'
    document.getElementsByTagName('p')[3].innerText='14.10.19'
}
node_for_click.addEventListener("click",find_edit)



const node_for_click_name = document.getElementById("for_click_name")

function find_edit_name(){
     document.getElementsByTagName('p')[2].innerText='Rizikov'
}

node_for_click_name.addEventListener("click",find_edit_name)

function insert_table() {
let table = document.querySelector('#table');

    for (let i=0; i<3; i++) {
        let tr = document.createElement ('tr');

        for (let i=0; i<3; i++) {
        let td = document.createElement ('td');
        tr.appendChild(td);
        td.innerText='meow'
        }

        table.appendChild(tr);
}
}

const node_insert_table = document.getElementById("insert_table")
node_insert_table.addEventListener("click",insert_table)
