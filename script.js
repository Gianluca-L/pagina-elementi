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

//TASTO TORNA SU, ESERCIZI

function icon_torna_su_over() {
  $("#icon_torna_su").addClass("background_icon_torna_su")
  $("#freccina").removeClass("colori_freccina_prima")
  $("#freccina").addClass("colori_freccina_dopo")
}
function icon_torna_su_leave() {
  $("#icon_torna_su").removeClass("background_icon_torna_su")
  $("#freccina").removeClass("colori_freccina_dopo")
  $("#freccina").addClass("colori_freccina_prima")
}

$("#cont_icon_freccina").mouseover(icon_torna_su_over);
$("#cont_icon_freccina").mouseleave(icon_torna_su_leave);

// ABOUT
function facebook() {
  if($("#facebook").hasClass("facebook")) {
    $("#facebook").removeClass("facebook")
    $("#facebook").addClass("facebook_invertito")
  }
  }
function pinterest() {
  if($("#pinterest").hasClass("pinterest")) {
    $("#pinterest").removeClass("pinterest")
    $("#pinterest").addClass("pinterest_invertito")
  }
  }
function behance() {
  if($("#behance").hasClass("behance")) {
    $("#behance").removeClass("behance")
    $("#behance").addClass("behance_invertito")
}
}
$("#facebook").mouseover(facebook);
$("#pinterest").mouseover(pinterest);
$("#behance").mouseover(behance);

function social_icon_facebook() {
  if($("#facebook").hasClass("facebook_invertito")) {
    $("#facebook").removeClass("facebook_invertito")
    $("#facebook").addClass("facebook")
  }
  }
function social_icon_pinterest() {
  if($("#pinterest").hasClass("pinterest_invertito")) {
    $("#pinterest").removeClass("pinterest_invertito")
    $("#pinterest").addClass("pinterest")
  }
  }
function social_icon_behance() {
  if($("#behance").hasClass("behance_invertito")) {
    $("#behance").removeClass("behance_invertito")
    $("#behance").addClass("behance")
}
}
$("#facebook").mouseleave(social_icon_facebook);
$("#pinterest").mouseleave(social_icon_pinterest);
$("#behance").mouseleave(social_icon_behance);
