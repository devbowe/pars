window.onload = function () {
    $("#phone-cf87a820-bbd3-4d40-bcdc-1ed21db4ac9e").prop("type", "text");
    $(
        "#hsForm_cf87a820-bbd3-4d40-bcdc-1ed21db4ac9e > div.hs_phone.hs-phone.hs-fieldtype-text.field.hs-form-field > div"
    ).html(
        '<input id="phone-cf87a820-bbd3-4d40-bcdc-1ed21db4ac9e" class="hs-input" type="text" name="phone" required="" value="" placeholder="Telefone" autocomplete="tel" data-reactid=".hbspt-forms-0.1:$2.0">'
    );

    $("#phone-cf87a820-bbd3-4d40-bcdc-1ed21db4ac9e")
        .mask("(99) 9999-9999?9")
        .focusout(function (event) {
            var target, phone, element;
            target = event.currentTarget
                ? event.currentTarget
                : event.srcElement;
            phone = target.value.replace(/\D/g, "");
            element = $(target);
            element.unmask();
            if (phone.length > 10) {
                element.mask("(99) 99999-999?9");
            } else {
                element.mask("(99) 9999-9999?9");
            }
        });

    // Input apenas letras
    $("input[name=firstname]").keypress(function (e) {
        try {
            if (window.event) {
                var charCode = window.event.keyCode;
            } else if (e) {
                var charCode = e.which;
            } else {
                return true;
            }
            if (
                (charCode > 64 && charCode < 91) ||
                (charCode > 96 && charCode < 123) ||
                (charCode > 191 && charCode <= 255) ||
                charCode === 32 // letras com acentos
            ) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            alert(err.Description);
        }
    });
};

$("#phone")
    .mask("(99) 9999-9999?9")
    .focusout(function (event) {
        var target, phone, element;
        target = event.currentTarget ? event.currentTarget : event.srcElement;
        phone = target.value.replace(/\D/g, "");
        element = $(target);
        element.unmask();
        if (phone.length > 10) {
            element.mask("(99) 99999-999?9");
        } else {
            element.mask("(99) 9999-9999?9");
        }
    });
$("#phone")[0].selectionStart;

$("#send").click(function () {
    const nome = $("#firstname");
    const email = $("#email");
    const telefone = $("#phone");
    const company = $("#company");
    const segmento = $("#segmento");
    const docs_transacionados = $("#docs_transacionados");
    const employees = $("#quantos_funcionarios_a_empresa_possui_");

    if (!nome.val()) {
        Swal.fire({
            icon: "warning",
            text: "Informe seu nome",
            timer: 2000,
            onAfterClose: () => {
                nome.focus();
            },
        });
    } else if (!validacaoEmail(email.val())) {
        Swal.fire({
            icon: "warning",
            text: "Informe seu e-mail",
            timer: 2000,
            onAfterClose: () => {
                email.focus();
            },
        });
    } else if (emailCorporativo(email.val()) == false) {
        Swal.fire({
            icon: "warning",
            text: "Informe um e-mail corporativo",
            timer: 2000,
            onAfterClose: () => {
                email.focus();
            },
        });
    } else if (!telefone.val()) {
        Swal.fire({
            icon: "warning",
            text: "Informe seu telefone",
            timer: 2000,
            onAfterClose: () => {
                telefone.focus();
            },
        });
    } else if (!company.val()) {
        Swal.fire({
            icon: "warning",
            text: "Informe sua empresa",
            timer: 2000,
            onAfterClose: () => {
                company.focus();
            },
        });
    } else if (segmento.val() == "nulo") {
        Swal.fire({
            icon: "warning",
            text: "Informe o segmento",
            timer: 2000,
            onAfterClose: () => {
                usuarios.focus();
            },
        });
    } else if (docs_transacionados.val() == "nulo") {
        Swal.fire({
            icon: "warning",
            text: "Informe o n??mero de documentos transacionados",
            timer: 2000,
            onAfterClose: () => {
                usuarios.focus();
            },
        });
    } else if (!employees.val()) {
        Swal.fire({
            icon: "warning",
            text: "Informe o n??mero de funcion??rios da empresa",
            timer: 2000,
            onAfterClose: () => {
                usuarios.focus();
            },
        });
    } else if (!$("#consentimento").is(":checked")) {
        Swal.fire({
            icon: "warning",
            text: "Necess??rio dar ci??ncia em receber comunica????es",
            timer: 2000,
            onAfterClose: () => {
                consentimento.focus();
            },
        });
    } else {
        /*setTimeout(function() {
            window.location.href = "./agradecimento-adobe-acrobatdc-editor-pdf.html";
        },500);*/

        return true;
    }
    return false;
});

//valida email
function validacaoEmail(email) {
    var verifica =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return verifica.test(String(email).toLowerCase());
}

function validacaoNome(nome) {
    var verifica = /[a-z]+@[a-z]+\.[a-z]+/;
    return verifica.test(String(nome).toLowerCase());
}

var queryForm = function (settings) {
    var reset = settings && settings.reset ? settings.reset : false;
    var self = window.location.toString();
    var querystring = self.split("?");
    if (querystring.length > 1) {
        var pairs = querystring[1].split("&");
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
    var hiddenFields = document.querySelectorAll(
        "input[type=hidden], input[type=text]"
    );
    for (var i = 0; i < hiddenFields.length; i++) {
        var param = sessionStorage.getItem(hiddenFields[i].name);
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

var invalidDomains = [
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

function emailCorporativo(email) {
    for (var i = 0; i < invalidDomains.length; i++) {
        var domain = invalidDomains[i];
        if (email.indexOf(domain) != -1) {
            return false;
        }
    }
    return true;
}
