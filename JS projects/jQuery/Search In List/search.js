function search() {
    let targetValue = $('#searchText').val();
    if (targetValue.trim() !== '') {
        $('#towns li').css('font-weight', '');
        let arr = $(`#towns li:contains(${targetValue})`);
        $('#result').text(arr.length + ' matches found.')
        arr.css('font-weight', 'bold');
    }
}