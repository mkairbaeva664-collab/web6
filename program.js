//Task 0 
$(document).ready(function() {
    console.log("jQuery is ready!");
    
    //Task1
    $("h1").css("color", "darkred");
    $(".name").css("color", "brown");
    $("#portfolio").css("padding", "4px");

    $("#changeText").click(function() {
        $(".headline").text("Studying second year bachelor.");
    });

    $("#ligthTheme").click(function() {
        $("body").removeClass("dark-mode");
    });

    $("#darkTheme").click(function() {
        $("body").addClass("dark-mode");
    });

    //Task2
    $("#hideBtn").click(function() {
        $("#status, #funFacts").hide();
    });

    $("#showBtn").click(function() {
        $("#status, #funFacts").show();
    });

    $("#toggleBtn").click(function() {
        $("#status, #funFacts").toggle();
    });

    //Task3
    $("#fadeInBtn").click(function() {
        $(".gallery-img").fadeIn(1000);
    });

    $("#fadeOutBtn").click(function() {
        $(".gallery-img").fadeOut(1000);
    });

    $("#fadeToggleBtn").click(function() {
        $(".gallery-img").fadeToggle(1000);
    });

    //Task 4
    $(".slide-heading").click(function() {
        $(this).next(".slide-panel").slideToggle(500);
    });

    $("#slideDownBtn").click(function() {
        $(".slide-panel").slideDown(500);
    })

    $("#slideUpBtn").click(function() {
        $(".slide-panel").slideUp(500);
    });

    //Task 5
    $("#addSkill").click(function() {
        let skill = $("#skillInput").val().trim();

        if (skill !== "") {
            $("#skillList").append("<li>" + $("<div>").text(skill).html() + "</li>");
            $("#skillInput").val("");
        } else {
            alert("Please enter a skill!");
        }
    });

    $("#prependSkill").click(function() {
        let skill = $("#skillInput").val().trim();

        if (skill !== "") {
            $("#skillList").prepend("<li>" + $("<div>").text(skill).html() + "</li>");
            $("#skillInput").val("");
        } else {
            alert("Please enter a skill!");
        }
    });

    $("#removeSkill").click(function() {
        $("#skillList li:last").remove();
    });

    //Task 6
    $("#changeLink").click(function() {
        $("#socialLink").attr("href", "https://www.linkedin.com/in/%D0%BC%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0-%D0%BA%D0%B0%D0%B8%D1%80%D0%B1%D0%B0%D0%B5%D0%B2%D0%B0-4a532b3a8?utm_source=share_via&utm_content=profile&utm_medium=member_android");
        $("#socialLink").text("Visit LinkedIn")
    });

    //Task 7
    $("#userName").on("input", function() {
        let name = $(this).val();

        $("#previewName").text("Name: " + name);
    })

    $("#userEmail").on("input", function() {
        let email = $(this).val();

        $("#previewEmail").text("Email: " + email);
    });

    //Task 8
    let skillsAnimated = false;

    $("#animateSkills").click(function() {

        if (!skillsAnimated) {

            $(".skill-progress").each(function() {

                let targetWidth = $(this).attr("data-width");

                $(this).animate({
                    width: targetWidth
                }, 1500);

            });

            skillsAnimated = true;

        } else {

            $(".skill-progress").animate({
                width: "0%"
            }, 1500);

            skillsAnimated = false;

        }

    });
});

