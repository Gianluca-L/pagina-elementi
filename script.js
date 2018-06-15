// HOME_ICON
function home_icon_width() {
    $("#blocco_1").removeClass("home_icon")
    $("#blocco_2").removeClass("home_icon")
    $("#blocco_3").removeClass("home_icon")
    $("#blocco_1").addClass("home_icon_width")
    $("#blocco_2").addClass("home_icon_width")
    $("#blocco_3").addClass("home_icon_width")
  }
  function home_icon_width_out() {
      $("#blocco_1").removeClass("home_icon_width")
      $("#blocco_2").removeClass("home_icon_width")
      $("#blocco_3").removeClass("home_icon_width")
      $("#blocco_1").addClass("home_icon")
      $("#blocco_2").addClass("home_icon")
      $("#blocco_3").addClass("home_icon")
    }
$("#container_home").mouseover(home_icon_width);
$("#container_home").mouseleave(home_icon_width_out);

// ARROW_ICON

function arrow_icon_width() {
    $("#barretta_controls").removeClass("barretta_w0")
    $("#barretta_controls").addClass("barretta_w1")
  }
  function arrow_icon_width_out() {
      $("#barretta_controls").removeClass("barretta_w1")
      $("#barretta_controls").addClass("barretta_w0")
    }
$("#Prossimo_Progetto").mouseover(arrow_icon_width);
$("#Prossimo_Progetto").mouseleave(arrow_icon_width_out);

function arrow_icon_width_sx() {
    $("#barretta_controls_sx").removeClass("barretta_w0")
    $("#barretta_controls_sx").addClass("barretta_w1")
  }
  function arrow_icon_width_out_sx() {
      $("#barretta_controls_sx").removeClass("barretta_w1")
      $("#barretta_controls_sx").addClass("barretta_w0")
    }
$("#Progetto_Precedente").mouseover(arrow_icon_width_sx);
$("#Progetto_Precedente").mouseleave(arrow_icon_width_out_sx);
