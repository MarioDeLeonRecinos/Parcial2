tareas();
console.log(document.forms.formRegistrar.user.value);
document.querySelector("#formRegistrar").addEventListener('submit', function (e) {
    e.preventDefault();
    let data = {
        user: document.forms.formRegistrar.user.value,
        password: document.forms.formRegistrar.password.value,
        rol: document.forms.formRegistrar.rol.value
    }
    console.log(data);
    fetch('/users', {
        method: "Post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => {
            alert("TArea insertada");
            tareas();
        }).catch(err => {
            alert("Por favor revise los datos");
            console.log(err);
        });
});
document.forms.formUpdate.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
        user: document.forms.formRegistrar.user.value,
        rol: document.forms.formRegistrar.rol.value
    }
    fetch('/users/' + document.forms.formUpdate._id.value, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'apliccation/json'
        }
    }).then(response => {
        alert("Tarea Actualizada con exito");
        tareas();
    }).catch(err => {
        alert("Por favor revise los datos");
        console.log(err);
    });
});

function tareas() {
    fetch('users', {
        method: 'GET'
    }).then(res => res.json()).then(data => {
        let filas = "";
        data.forEach(element => {
            filas = filas + `<tr>
            <td>${element.userName}</td>
            <td>${element.password}</td>
            <td>${element.rol}</td>
            <td>
                <a href="/users/${element._id}" class="update btn btn-warning" data-toggle="modal" data-target="#exampleModal">Actualizar</a>
                <a href="/users/${element._id}" class="delete btn btn-danger">Eliminar</a>
            </td>
            </tr>`
        });
        document.querySelector("#filas").innerHTML = filas;
        let btn_update = document.querySelectorAll('.update');
        btn_update.forEach(item => {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                let url = this["href"];
                console.log(url);
                fetch(url, {
                    method: "GET"
                }).then(res => res.json()).catch(err => console.error(err)).then(response => {
                    document.forms.formUpdate._id.value = response._id;
                    document.forms.formUpdate.userU.value = response.userName;
                    document.forms.formUpdate.rolU.value = response.rol;
                });
            });
        });
    });
    let btn_delete = document.querySelectorAll('.delete');
    btn_delete.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            let url = this["href"];
            console.log(url);
            fetch(url, {
                method: "DELETE"
            }).then(res => res.json()).then(response => {
                alert("Eliminado con exito");
                tareas();
            }).catch(err => {
                alert("Ocurrio un error");
                console.log(err);
            });
        })
    })
};