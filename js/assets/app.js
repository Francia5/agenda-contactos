var count = 0;
function getContactData () {
    // console.log("holi");
    var $name = $("#contact-name");
    var $phone = $("#contact-phone");
    // console.log(name, phone);
    addContactData($name.val(), $phone.val());
    $name.val('');
    $phone.val('');

};

var template = '<div class="row">'+
                    '<div class="col offset-s3 s6">'+
                        '<div class="card">'+
                            '<div class="card-content light-green lighten-4">'+
                                '<h3>__name__</h3>'+
                                '<span>__phone__</span>'+
                               ' <a class="waves-effect waves-light btn right"><i class="material-icons">delete</i></a>'+
                           ' </div>'+
                       ' </div>'+
                    '</div>'+
                '</div>';


function  addContactData (name, phone) {
    count++;
    var finaltemplate = "";
    finaltemplate = template.replace("__name__", name)
        .replace("__phone__", phone);

    $("main").append(finaltemplate);
    $("h5").html("Total contactos : "+ count);
    swal("Good job!", "Agregaste un contacto", "success");
}




$(document).ready(function () {
    $('.modal').modal();
    $("#add-contact").click(getContactData);
});


