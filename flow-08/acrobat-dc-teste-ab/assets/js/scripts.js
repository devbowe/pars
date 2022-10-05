const nome = document.querySelector("#firstname");
const email = document.querySelector("#email");
const telefone = document.querySelector("#phone");
const empresa = document.querySelector("#company");
const segmento = document.querySelector("#segmento");
// const docs_transacionados = document.querySelector("#docs_transacionados");
const n_funcionaciorios = document.querySelector(
    "#quantos_funcionarios_a_empresa_possui_"
);
const consentimento = document.querySelector("#consentimento");

const $btnSubmit = document.querySelector("#send");

$btnSubmit.addEventListener("click", (e) => {
    if (nome.value.trim() === "") {
        showErrorPopUp("Informe seu nome", nome);
        showBorderError(nome);
        e.preventDefault();
    } else if (!validacaoEmail(email.value)) {
        showErrorPopUp("Informe seu e-mail corporativo", email);
        showBorderError(email);

        e.preventDefault();
    } else if (!emailCorporativo(email.value)) {
        showErrorPopUp("Informe seu e-mail corporativo", email);
        showBorderError(email);

        e.preventDefault();
    } else if (telefone.value.trim() === "") {
        showErrorPopUp("Informe seu telefone", telefone);
        showBorderError(telefone);

        e.preventDefault();
    } else if (empresa.value.trim() === "") {
        showErrorPopUp("Informe sua empresa", empresa);
        showBorderError(empresa);

        e.preventDefault();
    } else if (segmento.value === "nulo") {
        showErrorPopUp("Informe seu segmento", segmento);
        showBorderError(segmento);

        e.preventDefault();
    } else if (
        n_funcionaciorios.value.trim() === "" ||
        n_funcionaciorios.value <= 0
    ) {
        showErrorPopUp(
            "Informe o número de funcionários da empresa",
            n_funcionaciorios
        );
        showBorderError(n_funcionaciorios);

        e.preventDefault();
    } else if (!consentimento.checked) {
        showErrorPopUp(
            "Necessário dar ciência em receber comunicações",
            consentimento
        );

        e.preventDefault();
    } else {
        return true;
    }
    return false;
});

const queryForm = function (settings) {
    const reset = settings && settings.reset ? settings.reset : false;
    const self = window.location.toString();
    const querystring = self.split("?");
    if (querystring.length > 1) {
        const pairs = querystring[1].split("&");
        for (i in pairs) {
            var keyval = pairs[i].split("=");
            if (reset || sessionStorage.getItem(keyval[0]) === null) {
                sessionStorage.setItem(
                    keyval[0],
                    decodeURIComponent(keyval[1])
                );
            }
        }
    }
    const hiddenFields = document.querySelectorAll(
        "input[type=hidden], input[type=text]"
    );
    for (let i = 0; i < hiddenFields.length; i++) {
        const param = sessionStorage.getItem(hiddenFields[i].name);
        if (param)
            document.getElementsByName(hiddenFields[i].name)[0].value = param;
    }
};

setTimeout(function () {
    queryForm();
}, 3000);

//valida email
function validacaoEmail(email) {
    var verifica =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return verifica.test(String(email).toLowerCase());
}

function emailCorporativo(email) {
    const invalidDomains = [
        "@gmail.",
        "@yahoo.",
        "@hotmail.",
        "@live.",
        "@aol.",
        "@outlook.",
        "@terra.",
        "@bol.",
        "@uol.",
    ];

    for (let i = 0; i < invalidDomains.length; i++) {
        const domain = invalidDomains[i];
        if (email.indexOf(domain) != -1) {
            return false;
        }
    }
    return true;
}

function showErrorPopUp(text, element, timer = 2000) {
    Swal.fire({
        icon: "warning",
        text: text,
        timer: timer,
        onAfterClose: () => {
            element.focus();
        },
    });
}

function showBorderError(element) {
    element.parentElement.classList.add("invalid");
    setTimeout(() => {
        element.parentElement.classList.remove("invalid");
    }, 3500);
}

/* ------------ Máscara para telefone ------------ */
telefone.addEventListener("input", handleInput, false);

function handleInput(e) {
    e.target.value = phoneMask(e.target.value);
}

function phoneMask(phone) {
    return phone
        .replace(/\D/g, "")
        .replace(/^(\d)/, "($1")
        .replace(/^(\(\d{2})(\d)/, "$1) $2")
        .replace(/(\d{5})(\d{1,4})/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
}

// <!-- URL_PAGINA Script -->
setTimeout(function () {
    document.querySelector("input[name='url_pagina']").value =
        location.protocol + "//" + location.host + location.pathname;
}, 1500);

// SELECT COLORS
const selects = document.querySelectorAll("select");
selects.forEach((select) => {
    select.style.color = "#5f5f5f";

    select.addEventListener("change", (e) => {
        if (e.target.value === "nulo") {
            select.style.color = "#5f5f5f";
        } else {
            select.style.color = "#000b1d";
        }
    });
});
