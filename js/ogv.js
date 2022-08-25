var dataBoard


        $(document).ready(function () {

            $.getJSON('https://raw.githubusercontent.com/jhonatanisc/dataforboard/main/data.json', function (data) {
                refillCards(data);
                refillGeneral();
            });

            function refillCards(data) {
                dataBoard = data;
                var $select = $('#areas');
                $.each(dataBoard.Avance, function (pos, object) {
                    if (pos != 10 && pos != 9) {
                        $select.append('<option value=' + pos + '>' + object.Area + '</option>');
                        const boards = $("#areas_board");
                        boards.append(
                            "<div class='col my-1'>" +
                            "<div class='card'>" +
                            "<div class='card-header'>" +
                            "<h5 class='card-title'>" + object.Area + "</h5>" +
                            "</div>" +
                            "<div class='card-body'>" +
                            "<div class='avance'>" +
                            "<label>Innovacion en la agenda del presente" + " (" + object.Compromiso1 + "/" + (dataBoard.Avance[10].Compromiso1) + ")" + "</label>" +
                            "<div class='progress'>" +
                            "<div class='progress-bar bg-success' role='progressbar' style='width: " + (100 / (dataBoard.Avance[10].Compromiso1) * object.Compromiso1) + "%" + "' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>" +
                            "</div>" +
                            "<div class='avance'>" +
                            "<label>Comunicación y alineación" + " (" + object.Compromiso2 + "/" + (dataBoard.Avance[10].Compromiso2) + ")" + "</label>" +
                            "<div class='progress'>" +
                            "<div id='p-comp2' class='progress-bar bg-info' role='progressbar' style='width: " + (100 / (dataBoard.Avance[10].Compromiso2) * object.Compromiso2) + "%" + "' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'></div>" +
                            "</div>" +
                            "</div>" +
                            "<div class='avance'>" +
                            "<label>Implementación de métricas y mejoras" + " (" + object.Compromiso3 + "/" + (dataBoard.Avance[10].Compromiso3) + ")" + "</label>" +
                            "<div class='progress'>" +
                            "<div id='p-comp3' class='progress-bar bg-warning' role='progressbar' style='width: " + (100 / (dataBoard.Avance[10].Compromiso3) * object.Compromiso3) + "%" + "' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></div>" +
                            "</div>" +
                            "</div>" +
                            "<div class='avance'>" +
                            "<label>Visión empresarial conjunta" + " (" + object.Compromiso4 + "/" + (dataBoard.Avance[10].Compromiso4) + ")" + "</label>" +
                            "<div class='progress'>" +
                            "<div id='p-comp4' class='progress-bar bg-black' role='progressbar' style='width: " + (100 / (dataBoard.Avance[10].Compromiso4) * object.Compromiso4) + "%" + "' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></div>" +
                            "</div>" +
                            "</div>" +
                            "<div class='avance'>" +
                            "<label>Transformación digital" + " (" + object.Compromiso5 + "/" + (dataBoard.Avance[10].Compromiso5) + ")" + "</label>" +
                            "<div class='progress'>" +
                            "<div id='p-comp5' class='progress-bar bg-danger' role='progressbar' style='width: " + (100 / (dataBoard.Avance[10].Compromiso5) * object.Compromiso5) + "%" + "' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></div>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "</div>"
                        );
                    }
                });
            }

            function refillGeneral() {
                var dataArea = dataBoard.Avance[9];
                var dataTotal = dataBoard.Avance[10];
                var comp1 = parseInt(((100 / (dataTotal.Compromiso1 * dataBoard.Avance.length - 2)) * dataArea.Compromiso1)) + "%";
                var comp2 = parseInt(((100 / (dataTotal.Compromiso2 * dataBoard.Avance.length - 2)) * dataArea.Compromiso2)) + "%";
                var comp3 = parseInt(((100 / (dataTotal.Compromiso3 * dataBoard.Avance.length - 2)) * dataArea.Compromiso3)) + "%";
                var comp4 = parseInt(((100 / (dataTotal.Compromiso4 * dataBoard.Avance.length - 2)) * dataArea.Compromiso4)) + "%";
                var comp5 = parseInt(((100 / (dataTotal.Compromiso5 * dataBoard.Avance.length - 2)) * dataArea.Compromiso5)) + "%";

                $('#p-comp1').css("width", comp1);
                $('#p-comp2').css("width", comp2);
                $('#p-comp3').css("width", comp3);
                $('#p-comp4').css("width", comp4);
                $('#p-comp5').css("width", comp5);

                $('#porc-comp1').text("(" + dataArea.Compromiso1 + "/" + (dataTotal.Compromiso1 * 9) + ")");
                $('#porc-comp2').text("(" + dataArea.Compromiso2 + "/" + (dataTotal.Compromiso2 * 9) + ")");
                $('#porc-comp3').text("(" + dataArea.Compromiso3 + "/" + (dataTotal.Compromiso3 * 9) + ")");
                $('#porc-comp4').text("(" + dataArea.Compromiso4 + "/" + (dataTotal.Compromiso4 * 9) + ")");
                $('#porc-comp5').text("(" + dataArea.Compromiso5 + "/" + (dataTotal.Compromiso5 * 9) + ")");
            }
        });