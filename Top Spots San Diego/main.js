$(document).ready(() => {
    $('#content').hide();
    setTimeout(() => {
        $('#loadContainer').addClass('hidden');
        $('#content').show();
    }, 2000)
    $.getJSON('data.json', data => {
        $.each(data, (_, item) => {
            const link = `https://www.google.com/maps/@${item.location[0]},${item.location[1]},14z?entry=ttu`;
            $('#dataTable tbody').append(
                `<tr>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td><a href= '${link}' target= '_blank'>Directions</a></td>
                </tr>`
            );
        });
    });
});
