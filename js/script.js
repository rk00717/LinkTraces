function add_link_trace(title, link){
    var button = document.createElement("div");
    button.className = "link_button";
    button.onclick = function(){
        window.open(link);
    };
    button.innerHTML = '<span class="links">'+title+'</span>';

    var container = document.getElementById("links_list");
    container.append(button);
}

function copy_to_clipboard(link){
    navigator.clipboard.writeText(link);
}

function init_page(){
    add_link_trace("Youtube", YOUTUBE_LINK);
    add_link_trace("Itch.io", ITCHIO_LINK);
    add_link_trace("Github", GITHUB_LINK);
    add_link_trace("Linkedin", LINKEDN_LINK);
}
